import { useRouter } from 'next/router'
import * as React from 'react'
import Button from '../src/components/Button/Button'

const Home: React.FunctionComponent = () => {
  const router = useRouter()
  return (
    <div className='container'>
      <div className='bg-gray-50'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-6xl'>
            <span className='block'>next.js opinionated</span>
          </h2>
          <div className='flex flex-col mt-8 gap-y-4 lg:mt-0 lg:flex-shrink-0'>
            <Button
              label='Storybook'
              onClick={() => {
                router.push('http://localhost:5000')
              }}
            />
            <Button label='Show Alert' onClick={() => alert('Hello World')} />
          </div>
        </div>
        <div className='flex flex-col px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8'>
          <a
            className='text-blue-700 underline'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/saitodisse/nextjs-opinionated'
          >
            nextjs-opinionated (this boilerplate)
          </a>

          <a
            className='text-blue-700 underline'
            target='_blank'
            rel='noreferrer'
            href='https://openbase.com/js/typescript'
          >
            typescript
          </a>

          <a
            className='text-blue-700 underline'
            target='_blank'
            rel='noreferrer'
            href='https://nextjs.org/'
          >
            next.js
          </a>

          <a
            className='text-blue-700 underline'
            target='_blank'
            rel='noreferrer'
            href='https://tailwindcss.com/'
          >
            tailwindcss
          </a>

          <a
            className='text-blue-700 underline'
            target='_blank'
            rel='noreferrer'
            href='https://storybook.js.org/'
          >
            storybook
          </a>

          <a
            className='text-blue-700 underline'
            target='_blank'
            rel='noreferrer'
            href='https://openbase.com/js/jest'
          >
            jest
          </a>

          <a
            className='text-blue-700 underline'
            target='_blank'
            rel='noreferrer'
            href='https://openbase.com/js/eslint'
          >
            eslint
          </a>

          <a
            className='text-blue-700 underline'
            target='_blank'
            rel='noreferrer'
            href='https://openbase.com/js/prettifier'
          >
            prettifier
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
