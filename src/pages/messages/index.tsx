import * as React from 'react'
import useSWRFetch from '../../utils/useSWRFetch'
import { showErrorAlert } from '../../components/showErrorAlert'
import { useEffect, useState } from 'react'
import { MessagesQuery } from '../../graphql/generated'
import { mutate } from 'swr'
import dayjs from 'dayjs'
import { FiEdit } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout/Layout'
import Head from 'next/head'
import { LinksList } from '../../model/site/LinksList'

const Messages: React.FunctionComponent = () => {
  const { data, loading, error } = useSWRFetch<MessagesQuery>('/api/messages/messages')
  const [isLoading, isLoadingSet] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (error) {
      showErrorAlert({ error })
    }
  }, [])

  useEffect(() => {
    isLoadingSet(loading)
  }, [loading])

  return (
    <>
      <Head>
        <title>MESSAGES : Next.js Opinionated</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>MESSAGES</div>
            <div className='text-sm'>Next.js Opinionated</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='md:mx-8'>
          <div className='flex flex-wrap my-4'>
            <button
              className='mx-2 btn btn-primary'
              onClick={async () => {
                isLoadingSet(true)
                await fetch('/api/messages/insert_messages_one_from_spaceflightnewsapi')
                await mutate('/api/messages/messages')
                isLoadingSet(false)
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
