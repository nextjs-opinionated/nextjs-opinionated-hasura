import React, { ReactNode } from 'react'
import Link from 'next/link'
import { LinkProps } from '../../model/site/LinksList'

export interface LayoutProps {
  title?: string
  menuItems?: LinkProps[]
  children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ title, menuItems, children }) => {
  return (
    <div className='h-screen bg-base-200 drawer text-base-content'>
      {/* put everything in a off-canvas drawer */}
      {/* this checkbox controls if drawer is open */}
      <input id='menu-drawer' type='checkbox' className='drawer-toggle' />
      <div className='flex flex-col drawer-content'>
        {/* drawer content */}
        <div className='w-full navbar bg-base-300'>
          {/* hamburger menu is only visible on mobile */}
          <div className='flex-none lg:hidden'>
            <label htmlFor='menu-drawer' className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </label>
          </div>
          <div className='flex-1 px-2 mx-2 font-bold'>
            {/* navbar title */}
            <span>{title}</span>
          </div>
          <div className='flex-none'>
            {/* navbar is only visible for desktop */}
            <div className='hidden lg:inline-block'>
              <ul className='mr-2 space-x-2 menu horizontal'>
                {menuItems?.map((m) => (
                  <li key={m.name}>
                    <div className='m-1 normal-case btn'>
                      {m.internalURL && (
                        <Link href={m.internalURL}>
                          <a className='rounded-btn'>{m.name}</a>
                        </Link>
                      )}
                      {m.externalURL && (
                        <a href={m.externalURL} className='rounded-btn'>
                          {m.name}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* main content */}
        <div className=''>
          <div className='w-full p-4'>{children}</div>
        </div>
      </div>
      {/* drawer sidebar for mobile */}
      <div className='drawer-side'>
        <label htmlFor='menu-drawer' className='drawer-overlay' />
        <ul className='p-4 overflow-y-auto menu w-80 bg-base-100'>
          {menuItems?.map((m) => (
            <li key={m.name}>
              {m.internalURL && (
                <Link href={m.internalURL}>
                  <a className='rounded-btn'>{m.name}</a>
                </Link>
              )}
              {m.externalURL && (
                <a href={m.externalURL} className='rounded-btn'>
                  {m.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
