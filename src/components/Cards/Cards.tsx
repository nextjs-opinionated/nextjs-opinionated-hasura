import Link from 'next/link'
import React, { ReactNode } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export interface CardProps {
  title: string
  text: string
  url: string | ReactNode
}

export const Card = () => {
  const data = [
    {
      title: 'Storybook',
      text: 'this project works with storybook, also with next.js, tailwind and PostCSS',
      url: '/form-example',
    },
    {
      title: 'Typed-Fetch',
      text: 'We created a standard typed-fetch using typeScript to manage API calls',
      url: '/typed-fetch-examples',
    },
    {
      title: 'Show Image',
      text: 'A simple modal example using the SweetAlert2 library',
      url: '/',
    },
  ]
  console.log(data[0].url)
  return (
    <div className='grid grid-cols-1 gap-4 mt-5 space-x-2 md:grid-cols-3'>
      {data?.map((cards, index) => (
        <div key={index} className='shadow-2xl card lg:card-side bg-primary text-primary-content'>
          <div className='card-body'>
            <h2 className='card-title'>{cards.title}</h2>
            <p>{cards.text}</p>
            <div className='justify-end card-actions'>
              <Link href={cards.url}>
                <a className='btn btn-primary'>
                  Click here
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    className='inline-block w-6 h-6 ml-2 stroke-current'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    ></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
