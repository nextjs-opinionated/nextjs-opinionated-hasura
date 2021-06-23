/* eslint-disable no-console */
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import { useSession } from 'next-auth/client'
import { CodeBlock } from '../components/CodeBlock/CodeBlock'
import typedFetch from '../utils/typedFetch'
import { Fetch_tester_api_Input, Fetch_tester_api_Output } from './api/fetch_tester_api'

export default function Page() {
  const [session] = useSession()
  const [fetchResultJSON, fetchResultJSONSet] = useState({})

  useEffect(() => {
    console.log(session?.user)
  }, [session])

  return (
    <>
      <Head>
        <title>Fetch Tester</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>Fetch Tester</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        {/* text */}
        <div className='pb-3'>
          <h1 className='py-2 text-3xl font-bold'>Fetch Tester</h1>

          {/* buttons */}
          <div className='flex flex-wrap items-center my-6 space-x-2'>
            <button
              className='m-3 btn btn-primary'
              title={`{
  some_string: 'Ueba!',
  divide_by: 2,
}`}
              onClick={async () => {
                const typedFetchResult = await typedFetch<
                  Fetch_tester_api_Input,
                  Fetch_tester_api_Output
                >({
                  url: '/api/fetch_tester_api',
                  method: 'get',
                  data: {
                    some_string: 'Ueba!',
                    divide_by: 2,
                  },
                  responseType: 'json',
                })
                fetchResultJSONSet(typedFetchResult)
              }}
            >
              Get (200)
            </button>

            <button
              className='m-3 btn btn-primary'
              title={`{
  some_string: 'Post Text',
  divide_by: 5,
}`}
              onClick={async () => {
                const typedFetchResult = await typedFetch<
                  Fetch_tester_api_Input,
                  Fetch_tester_api_Output
                >({
                  url: '/api/fetch_tester_api',
                  method: 'post',
                  data: {
                    some_string: 'Post Text',
                    divide_by: 5,
                  },
                  responseType: 'json',
                })
                fetchResultJSONSet(typedFetchResult)
              }}
            >
              Post (200)
            </button>

            <button
              className='m-3 btn btn-primary'
              title={`{
  some_string: 'Post Text',
  divide_by: 0,
  force_error: true,
}`}
              onClick={async () => {
                const typedFetchResult = await typedFetch<
                  Fetch_tester_api_Input,
                  Fetch_tester_api_Output
                >({
                  url: '/api/fetch_tester_api',
                  method: 'post',
                  data: {
                    some_string: 'Post Text',
                    divide_by: 10,
                    force_error: true,
                  },
                  responseType: 'json',
                })
                fetchResultJSONSet(typedFetchResult)
              }}
            >
              Post (500)
            </button>
          </div>

          <CodeBlock content={fetchResultJSON} />
        </div>
      </Layout>
    </>
  )
}
