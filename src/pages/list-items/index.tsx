import * as React from 'react'
import { showErrorAlert } from '../../components/showErrorAlert'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { FiEdit } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout/Layout'
import Head from 'next/head'
import { LinksList } from '../../model/site/LinksList'
import { useQuery } from 'react-query'
import typedFetch from '../../utils/typedFetch/typedFetch'
import {
  List_Item_api_get,
  list_items_api_get_Config,
} from '../../model/api-models/list-items/List_Items_api_get'
import { Table } from '../../components/Table/Table'
import Link from 'next/link'
import { Pagination } from '../../components/Pagination/Pagination'
import { BiLinkExternal } from 'react-icons/bi'
import { v4 as uuidv4 } from 'uuid'

const List_Items_Page: React.FunctionComponent = () => {
  const [current_page, current_pageSet] = useState(1)
  const ITEMS_PER_PAGE = 3

  const { data, isLoading, error, refetch } = useQuery('fetch_tester_api_get_Key', async () => {
    const resultObj = await typedFetch<List_Item_api_get['input'], List_Item_api_get['output']>({
      ...list_items_api_get_Config,
      data: { limit: ITEMS_PER_PAGE.toString(), current_page: current_page.toString() },
    })
    return resultObj.data
  })

  const router = useRouter()

  useEffect(() => {
    if (error) {
      showErrorAlert({ error })
    }
  }, [error])

  const [listItems, listItemsSet] = useState<any[]>()
  useEffect(() => {
    if (data?.list_items) {
      listItemsSet(
        data?.list_items?.map((listItem) => {
          return {
            ...listItem,
            publishedAt: dayjs(listItem.publishedAt).format('YYYY-MM-DD'),
          }
        })
      )
    }
  }, [data?.list_items])
  useEffect(() => {
    ;(async () => {
      await refetch()
    })()
  }, [current_page, refetch])

  return (
    <>
      <Head>
        <title className='uppercase'>List Items : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold uppercase'>List Items</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='md:mx-8'>
          <div className='flex flex-wrap my-4'></div>

          <div className='flex items-center justify-between my-10'>
            <h2 className='text-lg font-bold '>List Items:</h2>
            <button
              className='mx-2 btn btn-primary'
              onClick={async () => {
                router.push(`/list-items/${uuidv4()}`)
              }}
              disabled={isLoading}
            >
              create new item
            </button>
          </div>

          {(router.query.showAs as string) === 'cards' ? (
            <>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow'>
                {listItems?.map((listItem) => (
                  <div key={listItem.id} className='card bordered'>
                    <figure>
                      <img src={listItem.imageUrl || ''} className='object-cover w-full h-48' />
                    </figure>
                    <div className='card-body'>
                      <div className='flex flex-col justify-between h-full'>
                        <div className='my-1'>
                          <p>{dayjs(listItem.publishedAt).format('YYYY-MM-DD')}</p>
                          <h2 className='card-title'>
                            <a className='underline link-hover' href={listItem.url || ''}>
                              {listItem.title}
                            </a>
                          </h2>
                        </div>
                        <div className='card-actions'>
                          <div className='mt-1'>
                            {listItem.message_tags?.map((tag) => (
                              <div className='badge badge-ghost' key={tag.tag.name}>
                                {tag.tag.name}
                              </div>
                            ))}
                          </div>

                          <button
                            className='btn btn-sm btn-secondary'
                            onClick={async () => {
                              router.push(`/messages/${listItem.id}`)
                            }}
                            disabled={isLoading}
                          >
                            edit &nbsp;
                            <FiEdit />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex justify-center w-full'>
                <Pagination
                  className='my-2'
                  totalPages={Math.ceil(
                    (data?.list_items_aggregate?.aggregate?.count as number) / ITEMS_PER_PAGE
                  )}
                  currentPage={current_page}
                  onPageSet={current_pageSet}
                />
              </div>
            </>
          ) : (
            <Table
              pageSize={ITEMS_PER_PAGE}
              totalItems={data?.list_items_aggregate?.aggregate?.count}
              currentPage={current_page}
              onPageSet={current_pageSet}
              className='table-zebra'
              data={listItems || []}
              fields={{
                Title: (item) => (
                  <Link href={`list-items/${item.id}`}>
                    <a className='pl-0 underline btn btn-link btn-xs'> {item.title}</a>
                  </Link>
                ),
                'External link': (item) => (
                  <div className='flex justify-center mr-5'>
                    <Link href={`${item.url}`}>
                      <a>
                        <BiLinkExternal size={20} />
                      </a>
                    </Link>
                  </div>
                ),
                'Published at': (item) => item.publishedAt,
              }}
            />
          )}
        </main>
      </Layout>
    </>
  )
}

export default List_Items_Page
