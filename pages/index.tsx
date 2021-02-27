import * as React from 'react'
import Button from '../src/components/Button/Button'
import { FiGithub } from 'react-icons/fi'
import { SiStorybook } from 'react-icons/si'

const Home: React.FunctionComponent = () => {
  return (
    <div className='container'>
      <div className='bg-gray-50'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between'>
          <h2 className='text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-6xl'>
            <span className='block'>next.js opinionated</span>
          </h2>
          <div className='flex flex-col mt-8 gap-y-4 lg:mt-0 lg:flex-shrink-0'>
            <Button label='Show Alert' onClick={() => alert('Hello World')} />
            <div className='flex justify-end'>
              <a
                className='flex items-center text-gray-700 underline'
                target='_blank'
                rel='noreferrer'
                href='http://localhost:5000'
              >
                <SiStorybook size={30} className='mx-2' />
              </a>
              <a
                className='flex items-center text-gray-700 underline'
                target='_blank'
                rel='noreferrer'
                href='https://github.com/saitodisse/nextjs-opinionated'
              >
                <FiGithub size={30} className='mx-2' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-col px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8'>
          <hr className='my-3' />

          <div className='my-3 text-2xl font-bold text-gray-600'>Dependencies: </div>

          <div className='flex flex-col my-3 ml-2 text-blue-700 underline'>
            <a target='_blank' rel='noreferrer' href='https://nextjs.org/'>
              next.js
            </a>

            <a target='_blank' rel='noreferrer' href='https://tailwindcss.com/'>
              tailwindcss
            </a>

            <a target='_blank' rel='noreferrer' href='https://storybook.js.org/'>
              storybook
            </a>

            <a target='_blank' rel='noreferrer' href='https://openbase.com/js/jest'>
              jest
            </a>

            <a target='_blank' rel='noreferrer' href='https://openbase.com/js/typescript'>
              typescript
            </a>

            <a target='_blank' rel='noreferrer' href='https://openbase.com/js/eslint'>
              eslint
            </a>

            <a target='_blank' rel='noreferrer' href='https://openbase.com/js/prettifier'>
              prettifier
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
