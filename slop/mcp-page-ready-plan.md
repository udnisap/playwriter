# Plan: Add Deterministic Page Waiting to mcp.ts

## Current Problem

In `mcp.ts`, both `connect()` and `reconnect()` functions:

```typescript
const browser = await chromium.connectOverCDP(cdpEndpoint)
const context = contexts[0]
const pages = context.pages()  // May be empty!
if (pages.length === 0) {
  throw new Error(NO_TABS_ERROR)
}
```

This fails when:
1. Extension has tabs connected, but...
2. Playwright hasn't finished processing `Target.attachedToTarget` + `Runtime.executionContextCreated` events

## Solution

Use `context.waitForEvent('page')` with a timeout, similar to our test fix.

## Implementation Plan

### Step 1: Create a helper function

```typescript
async function waitForPages(context: BrowserContext, options?: { 
  timeout?: number 
  minPages?: number 
}): Promise<Page[]> {
  const { timeout = 5000, minPages = 1 } = options || {}
  
  // Check if pages already exist
  let pages = context.pages()
  if (pages.length >= minPages) {
    return pages
  }

  // Wait for page events
  const startTime = Date.now()
  while (pages.length < minPages && Date.now() - startTime < timeout) {
    try {
      await context.waitForEvent('page', { timeout: timeout - (Date.now() - startTime) })
      pages = context.pages()
    } catch {
      // Timeout - check one more time
      pages = context.pages()
      break
    }
  }

  return pages
}
```

### Step 2: Update `connect()` function (line ~305)

```typescript
// Before:
const pages = context.pages()
if (pages.length === 0) {
  throw new Error(NO_TABS_ERROR)
}

// After:
const pages = await waitForPages(context, { timeout: 5000 })
if (pages.length === 0) {
  throw new Error(NO_TABS_ERROR)
}
```

### Step 3: Update `reconnect()` function (line ~448)

Same change as above.

### Step 4: Consider the "createInitialTab" flow

The relay server has a `createInitialTab` message for when no tabs exist. We should:
1. First try `waitForPages()` with a short timeout (1-2 seconds)
2. If still no pages, request `createInitialTab`
3. Then `waitForPages()` again for the new tab

```typescript
let pages = await waitForPages(context, { timeout: 2000 })
if (pages.length === 0) {
  // No tabs - request extension to create one
  await requestCreateInitialTab()
  pages = await waitForPages(context, { timeout: 5000 })
}
if (pages.length === 0) {
  throw new Error(NO_TABS_ERROR)
}
```

## Testing

1. Run existing tests to ensure no regression
2. Add a new test that:
   - Connects immediately after extension toggle
   - Verifies pages are available without sleep

## Files to Modify

1. `playwriter/src/mcp.ts`:
   - Add `waitForPages()` helper
   - Update `connect()` function
   - Update `reconnect()` function

## Edge Cases

1. **All pages are `about:blank`**: May need to filter for real pages
2. **Extension not connected**: Existing timeout handling should work
3. **Very slow page load**: 5 second timeout should be sufficient for CDP events (actual page content load is not required)
