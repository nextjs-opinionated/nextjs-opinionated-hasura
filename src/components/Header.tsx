import * as React from 'react'
import Link from 'next/link'

export function Header() {
  return (
    <header className='relative flex flex-col items-center justify-between py-2 sm:flex-row'>
      <nav className='flex flex-wrap text-lg'>
        <Link href='/'>
          <a className='px-6 py-3 text-gray-00 hover:text-purple-300'>Home</a>
        </Link>
        <Link href='/messages'>
          <a className='px-6 py-3 text-gray-00 hover:text-purple-300'>Messages</a>
        </Link>
        <Link href='https://github.com/saitodisse/nextjs-opinionated-hasura'>
          <a className='px-6 py-3 text-gray-00 hover:text-purple-300'>Github</a>
        </Link>
      </nav>
      <button type='button' className='absolute top-0 right-0 flex flex-col p-4 mt-5 md:hidden'>
        <span className='w-5 h-px mb-1 bg-orange-500' />
        <span className='w-5 h-px mb-1 bg-orange-500' />
        <span className='w-5 h-px mb-1 bg-orange-500' />
      </button>
    </header>
  )
}
