/* eslint-disable no-console */
import _ from 'lodash'
import Head from 'next/head'
import React, { useState } from 'react'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'
import typedFetch from '../../utils/typedFetch/typedFetch'
import {
  Fetch_tester_api_get,
  fetch_tester_api_get_Config,
} from '../../model/api-models/typed-fetch-examples/Fetch_tester_api_get'
// import { Fetch_tester_api_post, fetch_tester_api_post_Config } from '../api/fetch_tester_api_post'
import { useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import classnames from 'classnames'
import {
  Fetch_tester_api_post,
  fetch_tester_api_post_Config,
} from '../../model/api-models/typed-fetch-examples/Fetch_tester_api_post'

export default function Page() {
  const [fetchResultJSON, fetchResultJSONSet] = useState({})
  const [forceError, forceErrorSet] = useState(false)

  const getResultObj = useQuery('fetch_tester_api_get_Key', async () => {
    const resultObj = await typedFetch<
      Fetch_tester_api_get['input'],
      Fetch_tester_api_get['output']
    >({
      ...fetch_tester_api_get_Config,
      data: {
        some_string: 'Ueba!',
        divide_by: _.toString(5),
        force_error: _.toString(forceError),
      },
    })

    fetchResultJSONSet((d) => ({ ...d, get: resultObj }))
    return resultObj.data
  })

  const postResultObj = useQuery('fetch_tester_api_post_Key', async () => {
    const resultObj = await typedFetch<
      Fetch_tester_api_post['input'],
      Fetch_tester_api_post['output']
    >({
      ...fetch_tester_api_post_Config,
      data: {
        some_string: 'Ueba!',
        divide_by: 5,
        force_error: forceError,
      },
    })

    fetchResultJSONSet((d) => ({ ...d, post: resultObj }))
    return resultObj.data
  })

  return (
    <>
      <Head>
        <title>TypedFetch Examples with React Query</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>TypedFetch Examples with React Query</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        {/* text */}
        <div className='pb-3'>
          <h1 className='py-2 text-3xl font-bold'>TypedFetch Examples with React Query</h1>

          {/* buttons */}
          <div className='flex flex-wrap items-center my-6'>
            <button
              className='m-2 btn btn-primary'
              onClick={async () => {
                await getResultObj.refetch()
              }}
            >
              refetch get
            </button>
            <button
              className='m-2 btn btn-primary'
              onClick={async () => {
                await postResultObj.refetch()
              }}
            >
              refetch post
            </button>
            <button
              className={classnames('m-2 btn btn-primary', {
                'btn-active': forceError,
                'btn-outline': !forceError,
              })}
              onClick={() => {
                forceErrorSet((f) => !f)
              }}
            >
              force error
            </button>
          </div>

          <CodeBlock content={fetchResultJSON} />
        </div>
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}
