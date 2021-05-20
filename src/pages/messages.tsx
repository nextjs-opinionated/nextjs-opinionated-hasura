import * as React from 'react'
import useSWRFetch from '../utils/useSWRFetch'
import { showErrorAlert } from '../components/showErrorAlert'
import { useEffect, useState } from 'react'
import { MessagesLast8Query } from '../graphql/generated'
import { Button } from '../components/Button/Button'
import { mutate } from 'swr'
import { Header } from '../components/Header'
import dayjs from 'dayjs'
import { FiExternalLink } from 'react-icons/fi'

const Messages: React.FunctionComponent = () => {
  const { data, loading, error } = useSWRFetch<MessagesLast8Query>('/api/messagesLast8')
  const [isLoading, isLoadingSet] = useState(true)

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
              <div className='my-4'>
                <Button
                  onClick={async () => {
                    isLoadingSet(true)
                    await fetch('/api/messagesInsertOne')
                    await mutate('/api/messagesLast8')
                    isLoadingSet(false)
                  }}
                  disabled={isLoading}
                >
                  new random
                </Button>
              </div>

              <p className='text-sm text-gray-700'>items below exists on server:</p>

              {loading ? (
                'Loading...'
              ) : (
                <ul className='flex flex-wrap'>
                  {data?.messages?.map((message) => (
                    <li
                      key={message.id}
                      className='w-64 p-4 mx-3 my-3 border border-gray-300 cursor-pointer hover:bg-purple-50'
                    >
                      <div className='flex flex-col'>
                        <div className='text-base font-bold text-gray-600 hover:underline'>
                          <a target='_blank' rel='noreferrer' href={message.url} className='flex'>
                            <div className='mx-2'>{message.title}</div>
                            <div className='flex-grow mx-2'>
                              <FiExternalLink />
                            </div>
                          </a>
                        </div>

                        <div className='text-sm text-right text-gray-500'>
                          {dayjs(message.publishedAt).format('YYYY-MM-DD')}
                        </div>

                        {message.body && (
                          <div className='my-2 text-sm text-gray-500'>{message.body}</div>
                        )}

                        {message.imageUrl && <img src={message.imageUrl} />}

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
