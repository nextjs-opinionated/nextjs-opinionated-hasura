import * as React from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Image from 'next/image'
import { FiZap } from 'react-icons/fi'
import { Button } from '../components/Button/Button'

const Home: React.FunctionComponent = () => {
  return (
    <div className=''>
      {/* component */}
      <div className='p-6 bg-purple-800'>
        <div className='flex flex-col py-4 font-sans bg-white'>
          <div className='container md:px-20 md:mx-auto'>
            <header className='relative flex flex-col items-center justify-between py-2 sm:flex-row'>
              <nav className='hidden text-lg md:flex'>
                <a href='#' className='px-6 py-3 text-gray-00 hover:text-purple-300'>
                  Home
                </a>
                <a
                  href='https://github.com/saitodisse/nextjs-opinionated'
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

            <main className='flex flex-col justify-between pt-8 mx-8 sm:flex-row'>
              <div className='flex flex-col items-center text-center sm:w-2/5 sm:items-start sm:text-left'>
                <h1 className='flex flex-col mb-2 text-6xl font-bold leading-none text-purple-900 uppercase sm:flex-row md:tracking-wide'>
                  <FiZap size={60} className='mr-2 text-purple-500' />
                  Next.js
                </h1>
                <h2 className='mb-6 ml-6 text-2xl text-orange-500 uppercase sm:text-4xl sm:tracking-widest text-secondary'>
                  opinionated
                </h2>
                <p className='mb-12 leading-relaxed text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at
                  enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur
                  adipiscing elit.
                </p>
              </div>

              <div className='flex flex-col items-end my-3 text-right md:ml-20'>
                <div className='text-3xl font-bold text-purple-900'>Libs</div>
                <a
                  target='_blank'
                  className='my-0.5 text-blue-700 underline'
                  rel='noreferrer'
                  href='https://www.typescriptlang.org/'
                >
                  typescript
                </a>
                <a
                  target='_blank'
                  className='my-0.5 text-blue-700 underline'
                  rel='noreferrer'
                  href='https://nextjs.org/'
                >
                  next.js
                </a>

                <a
                  target='_blank'
                  className='my-0.5 text-blue-700 underline'
                  rel='noreferrer'
                  href='https://tailwindcss.com/'
                >
                  tailwindcss
                </a>

                <a
                  target='_blank'
                  className='my-0.5 text-blue-700 underline'
                  rel='noreferrer'
                  href='https://storybook.js.org/'
                >
                  storybook
                </a>

                <a
                  target='_blank'
                  className='my-0.5 text-blue-700 underline'
                  rel='noreferrer'
                  href='https://jestjs.io/'
                >
                  jest
                </a>

                <a
                  target='_blank'
                  className='my-0.5 text-blue-700 underline'
                  rel='noreferrer'
                  href='https://eslint.org/'
                >
                  eslint
                </a>

                <a
                  target='_blank'
                  className='my-0.5 text-blue-700 underline'
                  rel='noreferrer'
                  href='https://prettier.io/'
                >
                  prettier
                </a>

                <a
                  target='_blank'
                  className='my-0.5 text-blue-700 underline'
                  rel='noreferrer'
                  href='https://sweetalert2.github.io/'
                >
                  sweetalert2
                </a>
                <a
                  target='_blank'
                  className='my-0.5 text-blue-700 underline'
                  rel='noreferrer'
                  href='https://react-icons.github.io/react-icons/'
                >
                  react-icons
                </a>
              </div>
            </main>

            <div className='flex flex-wrap justify-center mx-2 my-4'>
              <a
                className='px-6 py-3 mb-1 mr-1 underline'
                target='_blank'
                rel='noreferrer'
                href='https://github.com/saitodisse/nextjs-opinionated'
              >
                Github
              </a>

              <Button
                outlined
                className='mx-3'
                onClick={async () => {
                  const myAlert = withReactContent(Swal)
                  await myAlert.fire({
                    title: 'Some Alert Title',
                    html: <Image width={600} height={300} src='https://unsplash.it/600/300' />,
                    imageAlt: 'Custom image',
                    confirmButtonText: 'ok button',
                  })
                }}
              >
                Show Image
              </Button>

              <Button
                outlined
                className='mx-3'
                label='Call API'
                onClick={async () => {
                  const res = await fetch('/api/say-hello-from-api')
                  const resultJSON = await res.json()
                  const myAlert = withReactContent(Swal)
                  await myAlert.fire({
                    title: 'from server',
                    html: resultJSON.message,
                    confirmButtonText: 'close',
                  })
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
