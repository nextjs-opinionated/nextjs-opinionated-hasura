/* eslint-disable no-console */
import _ from 'lodash'
import { useSession } from 'next-auth/client'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { CodeBlock } from '../components/CodeBlock/CodeBlock'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import typedFetch from '../utils/typedFetch/typedFetch'
import { Fetch_tester_api_get, fetch_tester_api_get_Config } from './api/fetch_tester_api_get'
import { Fetch_tester_api_post, fetch_tester_api_post_Config } from './api/fetch_tester_api_post'

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
          <div className='flex flex-wrap items-center my-6'>
            <button
              className='m-2 btn btn-primary'
              title={`{
  some_string: 'Ueba!',
  divide_by: 2,
}`}
              onClick={async () => {
                const typedFetchResult = await typedFetch<
                  Fetch_tester_api_get['input'],
                  Fetch_tester_api_get['output']
                >({
                  ...fetch_tester_api_get_Config,
                  data: {
                    some_string: 'Ueba!',
                    divide_by: _.toString(2),
                    force_error: _.toString(false),
                  },
                })
                fetchResultJSONSet(typedFetchResult)
              }}
            >
              Get (200)
            </button>

            <button
              className='m-2 btn btn-primary'
              title={`{
  some_string: 'Post Text',
  divide_by: 5,
}`}
              onClick={async () => {
                const typedFetchResult = await typedFetch<
                  Fetch_tester_api_post['input'],
                  Fetch_tester_api_post['output']
                >({
                  ...fetch_tester_api_post_Config,
                  data: {
                    some_string: 'Post Text',
                    divide_by: 5,
                    force_error: false,
                  },
                })
                fetchResultJSONSet(typedFetchResult)
              }}
            >
              Post (200)
            </button>

            <button
              className='m-2 btn btn-secondary'
              title={`{
  some_string: 'Post Text',
  divide_by: 0,
  force_error: true,
}`}
              onClick={async () => {
                const typedFetchResult = await typedFetch<
                  Fetch_tester_api_get['input'],
                  Fetch_tester_api_get['output']
                >({
                  ...fetch_tester_api_get_Config,
                  data: {
                    some_string: 'Get Text',
                    divide_by: _.toString(10),
                    force_error: _.toString(true),
                  },
                })
                fetchResultJSONSet(typedFetchResult)
              }}
            >
              Get (500)
            </button>

            <button
              className='m-2 btn btn-secondary'
              title={`{
  some_string: 'Post Text',
  divide_by: 0,
  force_error: true,
}`}
              onClick={async () => {
                const typedFetchResult = await typedFetch<
                  Fetch_tester_api_post['input'],
                  Fetch_tester_api_post['output']
                >({
                  ...fetch_tester_api_post_Config,
                  data: {
                    some_string: 'Post Text',
                    divide_by: 10,
                    force_error: true,
                  },
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
