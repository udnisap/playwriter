import posthtml from 'posthtml'
import beautify from 'posthtml-beautify'

export async function formatHtmlForPrompt(html: string) {
    const tagsToRemove = [
        'hint',
        'style',
        'link',
        'script',
        'meta',
        'noscript',
        'svg',
        'head',
        // 'head',
    ]
    const attributesToKeep = [
        'data-framer-name',
        // 'class',
        // 'id',
        'label',
        'title',
        'alt',
        'href',
        'name',
        'value',
        'checked',
        'placeholder',
        'type',
        'role',
        // 'src',
        'target',
        'data-llm-id',
        'vimium-label',
    ]

    // Create a custom plugin to remove tags and filter attributes
    const removeTagsAndAttrsPlugin = () => {
        return (tree) => {
            // Remove comments at root level
            tree = tree.filter((item) => {
                if (typeof item === 'string') {
                    const trimmed = item.trim()
                    return !(trimmed.startsWith('<!--') && trimmed.endsWith('-->'))
                }
                return true
            })

            // Process each node recursively
            const processNode = (node) => {
                if (typeof node === 'string') {
                    return node
                }

                // Remove unwanted tags
                if (node.tag && tagsToRemove.includes(node.tag.toLowerCase())) {
                    return null
                }

                // Filter attributes
                if (node.attrs) {
                    const newAttrs: typeof node.attrs = {}
                    for (const [attr, value] of Object.entries(node.attrs)) {
                        if (attr.startsWith('aria-') || attributesToKeep.includes(attr)) {
                            newAttrs[attr] = value
                        }
                    }
                    node.attrs = newAttrs
                }

                // Process content recursively
                if (node.content && Array.isArray(node.content)) {
                    node.content = node.content
                        .map(processNode)
                        .filter(item => {
                            if (item === null) return false
                            if (typeof item === 'string') {
                                const trimmed = item.trim()
                                return !(trimmed.startsWith('<!--') && trimmed.endsWith('-->'))
                            }
                            return true
                        })
                }

                return node
            }

            // Process all root nodes
            return tree.map(processNode).filter(item => item !== null)
        }
    }

    // Plugin to collapse 3+ consecutive empty elements of the same type
    const collapseEmptyElementsPlugin = () => {
        return (tree) => {
            const isEmptyElement = (node) => {
                if (typeof node === 'string') return false
                if (!node.tag) return false
                const hasAttrs = node.attrs && Object.keys(node.attrs).length > 0
                const hasContent = node.content && node.content.some(c =>
                    typeof c === 'string' ? c.trim().length > 0 : true
                )
                return !hasAttrs && !hasContent
            }

            const isWhitespaceOnly = (node) => {
                return typeof node === 'string' && node.trim().length === 0
            }

            const collapseConsecutive = (content) => {
                if (!content || !Array.isArray(content)) return content

                const result: typeof content = []
                let i = 0
                while (i < content.length) {
                    const current = content[i]

                    // Process children first (recursive)
                    if (typeof current !== 'string' && current.content) {
                        current.content = collapseConsecutive(current.content)
                    }

                    // Check for consecutive empty elements (skipping whitespace-only strings)
                    if (isEmptyElement(current)) {
                        const emptyElements = [current]
                        const indicesToSkip = [i]
                        let j = i + 1

                        while (j < content.length) {
                            if (isWhitespaceOnly(content[j])) {
                                indicesToSkip.push(j)
                                j++
                                continue
                            }
                            if (isEmptyElement(content[j]) && content[j].tag === current.tag) {
                                emptyElements.push(content[j])
                                indicesToSkip.push(j)
                                j++
                                continue
                            }
                            break
                        }

                        if (emptyElements.length >= 3) {
                            // Collapse: keep only one element
                            result.push(current)
                            i = j
                            continue
                        }
                    }

                    result.push(current)
                    i++
                }
                return result
            }

            return collapseConsecutive(tree)
        }
    }

    // Process HTML
    const processor = posthtml()
        .use(removeTagsAndAttrsPlugin())
        .use(collapseEmptyElementsPlugin())
        .use(beautify({
            rules: {
                indent: 1,          // 1-space indent
                blankLines: false,  // no extra blank lines
                maxlen: 100000      // effectively never wrap by content length
            },
            jsBeautifyOptions: {
                wrap_line_length: 0,     // disable js-beautify wrapping
                preserve_newlines: false // reduce stray newlines
            }
        }))

    // Process with await
    const result = await processor.process(html)

    return result.html
}
