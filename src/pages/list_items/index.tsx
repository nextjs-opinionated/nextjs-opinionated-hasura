import * as React from 'react'
import { showErrorAlert } from '../../components/showErrorAlert'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout/Layout'
import Head from 'next/head'
import { LinksList } from '../../model/site/LinksList'
import { useQuery } from 'react-query'
import typedFetch from '../../utils/typedFetch/typedFetch'
import {
  List_Item_api_get,
  list_items_api_get_Config,
} from '../../model/api-models/list_items/List_Items_api_get'
import { Table } from '../../components/Table/Table'
import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'
import { v4 as uuidv4 } from 'uuid'
import {
  Delete_list_items_by_pk_api_delete,
  delete_list_items_by_pk_api_delete_Config,
} from '../../model/api-models/list_items/Delete_list_item_by_pk_api_delete'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import _ from 'lodash'

const List_Items_Page: React.FunctionComponent = () => {
  const router = useRouter()
  const ITEMS_PER_PAGE = 3
  const { data, isLoading, error, refetch } = useQuery(
    'fetch_tester_api_get_Key',
    async () => {
      const resultObj = await typedFetch<List_Item_api_get['input'], List_Item_api_get['output']>({
        ...list_items_api_get_Config,
        inputData: {
          limit: ITEMS_PER_PAGE.toString(),
          current_page: String(router.query.page) || '1',
        },
      })
      return resultObj
    },
    // # enabled
    //   Set this to false to disable automatic refetching when the query mounts
    //   or changes query keys. To refetch the query, use the refetch method returned
    //   from the useQuery instance. Defaults to true.
    //
    // dependent query
    // https://github.com/tannerlinsley/react-query-essentials/blob/master/18%20-%20dependent%20queries/app/src/App.js
    {
      enabled: (router.query.page as string)?.length > 0,
    }
  )

  useEffect(() => {
    if (error) {
      showErrorAlert({ error })
    }
  }, [error])

  const [items, itemsSet] = useState<any[]>()
  useEffect(() => {
    if (data?.outputData?.list_items) {
      itemsSet(
        data?.outputData?.list_items?.map((item) => {
          return {
            ...item,
            publishedAt: dayjs(item.publishedAt).format('YYYY-MM-DD'),
          }
        })
      )
    }
  }, [data?.outputData?.list_items])
  useEffect(() => {
    ;(async () => {
      await refetch()
    })()
  }, [router.query.page, refetch])

  return (
    <>
      <Head>
        <title className='uppercase'>List Items: {process.env.NEXT_PUBLIC_SITE_NAME}</title>
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
                router.push(`/list_items/${uuidv4()}`)
              }}
              disabled={isLoading}
            >
              create new item
            </button>
          </div>

          <Table
            pageSize={ITEMS_PER_PAGE}
            totalItems={data?.outputData?.list_items_aggregate?.aggregate?.count}
            currentPage={_.toInteger(router.query.page) || 1}
            onPageSet={(pageIndex) => {
              router.push(`/list_items?page=${pageIndex}`)
            }}
            className='table-zebra'
            data={items || []}
            onDelete={async (id: string) => {
              const result = await typedFetch<
                Delete_list_items_by_pk_api_delete['input'],
                Delete_list_items_by_pk_api_delete['output']
              >({
                ...delete_list_items_by_pk_api_delete_Config,
                inputData: { id },
              })

              const myAlert = withReactContent(Swal)
              if (!result.error) {
                await myAlert.fire({
                  title: 'Deleted Item',
                  confirmButtonText: 'close',
                })
                await refetch()
              } else {
                await myAlert.fire({
                  title: 'error',
                  html: <p>{JSON.stringify(result.error)}</p>,
                  confirmButtonText: 'close',
                })
              }
            }}
            fields={{
              Image: (item) => (
                <Link href={`list_items/${item.id}`}>
                  <a className='w-32 pl-0 text-center underline btn btn-link btn-xs'>
                    <img className='w-32 object-fit' src={item.imageUrl} />
                  </a>
                </Link>
              ),

              Title: (item) => (
                <Link href={`list_items/${item.id}`}>
                  <a className='pl-0 underline btn btn-link btn-xs'> {item.title}</a>
                </Link>
              ),
              Description: (item) => (
                <div className='w-32 text-sm whitespace-pre-wrap'>{item.body}</div>
              ),
              'Published at': (item) => item.publishedAt,
              link: (item) => (
                <Link href={`${item.url}`}>
                  <a className='flex' title={item.url}>
                    <BiLinkExternal className='ml-2' size={20} />
                  </a>
                </Link>
              ),
            }}
          />
        </main>
      </Layout>
    </>
  )
}

export default List_Items_Page
