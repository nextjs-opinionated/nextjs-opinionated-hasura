import Link from 'next/link'
import React, { ReactNode } from 'react'

export interface CardsProps {
  title?: string
  text?: string
  url?: string | ReactNode
  urlText?: string
}

export const Cards: React.FC<CardsProps> = () => {
  const data = [
    {
      title: 'Storybook',
      text: 'this project works with storybook using TailwindCSS and PostCSS',
      url: 'https://main--60d0b5d829870700396e0a3b.chromatic.com',
      urlText: 'See storybook',
    },
    {
      title: 'Code Generator',
      text: 'Generate code directly from this project if you are running on http://localhost:3000',
      url: '/code-generator',
      urlText: 'Generate code',
    },
    {
      title: 'CRUD Example',
      text: 'A standard way to List, Set, Update and Delete items',
      url: '/list_items?page=1',
      urlText: 'List items',
    },
    {
      title: 'TypedFetch',
      text: 'We created a standard typed-fetch using typeScript to manage API calls. That way you will be typing input and output of all fetch calls',
      url: '/typed-fetch-examples',
      urlText: 'Test fetch',
    },
    {
      title: 'Authentication',
      text: 'We use a simple integration with auth0. The incredible integration is made with the nextjs-auth0',
      url: '/typed-fetch-examples',
      urlText: 'Login Now',
    },
    {
      title: 'Universal Validation',
      text: 'ZOD validator is a simple validation library. We use it to validate input fields on server side and on cliente side',
      url: '/list_items/cb0f6982-de0a-4b35-804f-5ed5e8d7bed3',
      urlText: 'Check Validation',
    },
  ]
  return (
    <div className='grid grid-cols-1 gap-6 mt-5 space-x-2 md:grid-cols-3'>
      {data?.map((cards, i) => (
        <div key={i} className='shadow-xl card lg:card-side bg-base-300'>
          <div className='justify-between card-body'>
            <>
              <h2 className='card-title'>{cards.title}</h2>
              <p>{cards.text}</p>
              <div className='justify-center card-actions'>
                <Link href={cards.url}>
                  <a className='btn btn-primary'>
                    {cards.urlText}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='inline-block w-4 h-4 ml-2 stroke-current'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </>
          </div>
        </div>
      ))}
    </div>
  )
}
