import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { List_items_validation_schema } from '../../model/schemas/List_items_validation_schema'
import { useRouter } from 'next/router'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import dayjs from 'dayjs'
import Head from 'next/head'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'
import { FormInput } from '../../components/forms/FormInput/FormInput'
import Loading from '../../components/Loading/Loading'
import { useQuery } from 'react-query'
import {
  List_items_by_pk_api_get,
  list_items_by_pk_api_get_Config,
} from '../../model/api-models/list-items/List_Items_by_pk_api_get'
import typedFetch from '../../utils/typedFetch/typedFetch'
import {
  Insert_list_items_one_api_post,
  insert_list_items_one_api_post_Config,
} from '../../model/api-models/list-items/Insert_list_items_one_api_post'
import { BsImage } from 'react-icons/bs'
import classnames from 'classnames'

type FormProps = Insert_list_items_one_api_post['input'] & {
  publishedAt_date: string
  publishedAt_time: string
}

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

  // react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
    formState,
    reset,
    watch,
  } = useForm<FormProps>({
    mode: 'onChange',
    resolver: zodResolver(List_items_validation_schema),
  })

  const imageUrl = watch('imageUrl')
  const [currentImageIsValid, currentImageIsValidSet] = React.useState(true)

  const onSubmit = handleSubmit(
    async (submitProps) => {
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

      if (typedFetchResult.error) {
        const myAlert = withReactContent(Swal)
        await myAlert.fire({
          title: 'error',
          html: typedFetchResult.statusText,
          confirmButtonText: 'close',
        })
        return
      }
      router.push('/list-items')
    },
    (submitErrors) => {
      console.log('--  submitErrors: ', submitErrors)
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
            <form onSubmit={onSubmit} className='max-w-4xl md:w-full'>
              <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                  <div className='border-t ' />
                </div>
              </div>

              <div>
                <div className='md:grid md:grid-cols-3 md:gap-6'>
                  <div className='md:col-span-1'>
                    <div className='px-4 sm:px-0'>
                      <h3 className='text-lg font-medium leading-6'>List Item</h3>
                    </div>
                  </div>
                  <div className='mt-5 md:mt-0 md:col-span-2'>
                    <div className='shadow sm:rounded-md sm:overflow-hidden'>
                      <div className='px-4 py-5 space-y-6 sm:p-6'>
                        <FormInput
                          label='Title:'
                          name='title'
                          register={register}
                          defaultValue={data?.outputData?.list_items_by_pk?.title}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Body:'
                          name='body'
                          register={register}
                          defaultValue={data?.outputData?.list_items_by_pk?.body}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='URL:'
                          name='url'
                          register={register}
                          defaultValue={data?.outputData?.list_items_by_pk?.url}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Image URL:'
                          name='imageUrl'
                          register={register}
                          defaultValue={data?.outputData?.list_items_by_pk?.imageUrl}
                          validationErrors={validationErrors}
                        />

                        <img
                          className={classnames('object-scale-down h-24', {
                            hidden: currentImageIsValid === false,
                          })}
                          src={imageUrl || undefined}
                          onError={() => {
                            currentImageIsValidSet(false)
                          }}
                          onLoad={() => {
                            currentImageIsValidSet(true)
                          }}
                        />
                        <BsImage
                          size={96}
                          className={classnames('h-24', {
                            hidden: currentImageIsValid === true,
                          })}
                        />

                        <FormInput
                          label='Publish Date:'
                          type='date'
                          name='publishedAt_date'
                          register={register}
                          defaultValue={dayjs(
                            data?.outputData?.list_items_by_pk?.publishedAt
                          ).format('YYYY-MM-DD')}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Publish Time:'
                          type='time'
                          name='publishedAt_time'
                          register={register}
                          defaultValue={dayjs(
                            data?.outputData?.list_items_by_pk?.publishedAt
                          ).format('HH:mm')}
                          validationErrors={validationErrors}
                        />

                        <div className='flex justify-end'>
                          <button
                            type='button'
                            onClick={() => {
                              reset(data?.outputData?.list_items_by_pk as FormProps)
                            }}
                            className='btn btn-secondary btn-link'
                          >
                            RESET
                          </button>

                          <button
                            type='submit'
                            className='btn btn-primary'
                            disabled={!formState.isValid}
                          >
                            SAVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='hidden sm:block' aria-hidden='true'>
                <div className='py-5'>
                  <div className='border-t ' />
                </div>
              </div>
            </form>
          )}
        </main>
      </Layout>
    </>
  )
}

export default Page
