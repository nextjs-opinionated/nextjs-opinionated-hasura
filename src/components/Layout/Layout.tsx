import React, { ReactNode, useRef } from 'react'
import Link from 'next/link'
import { LinkProps } from '../../model/site/LinksList'
import { ThemeList } from '../../model/site/ThemeList'
import { useTheme } from 'next-themes'

export interface LayoutProps {
  title?: ReactNode
  menuItems?: LinkProps[]
  children?: ReactNode
  internal_theme?: string
}

export const Layout: React.FC<LayoutProps> = ({ title, menuItems, children }) => {
  const { theme, setTheme } = useTheme()
  const checkboxRef = useRef<HTMLInputElement>()
  return (
    <div className='h-screen bg-base-100 drawer text-base-content'>
      {/* put everything in a off-canvas drawer */}
      {/* this checkbox controls if drawer is open */}
      <input id='menu-drawer' type='checkbox' className='drawer-toggle' ref={checkboxRef} />
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

          {/* title */}
          {title}

          <div className='flex-none'>
            {/* navbar is only visible for desktop */}
            <div className='hidden lg:inline-block'>
              <ul className='space-x-2 menu horizontal'>
                {menuItems?.map((m) => (
                  <div className='flex items-center' key={m.name}>
                    {m.internalURL && (
                      <Link href={m.internalURL}>
                        <a className='rounded-btn btn btn-ghost btn-sm' rel='noopener noreferrer'>
                          {m.name}
                        </a>
                      </Link>
                    )}
                    {m.externalURL && (
                      <a
                        className='rounded-btn btn btn-ghost btn-sm'
                        href={m.externalURL}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {m.name}
                      </a>
                    )}
                  </div>
                ))}
                <li>
                  <div className='z-30 m-1'>
                    <select
                      className='w-full max-w-xs select select-bordered'
                      onChange={(ev) => {
                        setTheme(ev.target.value)
                      }}
                      value={theme}
                    >
                      <option disabled>theme</option>
                      {Object.values(ThemeList).map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* main content */}
        <div className='w-full p-4 md:px-6 md:container md:mx-auto'>{children}</div>
      </div>

      {/* drawer sidebar for mobile */}
      <div className='drawer-side'>
        <label htmlFor='menu-drawer' className='drawer-overlay' />
        <ul className='p-4 overflow-y-auto menu w-80 bg-base-100'>
          {menuItems?.map((m) => (
            <li key={m.name}>
              {m.internalURL && (
                <Link href={m.internalURL}>
                  <a
                    onClick={() => {
                      checkboxRef.current.checked = false
                    }}
                    className='rounded-btn'
                  >
                    {m.name}
                  </a>
                </Link>
              )}
              {m.externalURL && (
                <a
                  onClick={() => {
                    checkboxRef.current.checked = false
                  }}
                  href={m.externalURL}
                  className='rounded-btn'
                >
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
