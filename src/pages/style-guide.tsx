import Head from 'next/head'
import React from 'react'
import { Layout } from '../components/Layout/Layout'
import { LinksList } from '../model/site/LinksList'
import { ChangeThemeDropDown } from '../components/ChangeThemeDropDown/ChangeThemeDropDown'

export default function Page() {
  const pageTitle = process.env.NEXT_PUBLIC_SITE_NAME
  const description = 'Style Guide Description'

  return (
    <>
      <Head>
        <title>{pageTitle} - Style Guide</title>
        <meta name='description' content={description} />
        <meta name='og:description' content={description} />

        {/* Open Graph */}
        <meta name='og:title' content={pageTitle} key='ogtitle' />
        <meta name='og:description' content={description} />
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>Style Guide</div>
            <div className='text-sm'>Next.js Opinionated</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <div className='p-4'>
          <div>
            <div className='items-end justify-start h-96 hero bg-primary rounded-box'>
              <div className='hero-content'>
                <div className='py-6 hero-text'>
                  <div className='py-2 font-bold text-9xl text-primary-content'>Aa</div>
                  <div className='py-2 text-5xl font-bold text-primary-content'>
                    Style Guide Demo
                  </div>
                  <p className='text-primary-content'>Omnis quo eveniet veniam quis odit.</p>
                </div>
              </div>
            </div>
            <div className='pt-32 pb-12'>
              <div className='inline-block text-2xl font-bold border-b-8 lg:text-7xl text-base-content border-primary'>
                Typography
              </div>
              <div className='flex justify-end w-full pb-10'>
                <ChangeThemeDropDown />
              </div>
            </div>
            <div className='flex flex-col space-x-6 lg:flex-row'>
              <div className='space-y-2 font-bold text-base-content'>
                <div className='text-9xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-8xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-7xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-6xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-5xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-4xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-3xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-2xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-xl'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-lg'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-base'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-sm'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
                <div className='text-xs'>
                  AaBb<span className='hidden lg:inline-block'>Cc</span>
                </div>
              </div>
              <div className='space-y-2 text-base-content'>
                <div className='text-9xl'>text-9xl</div>
                <div className='text-8xl'>text-8xl</div>
                <div className='text-7xl'>text-7xl</div>
                <div className='text-6xl'>text-6xl</div>
                <div className='text-5xl'>text-5xl</div>
                <div className='text-4xl'>text-4xl</div>
                <div className='text-3xl'>text-3xl</div>
                <div className='text-2xl'>text-2xl</div>
                <div className='text-xl'>text-xl</div>
                <div className='text-lg'>text-lg</div>
                <div className='text-base'>text-base</div>
                <div className='text-sm'>text-sm</div>
                <div className='text-xs'>text-xs</div>
              </div>
            </div>
            <div className='pt-32 pb-12'>
              <div className='inline-block text-2xl font-bold border-b-8 lg:text-7xl text-base-content border-primary'>
                Brand Colors
              </div>
              <div className='flex justify-end w-full pb-10'>
                <ChangeThemeDropDown />
              </div>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-10 text-xs font-semibold capitalize md:grid-cols-6'>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-primary' />
                <div className='py-4'>primary</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-primary-focus' />
                <div className='py-4'>primary focus</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-primary-content' />
                <div className='py-4'>primary content</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-secondary' />
                <div className='py-4'>secondary</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-secondary-focus' />
                <div className='py-4'>secondary focus</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-secondary-content' />
                <div className='py-4'>secondary content</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-accent' />
                <div className='py-4'>accent</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-accent-focus' />
                <div className='py-4'>accent focus</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-accent-content' />
                <div className='py-4'>accent content</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-neutral' />
                <div className='py-4'>neutral</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-neutral-focus' />
                <div className='py-4'>neutral focus</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-neutral-content' />
                <div className='py-4'>neutral content</div>
              </div>
            </div>
            <div className='pt-32 pb-12'>
              <div className='inline-block text-2xl font-bold border-b-8 lg:text-7xl text-base-content border-primary'>
                Base Colors
              </div>
              <div className='flex justify-end w-full pb-10'>
                <ChangeThemeDropDown />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-10 text-xs font-semibold capitalize lg:grid-cols-5'>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-base-100' />
                <div className='py-4'>100</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-base-200' />
                <div className='py-4'>200</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-base-300' />
                <div className='py-4'>300</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-base-content' />
                <div className='py-4'>content</div>
              </div>
            </div>
            <div className='pt-32 pb-12'>
              <div className='inline-block text-2xl font-bold border-b-8 lg:text-7xl text-base-content border-primary'>
                State Colors
              </div>
              <div className='flex justify-end w-full pb-10'>
                <ChangeThemeDropDown />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-10 text-xs font-semibold capitalize lg:grid-cols-5'>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-info' />
                <div className='py-4'>info</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-success' />
                <div className='py-4'>success</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-warning' />
                <div className='py-4'>warning</div>
              </div>
              <div>
                <div className='w-20 h-20 shadow-lg w-fill lg:w-32 lg:h-32 rounded-box bg-error' />
                <div className='py-4'>error</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
