import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import { VFileCompatible } from 'vfile'

export const markdownToHtml = async (markdown: VFileCompatible) => {
  const result = await remark().use(html).use(prism).process(markdown)
  return result.toString()
}
