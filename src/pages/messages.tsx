import * as React from 'react'
import useSWRFetch from '../utils/useSWRFetch'
import { showErrorAlert } from '../components/showErrorAlert'
import { useEffect } from 'react'
import { MessagesLast8Query } from '../graphql/generated'
import { Button } from '../components/Button/Button'
import { mutate } from 'swr'

const Messages: React.FunctionComponent = () => {
  const { data, loading, error } = useSWRFetch<MessagesLast8Query>('/api/messagesLast8')

  useEffect(() => {
    if (error) {
      showErrorAlert({ error })
    }
  }, [])

  return (
    <div className=''>
      <div className='p-6 bg-purple-800'>
        <div className='flex flex-col py-4 font-sans bg-white'>
          <div className='container md:px-20 md:mx-auto'>
            <header className='relative flex flex-col items-center justify-between py-2 sm:flex-row'>
              <nav className='hidden text-lg md:flex'>
                <a href='#' className='px-6 py-3 text-gray-00 hover:text-purple-300'>
                  Home
                </a>
                <a
                  href='https://github.com/saitodisse/nextjs-opinionated-hasura'
                  className='px-6 py-3 text-gray-00 hover:text-purple-300'
                >
                  Github
                </a>
              </nav>
              <button className='absolute top-0 right-0 flex flex-col p-4 mt-5 md:hidden'>
                <span className='w-5 h-px mb-1 bg-orange-500' />
                <span className='w-5 h-px mb-1 bg-orange-500' />
                <span className='w-5 h-px mb-1 bg-orange-500' />
              </button>
            </header>

            <main className='flex flex-col pt-8 mx-8'>
              <div className='my-4'>
                <Button
                  onClick={async () => {
                    await fetch('/api/messagesInsertOne')
                    await mutate('/api/messagesLast8')
                  }}
                >
                  add new item
                </Button>
              </div>
              {loading ? (
                'Loading...'
              ) : (
                <ul className='flex flex-wrap'>
                  {data?.messages?.map((message) => (
                    <li
                      key={message.id}
                      className='w-64 p-3 mb-2 mr-2 border border-purple-300 cursor-pointer hover:bg-purple-50'
                    >
                      <div className='flex flex-col'>
                        <div className='text-lg'>{message.body}</div>
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
