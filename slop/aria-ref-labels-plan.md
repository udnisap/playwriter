# Plan: Visual Aria Ref Labels (Vimium-style)

## Goal

Add functions to overlay visual ref labels on interactive elements, allowing agents to:
1. Take a screenshot with visible ref labels (e.g., `[e1]`, `[e2]`, `[e3]`)
2. See which elements are interactive and their ref IDs
3. Use `page.locator('aria-ref=e5')` to interact with labeled elements

## Reference Implementation

Based on `/Users/morse/Documents/GitHub/unframer-private/autofill-extension/src/content/`:

### gui.js - Container setup
```js
const guiRoot = document.createElement('div')
guiRoot.style = `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2147483647;  // Max z-index to be on top of everything
  pointer-events: none;  // Don't block clicks on underlying elements
`
document.documentElement.appendChild(guiRoot)
```

### HintRenderer.tsx - Label positioning
```tsx
// Position label at element's top-left corner, accounting for scroll
left: `${window.scrollX + rect.left - 16}px`
top: `${window.scrollY + rect.top - 16}px`  // 16px above element
```

### Vimium-style CSS
```css
font-family: Helvetica, Arial, sans-serif;
font-weight: bold;
font-size: 12px;
padding: 0px 2px;
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFF785), color-stop(100%,#FFC542));
border: 1px solid #E3BE23;
border-radius: 4px;
color: black;
text-shadow: rgba(255, 255, 255, 0.6) 0px 1px 0px;
```

## Existing Code Context

### `getAriaSnapshot()` in `playwriter/src/aria-snapshot.ts`

Already implemented - discovers refs and provides lookup:

```ts
export async function getAriaSnapshot({ page }: { page: Page }): Promise<AriaSnapshotResult> {
  // 1. Calls page._snapshotForAI() to populate Playwright's internal ref tracking
  // 2. Probes aria-ref=e1, e2, e3... to discover all refs
  // 3. Caches ElementHandles in refHandles array
  // 4. Returns { snapshot, refToElement, refHandles, getRefsForLocators, ... }
}
```

The `refHandles` array contains `{ ref: string, handle: ElementHandle }` for each interactive element. We'll use these handles to get bounding boxes and create labels.

### Which elements get refs?

Playwright's `_snapshotForAI()` uses `mode: 'ai'` which sets `refs: 'interactable'`:

```ts
// From playwright/packages/injected/src/ariaSnapshot.ts
function computeAriaRef(ariaNode, options) {
  if (options.refs === 'interactable' && (!ariaNode.box.visible || !ariaNode.receivesPointerEvents))
    return;  // Skip non-interactive elements
  // ... assign ref like 'e1', 'e2', etc.
}
```

**Included:** buttons, links, inputs, textareas, selects, checkboxes, radios, sliders, any clickable element
**Excluded:** hidden elements, static text, decorative images, elements behind overlays

## API Design

```ts
// Show Vimium-style labels on all interactive elements
export async function showAriaRefLabels({ page }: { page: Page }): Promise<{
  snapshot: string    // The accessibility snapshot text
  labelCount: number  // Number of labels shown
}>

// Remove all labels from the page
export async function hideAriaRefLabels({ page }: { page: Page }): Promise<void>
```

## Implementation

Add to `playwriter/src/aria-snapshot.ts`:

```ts
const LABELS_CONTAINER_ID = '__playwriter_labels__'

// Use css`` tagged template for IDE syntax highlighting (identity function)
const css = String.raw

const LABEL_STYLES = css`
  .__pw_label__ {
    position: absolute;
    font: bold 11px Helvetica, Arial, sans-serif;
    padding: 1px 4px;
    background: linear-gradient(to bottom, #FFF785 0%, #FFC542 100%);
    border: 1px solid #E3BE23;
    border-radius: 3px;
    color: black;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
    white-space: nowrap;
  }
`

const CONTAINER_STYLES = css`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2147483647;
  pointer-events: none;
`

export async function showAriaRefLabels({ page }: { page: Page }) {
  // Get snapshot and cached element handles
  const { snapshot, refHandles } = await getAriaSnapshot({ page })

  // Single evaluate call: create container, styles, and all labels
  // Pass ElementHandles which get unwrapped to DOM elements in browser context
  const labelCount = await page.evaluate(
    ({ refs, containerId, containerStyles, labelStyles }) => {
      // Remove existing labels if present (idempotent)
      document.getElementById(containerId)?.remove()

      // Create container - absolute positioned, max z-index, no pointer events
      const container = document.createElement('div')
      container.id = containerId
      container.style.cssText = containerStyles

      // Inject Vimium-style CSS
      const style = document.createElement('style')
      style.textContent = labelStyles
      container.appendChild(style)

      // Create label for each interactive element
      let count = 0
      for (const { ref, element } of refs) {
        const rect = element.getBoundingClientRect()
        
        // Skip elements with no size (hidden)
        if (rect.width === 0 || rect.height === 0) continue

        const label = document.createElement('div')
        label.className = '__pw_label__'
        label.textContent = ref

        // Position above element, accounting for scroll
        // Use scrollX/scrollY so labels scroll with the page
        label.style.left = `${scrollX + rect.left}px`
        label.style.top = `${scrollY + Math.max(0, rect.top - 16)}px`

        container.appendChild(label)
        count++
      }

      document.documentElement.appendChild(container)
      return count
    },
    {
      refs: refHandles.map(({ ref, handle }) => ({ ref, element: handle })),
      containerId: LABELS_CONTAINER_ID,
      containerStyles: CONTAINER_STYLES,
      labelStyles: LABEL_STYLES,
    }
  )

  return { snapshot, labelCount }
}

export async function hideAriaRefLabels({ page }: { page: Page }) {
  await page.evaluate(
    (id) => document.getElementById(id)?.remove(),
    LABELS_CONTAINER_ID
  )
}
```

## Scroll Behavior

Labels use `position: absolute` with `scrollX/scrollY` offsets:
- Labels stay positioned on their elements when user scrolls
- Labels move with the document (not fixed to viewport)
- This matches Vimium's behavior

## Export from index.ts

```ts
export { getAriaSnapshot, showAriaRefLabels, hideAriaRefLabels } from './aria-snapshot.js'
```

## Test Implementation

Add to `playwriter/src/mcp.test.ts`:

```ts
it('should show aria ref labels and capture in screenshot', async () => {
  const browserContext = getBrowserContext()
  const serviceWorker = await getExtensionServiceWorker(browserContext)

  // Create page with interactive elements
  const page = await browserContext.newPage()
  await page.setContent(`
    <html>
      <body style="padding: 50px; font-family: sans-serif;">
        <h1>Test Page</h1>
        <button id="submit-btn">Submit Form</button>
        <a href="/about" style="margin-left: 20px;">About Us</a>
        <input type="text" placeholder="Enter your name" style="margin-left: 20px;" />
        <select style="margin-left: 20px;">
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </body>
    </html>
  `)
  await page.bringToFront()

  // Enable extension for this tab
  await serviceWorker.evaluate(async () => {
    await globalThis.toggleExtensionForActiveTab()
  })
  await new Promise(r => setTimeout(r, 400))

  // Connect via CDP
  const browser = await chromium.connectOverCDP(getCdpUrl({ port: TEST_PORT }))
  const cdpPage = browser.contexts()[0].pages().find(p => p.url().startsWith('about:'))
  expect(cdpPage).toBeDefined()

  // Import and show labels
  const { showAriaRefLabels, hideAriaRefLabels } = await import('./aria-snapshot.js')
  const { snapshot, labelCount } = await showAriaRefLabels({ page: cdpPage! })

  console.log('Snapshot:', snapshot.slice(0, 200))
  console.log('Label count:', labelCount)

  expect(labelCount).toBeGreaterThan(0)
  expect(snapshot).toContain('button')
  expect(snapshot).toContain('link')

  // Verify labels are in DOM
  const labelElements = await cdpPage!.evaluate(() =>
    document.querySelectorAll('.__pw_label__').length
  )
  expect(labelElements).toBe(labelCount)

  // Verify label text matches refs
  const labelTexts = await cdpPage!.evaluate(() =>
    Array.from(document.querySelectorAll('.__pw_label__')).map(el => el.textContent)
  )
  expect(labelTexts.every(t => /^e\d+$/.test(t!))).toBe(true)
  console.log('Label texts:', labelTexts)

  // Take screenshot with labels visible
  const screenshot = await cdpPage!.screenshot({ type: 'png' })
  expect(screenshot.length).toBeGreaterThan(5000)  // Not empty

  // Save screenshot for visual verification
  const fs = await import('node:fs')
  const path = await import('node:path')
  const snapshotsDir = path.join(path.dirname(new URL(import.meta.url).pathname), 'snapshots')
  if (!fs.existsSync(snapshotsDir)) fs.mkdirSync(snapshotsDir, { recursive: true })
  fs.writeFileSync(path.join(snapshotsDir, 'aria-labels-screenshot.png'), screenshot)
  console.log('Screenshot saved to snapshots/aria-labels-screenshot.png')

  // Test that labels can be used to find elements
  const buttonLabel = labelTexts.find(t => t === 'e2')  // Typically button is e2
  if (buttonLabel) {
    const buttonViaRef = cdpPage!.locator(`aria-ref=${buttonLabel}`)
    const buttonText = await buttonViaRef.textContent()
    console.log(`Button via ${buttonLabel}:`, buttonText)
  }

  // Cleanup
  await hideAriaRefLabels({ page: cdpPage! })

  // Verify labels removed
  const labelsAfterHide = await cdpPage!.evaluate(() =>
    document.getElementById('__playwriter_labels__')
  )
  expect(labelsAfterHide).toBeNull()

  await browser.close()
  await page.close()
}, 60000)
```

## Visual Result

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Test Page                                                      │
│                                                                 │
│  [e2]              [e3]           [e4]              [e5]        │
│  ┌──────────────┐  ┌──────────┐  ┌───────────────┐  ┌────────┐  │
│  │ Submit Form  │  │ About Us │  │ Enter name... │  │Option 1│  │
│  └──────────────┘  └──────────┘  └───────────────┘  └────────┘  │
│     button           link           textbox          combobox   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

Yellow Vimium-style badges positioned 16px above each interactive element.
Agent sees screenshot → identifies `[e3]` is the "About Us" link → uses `page.locator('aria-ref=e3').click()`

## Files to Modify

| File | Change |
|------|--------|
| `playwriter/src/aria-snapshot.ts` | Add `showAriaRefLabels()`, `hideAriaRefLabels()`, `LABELS_CONTAINER_ID` constant |
| `playwriter/src/index.ts` | Add exports: `showAriaRefLabels`, `hideAriaRefLabels` |
| `playwriter/src/mcp.test.ts` | Add screenshot test |
| `playwriter/src/snapshots/` | Directory for test screenshots (gitignored) |

## Usage Example (Agent Workflow)

```ts
// 1. Show labels on page
const { snapshot, labelCount } = await showAriaRefLabels({ page })
console.log(`Found ${labelCount} interactive elements`)

// 2. Take screenshot - labels are visible
const screenshot = await page.screenshot()
// Agent analyzes screenshot, sees [e5] on "Submit" button

// 3. Interact using ref
await page.locator('aria-ref=e5').click()

// 4. Hide labels when done
await hideAriaRefLabels({ page })
```

## Edge Cases to Handle

1. **Elements near top edge** - Label would go off-screen, position below element instead
2. **Overlapping labels** - Could add offset, but keep simple for now
3. **Very long pages** - Labels use absolute positioning, works with scroll
4. **Dynamic content** - Call `showAriaRefLabels` again to refresh after DOM changes
5. **Iframes** - Current implementation only handles main frame (could extend later)
