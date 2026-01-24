# Page Ready Investigation Summary

## Goal
Convert undeterministic `sleep()` calls into deterministic event waits when toggling the extension.

## Problem
After `toggleExtensionForActiveTab()` returns, the page is not immediately available in Playwright's `context.pages()`. Tests currently use arbitrary sleeps (100-400ms) to work around this.

## Key Events Required

For a page to appear in `context.pages()`, Playwright needs:

1. **`Target.attachedToTarget`** - Tells Playwright a new target exists with its URL
2. **`Runtime.executionContextCreated`** - Tells Playwright the JS context is ready

The page appears in `context.pages()` only after BOTH events are processed.

## Current Flow (Timeline from test)

```
  63ms ← EVT Target.attachedToTarget        # Extension sends to relay
 431ms ← EVT Runtime.executionContextCreated # Relay's proactive Runtime.enable
 437ms → CMD Runtime.enable                  # Playwright sends its own
 438ms   Toggle completes (pageReady received)
 467ms ← EVT Runtime.executionContextCreated # Response to Playwright's Runtime.enable  
 728ms   Page appears in context.pages()
```

## Root Cause

The ~300ms delay between toggle completing and page appearing is caused by:

1. **Extension's `Runtime.enable` handler** (background.ts:256-272):
   - Always calls `Runtime.disable` then `Runtime.enable`
   - Has a 50ms `sleep()` between them
   - This is needed to force Chrome to re-send `executionContextCreated` events for multiple clients

2. **Double Runtime.enable cycle**:
   - Relay proactively enables Runtime → events at ~430ms
   - Playwright receives `Target.attachedToTarget`, sends its own `Runtime.enable`
   - Extension does disable+enable again → events at ~470ms
   - Playwright waits for ITS events before adding page to pages()

3. **Playwright's internal processing**:
   - Even after receiving events, Playwright takes time to create Page objects
   - This is async and cannot be controlled from our side

## What We Tried

1. **Proactive Runtime.enable in relay** - Enable Runtime before forwarding `Target.attachedToTarget`
   - Helps get events faster, but Playwright still calls Runtime.enable itself

2. **Skip disable cycle if recently enabled** - Track recent enables in extension
   - Breaks because relay's Runtime.enable handler waits for events that won't come

3. **pageReady handshake** - Extension waits for relay confirmation before returning from attachTab
   - Toggle now waits for executionContextCreated
   - But Playwright STILL calls Runtime.enable after, causing another cycle

## The Core Issue

**Playwright always calls `Runtime.enable` after receiving `Target.attachedToTarget`**, regardless of whether we pre-enabled it. The extension's disable+enable cycle adds ~200ms, and we cannot skip it without breaking the multi-client case.

## Possible Solutions

### Option 1: Accept the delay, use proper waiting
Instead of sleep, use `context.waitForEvent('page')` with a predicate:
```typescript
await serviceWorker.evaluate(() => globalThis.toggleExtensionForActiveTab())
const page = await context.waitForEvent('page', { 
  predicate: p => p.url().includes('target-url') 
})
```

### Option 2: Expose a "page ready" promise from the relay
Add an endpoint or event that resolves when the page is fully ready in Playwright:
```typescript
await serviceWorker.evaluate(() => globalThis.toggleExtensionForActiveTab())
await relay.waitForPageReady(sessionId) // Waits for Playwright to process everything
```

### Option 3: Have extension track Runtime state per session
Skip the disable+enable if:
- This is the SAME Playwright client that just received `Target.attachedToTarget`
- The session was JUST created (within last 100ms)

This requires tracking which client enabled Runtime and when.

## Recommendation

**Option 1 is the simplest and most reliable.** The delay is inherent to how Playwright processes CDP events. We cannot eliminate it, but we can wait for it properly using `context.waitForEvent('page')` instead of arbitrary sleeps.

The test should be:
```typescript
const pagePromise = context.waitForEvent('page', { 
  predicate: p => p.url().includes('discord.com'),
  timeout: 5000 
})
await serviceWorker.evaluate(() => globalThis.toggleExtensionForActiveTab())
const page = await pagePromise
// Page is now guaranteed to be ready
```
