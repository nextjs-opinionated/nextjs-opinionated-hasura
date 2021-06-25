import * as React from 'react'
import { showErrorAlert } from '../../components/showErrorAlert'
import { useEffect } from 'react'
import dayjs from 'dayjs'
import { FiEdit } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout/Layout'
import Head from 'next/head'
import { LinksList } from '../../model/site/LinksList'
import { useQuery } from 'react-query'
import typedFetch from '../../utils/typedFetch/typedFetch'
import {
  Messages_api_get,
  messages_api_get_Config,
} from '../../model/api-models/messages/Messages_api_get'

const Messages: React.FunctionComponent = () => {
  const { data, isLoading, error, refetch } = useQuery('fetch_tester_api_get_Key', async () => {
    const resultObj = await typedFetch<Messages_api_get['input'], Messages_api_get['output']>({
      ...messages_api_get_Config,
    })
    return resultObj.data
  })

  const router = useRouter()

  useEffect(() => {
    if (error) {
      showErrorAlert({ error })
    }
  }, [error])

  return (
    <>
      <Head>
        <title>MESSAGES : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>MESSAGES</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='md:mx-8'>
          <div className='flex flex-wrap my-4'>
            <button
              className='mx-2 btn btn-primary'
              onClick={async () => {
                await fetch('/api/messages/insert_messages_one_from_spaceflightnewsapi')
                await refetch()
              }}
              disabled={isLoading}
            >
              new random
            </button>

            <button
              className='mx-2 btn btn-primary'
              onClick={async () => {
                router.push(`/messages/new`)
              }}
              disabled={isLoading}
            >
              new empty
            </button>
          </div>

          <p className='my-10 text-sm'>items below are persisted on server:</p>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow'>
            {data?.messages?.map((message) => (
              <div key={message.id} className='card bordered'>
                <figure>
                  <img src={message.imageUrl} className='object-cover w-full h-48' />
                </figure>
                <div className='card-body'>
                  <div className='flex flex-col justify-between h-full'>
                    <div className='my-1'>
                      <p>{dayjs(message.publishedAt).format('YYYY-MM-DD')}</p>
                      <h2 className='card-title'>
                        <a className='underline link-hover' href={message.url}>
                          {message.title}
                        </a>
                      </h2>
                    </div>
                    <div className='card-actions'>
                      <div className='mt-1'>
                        {message.message_tags?.map((tag) => (
                          <div className='badge badge-ghost' key={tag.tag.name}>
                            {tag.tag.name}
                          </div>
                        ))}
                      </div>

                      <button
                        className='btn btn-sm btn-secondary'
                        onClick={async () => {
                          router.push(`/messages/${message.id}`)
                        }}
                        disabled={isLoading}
                      >
                        edit &nbsp;
                        <FiEdit />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}

export default Messages
