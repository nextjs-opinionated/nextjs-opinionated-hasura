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
import {
  Insert_random_list_items_api_post,
  insert_random_list_items_api_post_Config,
} from '../../model/api-models/list-items/Insert_random_list_items_api_post'
import classnames from 'classnames'
import { Table } from '../../components/Table/Table'
import Link from 'next/link'
import { Pagination } from '../../components/Pagination/Pagination'

const Messages: React.FunctionComponent = () => {
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
        <title>MESSAGES : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>MESSAGES</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='md:mx-8'>
          <div className='flex flex-wrap my-4'>
            <button
              className='mx-2 btn btn-primary'
              onClick={async () => {
                await typedFetch<
                  Insert_random_list_items_api_post['input'],
                  Insert_random_list_items_api_post['output']
                >({
                  ...insert_random_list_items_api_post_Config,
                })
                await refetch()
              }}
              disabled={isLoading}
            >
              new random
            </button>

            <button
              className='mx-2 btn btn-primary'
              onClick={async () => {
                router.push(`/list-items/new`)
              }}
              disabled={isLoading}
            >
              new empty
            </button>
          </div>

          <div className='flex justify-between'>
            <div className='my-10 text-sm'>items below are persisted on server:</div>
            <div className='btn-group'>
              <button
                className={classnames('btn btn-outline', {
                  'btn-active': (router.query.showAs as string) === 'cards',
                })}
                onClick={() => {
                  router.replace('/list-items?showAs=cards')
                }}
              >
                cards
              </button>
              <button
                className={classnames('btn btn-outline', {
                  'btn-active': (router.query.showAs as string) === 'table',
                })}
                onClick={() => {
                  router.replace('/list-items?showAs=table')
                }}
              >
                table
              </button>
            </div>
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
                Título: (item) => (
                  <Link href={`${item.url}`}>
                    <a className='pl-0 underline btn btn-link btn-xs'> {item.title}</a>
                  </Link>
                ),
                'Publicado em ': (item) => item.publishedAt,
              }}
            />
          )}
        </main>
      </Layout>
    </>
  )
}

export default Messages
