import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { MessagesValidationSchema } from '../../model/schemas/MessagesValidationSchema'
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
  Messages_by_pk_api_get,
  messages_by_pk_api_get_Config,
} from '../../model/api-models/messages/Messages_by_pk_api_get'
import typedFetch from '../../utils/typedFetch/typedFetch'
import {
  Insert_messages_one_api_post,
  insert_messages_one_api_post_Config,
} from '../../model/api-models/messages/Insert_messages_one_api_post'
import _ from 'lodash'

type FormProps = Insert_messages_one_api_post['input'] & {
  publishedAt_date: string
  publishedAt_time: string
}

const Page: React.FunctionComponent = () => {
  const router = useRouter()

  // react-query
  const queryObj = useQuery(
    'messages_by_pk_api_get',
    async () => {
      const resultObj = await typedFetch<
        Messages_by_pk_api_get['input'],
        Messages_by_pk_api_get['output']
      >({
        ...messages_by_pk_api_get_Config,
        data: {
          message_id: router.query.message_id as string,
        },
      })
      return resultObj.data
    },
    // # enabled
    //   Set this to false to disable automatic refetching when the query mounts
    //   or changes query keys. To refetch the query, use the refetch method returned
    //   from the useQuery instance. Defaults to true.
    //
    // dependent query
    // https://github.com/tannerlinsley/react-query-essentials/blob/master/18%20-%20dependent%20queries/app/src/App.js
    {
      enabled: (router.query.message_id as string)?.length > 0,
    }
  )

  // react-hook-form
  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
    formState,
    reset,
  } = useForm<FormProps>({
    mode: 'onChange',
    resolver: zodResolver(MessagesValidationSchema),
  })

  const onSubmit = handleSubmit(
    async (submitProps) => {
      const publishedAt = new Date(
        `${submitProps.publishedAt_date}T${submitProps.publishedAt_time}`
      ) // format date to timestamps

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const typedFetchResult = await typedFetch<
        Insert_messages_one_api_post['input'],
        Insert_messages_one_api_post['output']
      >({
        ...insert_messages_one_api_post_Config,
        data: {
          id: router.query.message_id === `new` ? null : _.toNumber(router.query.message_id),
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
      router.push('/messages')
    },
    (submitErrors) => {
      console.log('--  submitErrors: ', submitErrors)
    }
  )

  if (queryObj.isLoading) {
    return (
      <>
        <Head>
          <title>EDIT MESSAGE : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
        </Head>

        <Layout
          title={
            <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
              <div className='text-base font-bold'>EDIT MESSAGE</div>
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

  if (queryObj.error) {
    return <p>ERROR {queryObj.error}</p>
  }

  return (
    <>
      <Head>
        <title>EDIT MESSAGE : {process.env.NEXT_PUBLIC_SITE_NAME}</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>EDIT MESSAGE</div>
            <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='flex justify-center mx-8'>
          {queryObj.isSuccess && (
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
                      <h3 className='text-lg font-medium leading-6'>Message</h3>
                    </div>
                  </div>
                  <div className='mt-5 md:mt-0 md:col-span-2'>
                    <div className='shadow sm:rounded-md sm:overflow-hidden'>
                      <div className='px-4 py-5 space-y-6 sm:p-6'>
                        <FormInput
                          label='Title:'
                          name='title'
                          register={register}
                          defaultValue={queryObj.data?.messages_by_pk?.title}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Body:'
                          name='body'
                          register={register}
                          defaultValue={queryObj.data?.messages_by_pk?.body}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='URL:'
                          name='url'
                          register={register}
                          defaultValue={queryObj.data?.messages_by_pk?.url}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Image URL:'
                          name='imageUrl'
                          register={register}
                          defaultValue={queryObj.data?.messages_by_pk?.imageUrl}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Publish Date:'
                          type='date'
                          name='publishedAt_date'
                          register={register}
                          defaultValue={dayjs(queryObj.data?.messages_by_pk?.publishedAt).format(
                            'YYYY-MM-DD'
                          )}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Publish Time:'
                          type='time'
                          name='publishedAt_time'
                          register={register}
                          defaultValue={dayjs(queryObj.data?.messages_by_pk?.publishedAt).format(
                            'HH:mm'
                          )}
                          validationErrors={validationErrors}
                        />

                        <div className='flex justify-end'>
                          <button
                            type='button'
                            onClick={() => {
                              reset(queryObj?.data?.messages_by_pk as FormProps)
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
