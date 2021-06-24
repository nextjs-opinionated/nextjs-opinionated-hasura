import Head from 'next/head'
import * as React from 'react'
import Link from 'next/link'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'

const Page: React.FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>TypedFetch Examples : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>TypedFetch Examples</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='mx-8'>
          <div>
            <Link href='/typed-fetch-examples/typedFetch-vanilla'>
              <a className='link'>TypedFetch Examples Vanilla</a>
            </Link>
          </div>
          <div>
            <Link href='/typed-fetch-examples/typedFetch-react-query'>
              <a className='link'>TypedFetch Examples with React Query</a>
            </Link>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Page
