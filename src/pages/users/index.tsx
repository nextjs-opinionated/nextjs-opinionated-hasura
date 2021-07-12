import * as React from 'react'
import { showErrorAlert } from '../../components/showErrorAlert'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout/Layout'
import Head from 'next/head'
import { LinksList } from '../../model/site/LinksList'
import { useQuery } from 'react-query'
import typedFetch from '../../utils/typedFetch/typedFetch'
import { Users_api_get, users_api_get_Config } from '../../model/api-models/users/Users_api_get'
import { Table } from '../../components/Table/Table'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import _ from 'lodash'
import {
  Delete_users_by_pk_api_delete,
  delete_users_by_pk_api_delete_Config,
} from '../../model/api-models/users/Delete_users_by_pk_api_delete'

const Users_Page: React.FunctionComponent = () => {
  const router = useRouter()
  const ITEMS_PER_PAGE = 3
  const { data, isLoading, error, refetch } = useQuery(
    'fetch_tester_api_get_Key',
    async () => {
      const resultObj = await typedFetch<Users_api_get['input'], Users_api_get['output']>({
        ...users_api_get_Config,
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
                router.push(`/users/${uuidv4()}`)
              }}
              disabled={isLoading}
            >
              create new item
            </button>
          </div>

          {data?.outputData?.users && (
            <Table<Users_api_get['output']['users'][0]>
              pageSize={ITEMS_PER_PAGE}
              totalItems={data?.outputData?.users_aggregate?.aggregate?.count}
              currentPage={_.toInteger(router.query.page) || 1}
              onPageSet={(pageIndex) => {
                router.push(`/users?page=${pageIndex}`)
              }}
              className='table-zebra'
              data={data.outputData.users}
              onDelete={async (id: string) => {
                const result = await typedFetch<
                  Delete_users_by_pk_api_delete['input'],
                  Delete_users_by_pk_api_delete['output']
                >({
                  ...delete_users_by_pk_api_delete_Config,
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
                image: {
                  label: 'Picture',
                  getNode: (item) => (
                    <Link href={`users/${item.id}`}>
                      <a className='w-32 pl-0 text-center underline btn btn-link btn-xs'>
                        <img className='w-32 object-fit' src={item.image || ''} />
                      </a>
                    </Link>
                  ),
                },
                name: {
                  label: 'Name',
                  getNode: (item) => (
                    <Link href={`users/${item.id}`}>
                      <a className='pl-0 underline btn btn-link btn-xs'> {item.name}</a>
                    </Link>
                  ),
                },
                email: {
                  label: 'Email',
                  getNode: (item) => <div>{item.email}</div>,
                },
                role: {
                  label: 'Role',
                  getNode: (item) => <div>{item.role}</div>,
                },
              }}
            />
          )}
        </main>
      </Layout>
    </>
  )
}

export default Users_Page
