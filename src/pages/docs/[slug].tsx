import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { Layout } from '../../components/Layout/Layout'
import { getAllDocs, getDocBySlug, MetaTypes } from '../../utils/docs'
import { markdownToHtml } from '../../utils/markdown'
import { LinksList } from '../../model/site/LinksList'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug)
  const doc = getDocBySlug(slug)

  const content = await markdownToHtml(doc.content || '')

  return {
    props: {
      ...doc,
      content,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = getAllDocs()

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default function Doc({ meta, content }: MetaTypes) {
  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta charSet='utf-8' />
        <link href={`https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css`} rel='stylesheet' />
      </Head>

      <Layout menuItems={Object.values(LinksList)}>
        <article
          className='w-full px-8 m-auto my-4 prose lg:w-3/4 lg:prose-xl sm:my-16'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Layout>
    </>
  )
}
