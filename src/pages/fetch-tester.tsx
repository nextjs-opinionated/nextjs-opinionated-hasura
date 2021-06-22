/* eslint-disable no-console */
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import { useSession } from 'next-auth/client'
import { CodeBlock } from '../components/CodeBlock/CodeBlock'

export default function Page() {
  const [session] = useSession()
  const [fetchResultJSON, fetchResultJSONSet] = useState({})
  const [responseStatus, responseStatusSet] = useState<number>(null)
  const [responseStatusText, responseStatusTextSet] = useState<string>(null)

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
          <div className='flex flex-wrap items-center my-16 space-x-2'>
            <button
              className='btn btn-primary'
              onClick={async () => {
                const res = await fetch('/api/get_server_time')
                responseStatusSet(res.status)
                responseStatusTextSet(res.statusText)
                const resultJSON = await res.json()
                fetchResultJSONSet(resultJSON)
              }}
            >
              Call API (200)
            </button>

            <button
              className='btn btn-primary'
              onClick={async () => {
                const res = await fetch('/api/get_server_error')
                responseStatusSet(res.status)
                responseStatusTextSet(res.statusText)
                const resultJSON = await res.json()
                fetchResultJSONSet(resultJSON)
              }}
            >
              Call API (200)
            </button>

            {/* get */}
            {/* post */}
            {/* error on json() */}
          </div>

          <CodeBlock
            className='my-2'
            content={{ status: responseStatus, statusText: responseStatusText }}
          />

          <CodeBlock content={fetchResultJSON} />
        </div>
      </Layout>
    </>
  )
}
