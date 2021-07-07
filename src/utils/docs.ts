import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const docsDirectory = join(process.cwd(), 'src', 'docs')

type MetaData = {
  title: string
  description: string
  image_url?: string
  date?: Date | string
}

export type MetaTypes = {
  slug: string
  meta: MetaData
  content: string
}

export const getDocBySlug = (slug: string): MetaTypes => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(docsDirectory, `${realSlug}.md`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data as MetaData, content }
}

export const getAllDocs = () => {
  const slugs = fs.readdirSync(docsDirectory)
  const docs = slugs.map((slug) => getDocBySlug(slug))

  return docs
}
