# Playwright CDP Connection Flow

This document describes exactly what CDP commands, responses, and events Playwright
sends and expects when connecting to a browser via `connectOverCDP`. Understanding
this flow is critical for implementing a CDP relay that works correctly with Playwright.

## Connection Sequence Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. ENDPOINT RESOLUTION                                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│ If HTTP URL → fetch /json/version/ to get webSocketDebuggerUrl              │
│ If WS URL   → use directly                                                  │
└─────────────────────────────────────────────────────────────────────────────┘
                                      ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│ 2. WEBSOCKET CONNECT                                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│ Connect to ws://host:port/devtools/browser/<id>                             │
│ Creates root CDP session with sessionId = '' (empty string)                 │
└─────────────────────────────────────────────────────────────────────────────┘
                                      ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│ 3. BROWSER INITIALIZATION (root session)                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│ Command: Browser.getVersion                                                 │
│ Response: { protocolVersion, product, userAgent, ... }                      │
│                                                                             │
│ Command: Target.setAutoAttach                                               │
│   params: { autoAttach: true, waitForDebuggerOnStart: true, flatten: true } │
│ Response: {}                                                                │
│                                                                             │
│ (Chrome bug workaround)                                                     │
│ Command: Target.getTargetInfo                                               │
│ Response: { targetInfo: { type: 'browser', ... } }                          │
└─────────────────────────────────────────────────────────────────────────────┘
                                      ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│ 4. TARGET DISCOVERY (events from browser)                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ For each existing page/target, Chrome sends:                                │
│                                                                             │
│ Event: Target.attachedToTarget                                              │
│   params: {                                                                 │
│     targetInfo: {                                                           │
│       type: 'page' | 'service_worker' | 'browser' | 'other',                │
│       targetId: string,                                                     │
│       browserContextId: string,                                             │
│       url: string,              ← page URL is here                          │
│       openerId?: string         ← for popups                                │
│     },                                                                      │
│     sessionId: string,          ← CDP session ID for this target            │
│     waitingForDebugger: boolean                                             │
│   }                                                                         │
└─────────────────────────────────────────────────────────────────────────────┘
                                      ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│ 5. PAGE INITIALIZATION (per-page session)                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ For each page, Playwright sends these commands on the page's sessionId:     │
│                                                                             │
│ Parallel batch 1:                                                           │
│   - Page.enable                                                             │
│   - Page.getFrameTree                                                       │
│   - Network.enable                                                          │
│   - Runtime.enable           ← triggers executionContextCreated             │
│   - Page.setLifecycleEventsEnabled { enabled: true }                        │
│   - Log.enable                                                              │
│   - Page.addScriptToEvaluateOnNewDocument { ... }                           │
│   - Target.setAutoAttach { autoAttach: true, ... }  ← for iframes           │
│                                                                             │
│ Then:                                                                       │
│   - Runtime.runIfWaitingForDebugger  ← unpauses the page                    │
└─────────────────────────────────────────────────────────────────────────────┘
                                      ↓
┌─────────────────────────────────────────────────────────────────────────────┐
│ 6. EXECUTION CONTEXT CREATION (events from browser)                         │
├─────────────────────────────────────────────────────────────────────────────┤
│ After Runtime.enable, Chrome sends:                                         │
│                                                                             │
│ Event: Runtime.executionContextCreated                                      │
│   params: {                                                                 │
│     context: {                                                              │
│       id: number,               ← contextId for Runtime.evaluate            │
│       auxData: {                                                            │
│         frameId: string,                                                    │
│         isDefault: boolean      ← true = main world                         │
│       },                                                                    │
│       name: string              ← matches utility world name if isolated    │
│     }                                                                       │
│   }                                                                         │
│                                                                             │
│ Playwright creates a ManualPromise for each world ('main', 'utility').      │
│ The promise resolves when executionContextCreated fires for that world.     │
└─────────────────────────────────────────────────────────────────────────────┘
```

## CDP Commands Sent by Playwright

### On Browser Connection (root session, sessionId = '')

| Order | Command | Parameters | Purpose |
|-------|---------|------------|---------|
| 1 | `Browser.getVersion` | none | Get browser version, user agent, detect headless |
| 2 | `Target.setAutoAttach` | `autoAttach: true, waitForDebuggerOnStart: true, flatten: true` | Auto-attach to all targets |
| 3 | `Target.getTargetInfo` | none | Chrome bug workaround - ensures targets attached |

### On Page Attachment (page session)

| Command | Purpose |
|---------|---------|
| `Page.enable` | Enable Page domain events |
| `Page.getFrameTree` | Get frame hierarchy |
| `Network.enable` | Enable network interception |
| `Runtime.enable` | Enable JS execution contexts |
| `Page.setLifecycleEventsEnabled` | Enable load/DOMContentLoaded events |
| `Log.enable` | Enable console message capture |
| `Page.addScriptToEvaluateOnNewDocument` | Inject Playwright's utility scripts |
| `Target.setAutoAttach` | Auto-attach to iframes |
| `Runtime.runIfWaitingForDebugger` | Unpause the page |

## CDP Events Playwright Listens For

### Browser-Level Events (root session)

| Event | Handler | Purpose |
|-------|---------|---------|
| `Target.attachedToTarget` | `_onAttachedToTarget` | New page/target discovered |
| `Target.detachedFromTarget` | `_onDetachedFromTarget` | Page/target closed |
| `Browser.downloadWillBegin` | `_onDownloadWillBegin` | Download started |
| `Browser.downloadProgress` | `_onDownloadProgress` | Download progress |

### Page-Level Events (page session)

| Event | Purpose |
|-------|---------|
| `Runtime.executionContextCreated` | JavaScript context ready |
| `Runtime.executionContextDestroyed` | Context destroyed (navigation) |
| `Page.frameAttached` | New iframe |
| `Page.frameDetached` | Iframe removed |
| `Page.navigatedWithinDocument` | SPA navigation |
| `Page.lifecycleEvent` | load, DOMContentLoaded, etc. |
| `Page.frameStoppedLoading` | Frame finished loading |
| `Network.requestWillBeSent` | Request started |
| `Network.responseReceived` | Response received |
| `Log.entryAdded` | Console message |

## The Context Promise Mechanism

Playwright uses a `ManualPromise` pattern for execution contexts:

```
Frame created
     ↓
ManualPromise created for 'main' and 'utility' worlds
     ↓
Runtime.enable sent
     ↓
Chrome sends Runtime.executionContextCreated
     ↓
_contextCreated() resolves the ManualPromise
     ↓
page.evaluate() can now execute
```

### How User APIs Wait for Context

Every DOM operation in Playwright awaits `_context()` before running:

```typescript
// frames.ts
async evaluateExpression(expression, options, arg) {
  const context = await this._context(options.world ?? 'main');  // waits here
  return context.evaluateExpression(expression, options, arg);
}

_context(world: 'main' | 'utility'): Promise<FrameExecutionContext> {
  return this._contextData.get(world)!.contextPromise.then(...);
}
```

### Context Lifecycle on Navigation

```
Navigation starts
     ↓
Runtime.executionContextDestroyed fires
     ↓
_setContext(world, null) → creates NEW ManualPromise
     ↓
Any evaluate() call now waits on new promise
     ↓
New page loads, Runtime.executionContextCreated fires
     ↓
_contextCreated() resolves the new promise
     ↓
Waiting evaluate() calls proceed
```

## World Types

Playwright uses two JavaScript execution worlds:

| World | Purpose | APIs That Use It |
|-------|---------|------------------|
| **main** | Page's own JS context. User's `evaluate()` runs here. | `evaluate()`, `evaluateHandle()`, `addScriptTag()`, `addStyleTag()` |
| **utility** | Isolated world. Playwright's internal code runs here. | `$()`, `$$()`, `click()`, `fill()`, `type()`, `content()`, `waitForSelector()` |

### Why Two Worlds?

- **main**: User code needs access to page variables and functions
- **utility**: Playwright's selectors/actions need isolation from page code that might override `document.querySelector`, etc.

### Element Handle Adoption

When `page.$()` or `waitForSelector()` returns an element:
1. Query runs in **utility** world
2. Result is adopted to **main** world
3. User receives handle bound to main context

## What Must Happen Before User Code Can Run

For `page.evaluate()` or any DOM operation to work:

1. **WebSocket connected** to CDP endpoint
2. **Browser.getVersion** returned successfully
3. **Target.setAutoAttach** sent and acknowledged
4. **Target.attachedToTarget** received for the page
5. **Runtime.enable** sent on page session
6. **Runtime.executionContextCreated** received for the frame
7. **ManualPromise resolved** for the appropriate world

If any step is missing or delayed, `evaluate()` will hang waiting for the context promise.

## Key Parameters Explained

### Target.setAutoAttach Parameters

| Parameter | Value | Purpose |
|-----------|-------|---------|
| `autoAttach` | `true` | Automatically attach to new targets |
| `waitForDebuggerOnStart` | `true` | Pause new targets until `Runtime.runIfWaitingForDebugger` |
| `flatten` | `true` | Use flat session IDs (not nested) |

### Why waitForDebuggerOnStart?

Without this, a page could start executing before Playwright injects its utility scripts. With it:
1. Chrome pauses the page immediately after creation
2. Playwright sends initialization commands
3. Playwright sends `Runtime.runIfWaitingForDebugger`
4. Page starts executing with Playwright ready

## Implications for CDP Relay Implementation

A CDP relay (like playwriter) must:

1. **Forward Target.setAutoAttach** and return response before any targets attach
2. **Send Target.attachedToTarget** with correct `targetInfo` including `url`
3. **Forward Runtime.enable** and ensure `Runtime.executionContextCreated` follows
4. **Use correct sessionId** for page-specific commands/events
5. **Handle session lifecycle** - detach events when tabs close

### Critical Timing

The relay should ensure:
- `Target.attachedToTarget` is sent before any page commands
- `Runtime.executionContextCreated` is sent after `Runtime.enable` returns
- Events use the correct `sessionId` matching the target

See `cdp-timing.md` for details on our relay's event synchronization.

## When `context.on('page')` / `context.waitForEvent('page')` Fires

Both `context.on('page')` and `context.waitForEvent('page')` listen to the **same
underlying event**. The difference is only in consumption pattern:

| Aspect | `context.on('page', cb)` | `context.waitForEvent('page')` |
|--------|--------------------------|-------------------------------|
| Return | EventEmitter | Promise\<Page\> |
| Fires | Every time | First match only |
| Timeout | None | Built-in timeout |
| Predicate | Manual | Native `{ predicate: fn }` |
| Cleanup | Manual `off()` | Auto-removes listener |
| Close handling | Manual | Auto-rejects if context closes |

The 'page' event on BrowserContext is NOT immediate after `Target.attachedToTarget`.
It requires page initialization to complete first.

### Event Chain

```
Target.attachedToTarget (CDP event)
         ↓
CRPage created (crBrowser.ts)
         ↓
FrameSession._initialize() starts
         ↓
Parallel CDP commands sent:
  - Page.enable
  - Page.getFrameTree          ← must complete
  - Runtime.enable
  - Log.enable
  - Page.setLifecycleEventsEnabled
  - Runtime.runIfWaitingForDebugger
         ↓
WAIT for _firstNonInitialNavigationCommittedPromise
         ↓
_initialize() resolves
         ↓
page.reportAsNew() called
         ↓
page._markInitialized()
         ↓
this.emitOnContext(BrowserContext.Events.Page, this)  ← 'page' EVENT FIRES
```

### The Navigation Wait Condition

The critical gate is `_firstNonInitialNavigationCommittedPromise`. The 'page' event
does NOT fire until:

1. `Page.getFrameTree` returns the frame structure
2. **AND** one of:
   - Page URL is not `:` (not an initial empty page)
   - `Page.frameNavigated` event arrives for a non-initial navigation

This ensures the page has a **valid URL and frame structure** before user code sees it.

### Key Insights

- `context.on('page')` and `context.waitForEvent('page')` fire on the **same event**
- **`waitForEvent('page')` only waits for NEW pages** - it will NOT resolve with existing pages
- To handle existing pages, check `context.pages()` first before waiting
- The 'page' event fires AFTER page initialization, not immediately on attach
- `Runtime.executionContextCreated` is NOT required for the 'page' event
- The 'page' event guarantees the page has a valid URL and frame tree
- `page.evaluate()` may still need to wait for execution context after 'page' fires

### Handling Existing vs New Pages

```typescript
// waitForEvent only catches NEW pages, not existing ones
const existingPages = context.pages();
if (existingPages.length > 0) {
  return existingPages[0];  // use existing
}
// Only wait if no pages exist yet
const newPage = await context.waitForEvent('page');
```

### Timing Implications for CDP Relay

For `context.on('page')` to fire, the relay must:

1. Send `Target.attachedToTarget` with valid `targetInfo.url`
2. Respond to `Page.getFrameTree` with frame structure
3. Either:
   - Provide a non-empty URL (not `:`) in the frame tree
   - Or send `Page.frameNavigated` event after navigation

## Empty URL Detection

Empty URLs in `Target.attachedToTarget` cause Playwright to create broken pages that
never recover. Both the extension and relay log errors when this happens:

### Extension logging

```typescript
// In attachTab(), after Target.getTargetInfo
if (!targetInfo.url || targetInfo.url === '' || targetInfo.url === ':') {
  logger.error('WARNING: Target.attachedToTarget will be sent with empty URL!')
}
```

### Relay logging

The relay logs `logger.error` warnings when:
- `Target.attachedToTarget` is sent/received with empty URL
- `Target.targetCreated` is sent with empty URL

### Why empty URLs break Playwright

If `Target.attachedToTarget` is sent with empty URL:
- Playwright creates a broken page
- `_firstNonInitialNavigationCommittedPromise` may never resolve
- `page.evaluate()` hangs forever
- **No recovery possible**

### Debugging empty URL issues

Check the logs at `~/.config/opencode/playwriter.log` for:
```
WARNING: Target.attachedToTarget sent with empty URL
WARNING: Target.attachedToTarget received with empty URL
```

These indicate timing issues where the page hasn't fully loaded when attached.
