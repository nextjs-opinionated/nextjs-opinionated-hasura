import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'

export default function NotFound({
  pageTitle = '404 - Page Not Found',
  description = '404 - Page Not Found Description',
}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={description} />
        <meta name='og:description' content={description} />

        {/* Open Graph */}
        <meta name='og:title' content={pageTitle} key='ogtitle' />
        <meta name='og:description' content={description} />
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>404 - Page Not Found</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <div className='flex items-center justify-center w-full h-screen p-4 h-100 md:container md:mx-auto md:px-6'>
          <div className='block text-center'>
            <h1 className='pb-4 text-xl font-bold'>404 - Page Not Found</h1>
            {/* <p>
              The route <strong>{router.asPath}</strong> does not exist.
            </p> */}
            <Link href='/'>
              <button className='btn btn-outline btn-accent'>Go back home</button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}
