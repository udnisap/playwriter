import { describe, it, expect } from 'vitest'
import { createSmartDiff } from './diff-utils.js'

describe('createSmartDiff', () => {
  it('returns no-change when content is identical', () => {
    const result = createSmartDiff({
      oldContent: 'hello\nworld',
      newContent: 'hello\nworld',
    })
    expect(result.type).toBe('no-change')
    expect(result.content).toBe('No changes detected since last snapshot')
  })

  it('returns diff for small changes', () => {
    const result = createSmartDiff({
      oldContent: 'line1\nline2\nline3\nline4\nline5',
      newContent: 'line1\nline2-modified\nline3\nline4\nline5',
    })
    expect(result.type).toBe('diff')
    expect(result.content).toContain('-line2')
    expect(result.content).toContain('+line2-modified')
  })

  it('returns full content when changes exceed 50% threshold', () => {
    const result = createSmartDiff({
      oldContent: 'a\nb\nc\nd',
      newContent: 'x\ny\nz\nw',
    })
    expect(result.type).toBe('full')
    expect(result.content).toContain('Content changed significantly')
    expect(result.content).toContain('x\ny\nz\nw')
  })

  it('respects custom threshold', () => {
    // 2 out of 4 lines changed = 50%
    const oldContent = 'a\nb\nc\nd'
    const newContent = 'a\nX\nY\nd'

    // With 40% threshold, should return full (50% >= 40%)
    const resultLow = createSmartDiff({
      oldContent,
      newContent,
      threshold: 0.4,
    })
    expect(resultLow.type).toBe('full')

    // With 60% threshold, should return diff (50% < 60%)
    const resultHigh = createSmartDiff({
      oldContent,
      newContent,
      threshold: 0.6,
    })
    expect(resultHigh.type).toBe('diff')
  })

  it('uses custom label in diff output', () => {
    const result = createSmartDiff({
      oldContent: 'line1\nline2\nline3\nline4\nline5',
      newContent: 'line1\nmodified\nline3\nline4\nline5',
      label: 'snapshot',
      threshold: 0.5, // 20% change, will return diff
    })
    expect(result.type).toBe('diff')
    expect(result.content).toContain('--- snapshot')
    expect(result.content).toContain('+++ snapshot')
  })

  it('handles empty old content (all additions)', () => {
    const result = createSmartDiff({
      oldContent: '',
      newContent: 'new\ncontent\nhere',
    })
    // 100% new content should trigger full
    expect(result.type).toBe('full')
    expect(result.content).toContain('new\ncontent\nhere')
  })

  it('handles empty new content (all deletions)', () => {
    const result = createSmartDiff({
      oldContent: 'old\ncontent\nhere',
      newContent: '',
    })
    expect(result.type).toBe('full')
    expect(result.content).toContain('100%')
  })

  it('handles single line changes', () => {
    const result = createSmartDiff({
      oldContent: 'single line',
      newContent: 'modified line',
    })
    // 100% change on single line
    expect(result.type).toBe('full')
  })

  it('calculates percentage correctly in output', () => {
    // 4 lines changed out of 5 = 80%
    const result = createSmartDiff({
      oldContent: 'a\nb\nc\nd\ne',
      newContent: 'a\nX\nY\nZ\nW',
    })
    expect(result.type).toBe('full')
    expect(result.content).toContain('(80% of lines)')
  })

  it('includes context lines in diff output', () => {
    const result = createSmartDiff({
      oldContent: 'line1\nline2\nline3\nline4\nline5\nline6\nline7\nline8\nline9\nline10',
      newContent: 'line1\nline2\nline3\nline4\nMODIFIED\nline6\nline7\nline8\nline9\nline10',
      threshold: 0.9, // Force diff
    })
    expect(result.type).toBe('diff')
    // Should have context around the change
    expect(result.content).toContain('line4')
    expect(result.content).toContain('-line5')
    expect(result.content).toContain('+MODIFIED')
    expect(result.content).toContain('line6')
  })
})
