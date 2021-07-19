import React, { ReactNode, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classnames from 'classnames'
import { LinkProps } from '../../model/site/LinksList'
import { ThemeList } from '../../model/site/ThemeList'
import { useTheme } from 'next-themes'
import { useUser } from '@auth0/nextjs-auth0'
import Loading from '../Loading/Loading'
import { BiLinkExternal, BiLogIn, BiLogOut } from 'react-icons/bi'
import { BsPersonFill } from 'react-icons/bs'
import { DropDown } from '../DropDown/DropDown'
import _ from 'lodash'

export interface LayoutProps {
  title?: ReactNode
  menuItems?: LinkProps[]
  children?: ReactNode
  internal_theme?: string
}

export const Layout: React.FC<LayoutProps> = ({ title, menuItems, children }) => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const { user, error, isLoading } = useUser()
  const checkboxRef = useRef<HTMLInputElement>(null)

  if (isLoading) return <Loading />
  if (error) return <div>{error.message}</div>

  return (
    <div className='h-screen bg-base-100 drawer text-base-content'>
      {/* put everything in a off-canvas drawer */}
      {/* this checkbox controls if drawer is open */}
      <input id='menu-drawer' type='checkbox' className='drawer-toggle' ref={checkboxRef} />
      <div className='flex flex-col drawer-content'>
        {/* drawer content */}
        <div
          className={classnames(
            'inset-x-0 top-0 z-10 w-full border-b border-transparent navbar text-base-content',
            {
              'bg-transparent fixed text-primary-content': router.asPath === '/',
            }
          )}
        >
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
                        <a className='rounded-btn btn btn-ghost' rel='noopener noreferrer'>
                          {m.name}
                        </a>
                      </Link>
                    )}
                    {m.externalURL && (
                      <a
                        className='rounded-btn btn btn-ghost'
                        href={m.externalURL}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {m.name}
                        <BiLinkExternal className='ml-2' size={17} />
                      </a>
                    )}
                  </div>
                ))}
                <li>
                  <div className='z-30 m-1'>
                    <select
                      className='w-full max-w-xs select select-bordered bg-base-100 text-base-content'
                      onChange={(ev) => {
                        setTheme(ev.target.value)
                      }}
                      value={theme}
                    >
                      <option disabled>theme</option>
                      {_.map(ThemeList, (t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </li>
                <li>
                  <div className='m-1'>
                    {!user && (
                      <Link href='/api/auth/login'>
                        <a className='btn btn-ghost'>
                          Login
                          <BiLogIn size={20} className='mx-2' />
                        </a>
                      </Link>
                    )}

                    {user && (
                      <>
                        <DropDown
                          className='static bg-transparent'
                          width={50}
                          selectedId={null}
                          onSelect={() => {
                            /**/
                          }}
                          label={
                            <div className='avatar'>
                              <div className='w-10 h-10 m-1 rounded-full'>
                                {user?.picture ? (
                                  <img alt={user.name || undefined} src={user?.picture} />
                                ) : (
                                  <BsPersonFill />
                                )}
                              </div>
                            </div>
                          }
                          items={[
                            {
                              id: '1',
                              value: (
                                <Link href='/api/auth/logout'>
                                  <a className='justify-center btn btn-ghost'>
                                    <BiLogOut size={20} className='mx-2' />
                                  </a>
                                </Link>
                              ),
                            },
                          ]}
                        />
                      </>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* main content */}
        <div
          className={classnames('w-full', {
            'p-4 lg:px-6 lg:container lg:mx-auto': router.asPath !== '/',
          })}
        >
          {children}
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
                  <a
                    tabIndex={0}
                    role='link'
                    onKeyDown={() => {
                      if (checkboxRef.current) {
                        checkboxRef.current.checked = false
                      }
                    }}
                    onClick={() => {
                      if (checkboxRef.current) {
                        checkboxRef.current.checked = false
                      }
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
                    if (checkboxRef.current) {
                      checkboxRef.current.checked = false
                    }
                  }}
                  href={m.externalURL}
                  className='rounded-btn'
                >
                  {m.name}
                </a>
              )}
            </li>
          ))}
          <li>
            <div className='m-1'>
              {!user && (
                <Link href='/api/auth/login'>
                  <a className='btn btn-primary'>
                    Login
                    <BiLogIn size={20} className='mx-2' />
                  </a>
                </Link>
              )}

              {user && (
                <>
                  <DropDown
                    className='static bg-transparent'
                    width={50}
                    selectedId={null}
                    onSelect={() => {
                      /**/
                    }}
                    label={
                      <div className='avatar'>
                        <div className='w-10 h-10 m-1 rounded-full'>
                          {user?.picture ? (
                            <img alt={user.name || undefined} src={user?.picture} />
                          ) : (
                            <BsPersonFill />
                          )}
                        </div>
                      </div>
                    }
                    items={[
                      {
                        id: '1',
                        value: (
                          <Link href='/api/auth/logout'>
                            <a className='justify-center btn btn-ghost'>
                              <BiLogOut size={20} className='mx-2' />
                            </a>
                          </Link>
                        ),
                      },
                    ]}
                  />
                </>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
