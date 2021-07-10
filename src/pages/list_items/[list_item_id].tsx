import * as React from 'react'
import { useRouter } from 'next/router'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import Head from 'next/head'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'
import Loading from '../../components/Loading/Loading'
import { useQuery } from 'react-query'
import {
  List_items_by_pk_api_get,
  list_items_by_pk_api_get_Config,
} from '../../model/api-models/list_items/List_items_by_pk_api_get'
import typedFetch from '../../utils/typedFetch/typedFetch'
import {
  Insert_list_items_one_api_post,
  insert_list_items_one_api_post_Config,
} from '../../model/api-models/list_items/Insert_list_items_one_api_post'
import { List_items_Form } from '../../components/List_items_Form/List_items_Form'
import {
  Delete_list_items_by_pk_api_delete,
  delete_list_items_by_pk_api_delete_Config,
} from '../../model/api-models/list_items/Delete_list_item_by_pk_api_delete'

const Page: React.FunctionComponent = () => {
  const router = useRouter()

  // react-query
  const { data, isLoading, isSuccess, error } = useQuery(
    list_items_by_pk_api_get_Config.url, // queryKey
    async () => {
      const resultObj = await typedFetch<
        List_items_by_pk_api_get['input'],
        List_items_by_pk_api_get['output']
      >({
        ...list_items_by_pk_api_get_Config, // url, method, responseType
        inputData: {
          list_item_id: router.query?.list_item_id as string,
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
      enabled: (router.query?.list_item_id as string)?.length > 0,
    }
  )

  if (isLoading) {
    return (
      <>
        <Head>
          <title>EDIT LIST ITEM : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
        </Head>

        <Layout
          title={
            <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
              <div className='text-base font-bold'>EDIT LIST ITEM</div>
              <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
            </div>
          }
          menuItems={Object.values(LinksList)}
        >
          <div className='flex items-center justify-center'>
            <Loading title='Loading...' className='w-10 h-10' />
          </div>
        </Layout>
      </>
    )
  }

  if (error) {
    return <p>ERROR {error}</p>
  }

  return (
    <>
      <Head>
        <title>EDIT LIST ITEM : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>EDIT LIST ITEM</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='flex justify-center mx-8'>
          {isSuccess && (
            <List_items_Form
              initialFormData={{
                title: data?.outputData?.list_items_by_pk?.title || '',
                body: data?.outputData?.list_items_by_pk?.body || '',
                url: data?.outputData?.list_items_by_pk?.url || '',
                imageUrl: data?.outputData?.list_items_by_pk?.imageUrl || '',
                publishedAt: data?.outputData?.list_items_by_pk?.publishedAt || '',
              }}
              onSubmitConfirm={async (submitProps) => {
                const publishedAt = new Date(
                  `${submitProps.publishedAt_date}T${submitProps.publishedAt_time}`
                ) // format date to timestamps

                const headers = new Headers()
                headers.append('Content-Type', 'application/json')

                const typedFetchResult = await typedFetch<
                  Insert_list_items_one_api_post['input'],
                  Insert_list_items_one_api_post['output']
                >({
                  ...insert_list_items_one_api_post_Config,
                  inputData: {
                    id: router?.query?.list_item_id as string,
                    title: submitProps.title,
                    body: submitProps.body,
                    url: submitProps.url,
                    imageUrl: submitProps.imageUrl,
                    publishedAt: publishedAt.toISOString(),
                    // timezoneOffset: new Date().getTimezoneOffset(),
                  },
                })

                const myAlert = withReactContent(Swal)
                if (typedFetchResult.error) {
                  await myAlert.fire({
                    title: 'error',
                    html: typedFetchResult.statusText,
                    confirmButtonText: 'close',
                  })
                  return
                }
                router.back()
              }}
              //
              // delete item
              onDelete={async () => {
                const result = await typedFetch<
                  Delete_list_items_by_pk_api_delete['input'],
                  Delete_list_items_by_pk_api_delete['output']
                >({
                  ...delete_list_items_by_pk_api_delete_Config,
                  inputData: { id: String(data?.outputData?.list_items_by_pk?.id) },
                })

                // show alert
                const myAlert = withReactContent(Swal)
                if (!result.error) {
                  await myAlert.fire({
                    title: 'Deletion was successful!',
                    confirmButtonText: 'close',
                  })
                  router.back()
                } else {
                  await myAlert.fire({
                    title: 'error',
                    html: <p>{JSON.stringify(result.error)}</p>,
                    confirmButtonText: 'close',
                  })
                }
              }}
            />
          )}
        </main>
      </Layout>
    </>
  )
}

export default Page
