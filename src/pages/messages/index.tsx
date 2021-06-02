import * as React from 'react'
import useSWRFetch from '../../utils/useSWRFetch'
import { showErrorAlert } from '../../components/showErrorAlert'
import { useEffect, useState } from 'react'
import { MessagesQuery } from '../../graphql/generated'
import { mutate } from 'swr'
import { Header } from '../../components/Header'
import dayjs from 'dayjs'
import { FiEdit, FiExternalLink } from 'react-icons/fi'
import { useRouter } from 'next/router'

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
    <div className=''>
      <div className='m-2'>
        <div className='flex flex-col py-4 font-sans bg-white'>
          <div className='container md:mx-auto'>
            <Header />

            <main className='flex flex-col pt-8 mx-8'>
              <div className='flex my-4'>
                <button
                  className='mx-2 btn btn-sm'
                  onClick={async () => {
                    isLoadingSet(true)
                    await fetch('/api/messages/insert_messages_one_from_spaceflightnewsapi')
                    await mutate('/api/messages/messages')
                    isLoadingSet(false)
                  }}
                  disabled={isLoading}
                >
                  new random from space-flight-news api
                </button>

                <button
                  className='mx-2 btn btn-sm'
                  onClick={async () => {
                    router.push(`/messages/new`)
                  }}
                  disabled={isLoading}
                >
                  new empty item
                </button>
              </div>

              <p className='text-sm text-gray-700'>items below are persisted on server:</p>

              {loading ? (
                'Loading...'
              ) : (
                <ul className='flex flex-wrap justify-around'>
                  {data?.messages?.map((message) => (
                    <li
                      key={message.id}
                      className='w-64 p-4 mx-3 my-3 border border-gray-300 hover:bg-purple-50'
                    >
                      <div className='flex flex-col h-full'>
                        {message.imageUrl && (
                          <a target='_blank' rel='noreferrer' href={message.url} className='flex'>
                            <img src={message.imageUrl} />
                          </a>
                        )}

                        <div className='text-sm text-right text-gray-500'>
                          {dayjs(message.publishedAt).format('YYYY-MM-DD')}
                        </div>

                        <div className='my-3 text-base font-bold text-gray-600 hover:underline'>
                          <a target='_blank' rel='noreferrer' href={message.url} className='flex'>
                            <div className='mx-2'>{message.title}</div>
                            <div className='flex-grow mx-2'>
                              <FiExternalLink />
                            </div>
                          </a>
                        </div>

                        {message.body && (
                          <div className='my-2 text-sm text-gray-500'>{message.body}</div>
                        )}

                        <div className='mt-1'>
                          {message.message_tags?.map((tag) => (
                            <span
                              key={tag.tag.name}
                              className='px-2 py-0.5 mx-0.5 text-xs font-medium text-white bg-purple-500 rounded-sm'
                            >
                              {tag.tag.name}
                            </span>
                          ))}
                        </div>

                        <div className='flex items-end justify-end flex-grow mt-3'>
                          <button
                            className='text-gray-500 border-gray-500 btn btn-outline btn-square btn-sm'
                            onClick={async () => {
                              router.push(`/messages/${message.id}`)
                            }}
                            disabled={isLoading}
                          >
                            <FiEdit />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
