import * as React from 'react'
import { Messages_By_PkQuery, Messages_Insert_Input } from '../../graphql/generated'
import { Header } from '../../components/Header'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { messageValidationSchema } from '../../model/messageValidationSchema'
import classnames from 'classnames'
import useSWRFetch from '../../utils/useSWRFetch'
import queryString from 'query-string'
import { useRouter } from 'next/router'
import { Button } from '../../components/Button/Button'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import dayjs from 'dayjs'

type FormProps = Omit<Messages_Insert_Input, 'message_tags'> & {
  publishedAt_date: string
  publishedAt_time: string
}

const Page: React.FunctionComponent = () => {
  const router = useRouter()
  const {
    data: dataMessages_by_pk,
    loading: loadingMessages_by_pk,
    error: errorMessages_by_pk,
  } = useSWRFetch<Messages_By_PkQuery>(
    `/api/messages/messages_by_pk/?${queryString.stringify({
      message_id: router.query.message_id,
    })}`
  )
  const {
    handleSubmit,
    register,
    formState: { errors: validationErrors },
    formState,
    reset,
  } = useForm<FormProps>({
    mode: 'onChange',
    resolver: zodResolver(messageValidationSchema),
  })

  if (loadingMessages_by_pk) {
    return <p>Loading...</p>
  }

  if (errorMessages_by_pk) {
    return <p>ERROR {errorMessages_by_pk}</p>
  }

  const onSubmit = handleSubmit(
    async (submitProps) => {
      const publishedAt = new Date(
        `${submitProps.publishedAt_date}:${submitProps.publishedAt_time}`
      ) // format date to timestamps

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      const res = await fetch('/api/messages/insert_messages_one', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          message_id: router.query.message_id === `new` ? null : router.query.message_id,
          title: submitProps.title,
          body: submitProps.body,
          url: submitProps.url,
          imageUrl: submitProps.imageUrl,
          publishedAt,
          timezoneOffset: new Date().getTimezoneOffset(),
        }),
      })

      if (res.status !== 200) {
        const myAlert = withReactContent(Swal)
        await myAlert.fire({
          title: 'error',
          html: res.statusText,
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

  console.log('--  validationErrors: ', validationErrors)
  console.log(
    '--  dataMessages_by_pk?.messages_by_pk?.publishedAt: ',
    dataMessages_by_pk?.messages_by_pk?.publishedAt
  )
  // var offset = new Date().getTimezoneOffset()
  // console.log(offset)

  return (
    <div>
      <div className='m-2'>
        <div className='flex flex-col py-4 font-sans bg-white'>
          <div className='container max-w-3xl md:mx-auto'>
            <Header />

            <main className='flex flex-col pt-8 mx-8'>
              <form onSubmit={onSubmit}>
                <div className='hidden sm:block' aria-hidden='true'>
                  <div className='py-5'>
                    <div className='border-t border-gray-200' />
                  </div>
                </div>

                <div>
                  <div className='md:grid md:grid-cols-3 md:gap-6'>
                    <div className='md:col-span-1'>
                      <div className='px-4 sm:px-0'>
                        <h3 className='text-lg font-medium leading-6 text-gray-900'>Message</h3>
                      </div>
                    </div>
                    <div className='mt-5 md:mt-0 md:col-span-2'>
                      <div className='shadow sm:rounded-md sm:overflow-hidden'>
                        <div className='px-4 py-5 space-y-6 bg-white sm:p-6'>
                          {/* title */}
                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              htmlFor='title'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Title:
                              <input
                                type='text'
                                {...register('title')}
                                defaultValue={dataMessages_by_pk?.messages_by_pk?.title}
                                className={classnames(
                                  'block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm',
                                  {
                                    'focus:border-red-400 focus:ring-red-500 border-red-300':
                                      validationErrors.title,
                                    'focus:border-indigo-500 focus:ring-indigo-500 border-gray-300':
                                      !validationErrors.title,
                                  }
                                )}
                                placeholder='Title...'
                              />
                            </label>
                            {validationErrors.title && (
                              <p className='mt-1 text-sm text-red-600'>
                                {validationErrors.title.message}
                              </p>
                            )}
                          </div>

                          {/* body */}
                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              htmlFor='body'
                              className='block text-sm font-medium text-gray-700'
                            >
                              body:
                              <input
                                type='text'
                                {...register('body')}
                                defaultValue={dataMessages_by_pk?.messages_by_pk?.body}
                                className={classnames(
                                  'block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm',
                                  {
                                    'focus:border-red-400 focus:ring-red-500 border-red-300':
                                      validationErrors.body,
                                    'focus:border-indigo-500 focus:ring-indigo-500 border-gray-300':
                                      !validationErrors.body,
                                  }
                                )}
                                placeholder='body...'
                              />
                            </label>
                            {validationErrors.body && (
                              <p className='mt-1 text-sm text-red-600'>
                                {validationErrors.body.message}
                              </p>
                            )}
                          </div>

                          {/* url */}
                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              htmlFor='url'
                              className='block text-sm font-medium text-gray-700'
                            >
                              url:
                              <input
                                type='text'
                                {...register('url')}
                                defaultValue={dataMessages_by_pk?.messages_by_pk?.url}
                                className={classnames(
                                  'block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm',
                                  {
                                    'focus:border-red-400 focus:ring-red-500 border-red-300':
                                      validationErrors.url,
                                    'focus:border-indigo-500 focus:ring-indigo-500 border-gray-300':
                                      !validationErrors.url,
                                  }
                                )}
                                placeholder='url...'
                              />
                            </label>
                            {validationErrors.url && (
                              <p className='mt-1 text-sm text-red-600'>
                                {validationErrors.url.message}
                              </p>
                            )}
                          </div>

                          {/* imageUrl */}
                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              htmlFor='imageUrl'
                              className='block text-sm font-medium text-gray-700'
                            >
                              imageUrl:
                              <input
                                type='text'
                                {...register('imageUrl')}
                                defaultValue={dataMessages_by_pk?.messages_by_pk?.imageUrl}
                                className={classnames(
                                  'block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm',
                                  {
                                    'focus:border-red-400 focus:ring-red-500 border-red-300':
                                      validationErrors.imageUrl,
                                    'focus:border-indigo-500 focus:ring-indigo-500 border-gray-300':
                                      !validationErrors.imageUrl,
                                  }
                                )}
                                placeholder='imageUrl...'
                              />
                            </label>
                            {validationErrors.imageUrl && (
                              <p className='mt-1 text-sm text-red-600'>
                                {validationErrors.imageUrl.message}
                              </p>
                            )}
                          </div>

                          {/* publishedAt_date DATE */}
                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              htmlFor='publishedAt_date'
                              className='block text-sm font-medium text-gray-700'
                            >
                              published at:
                              <input
                                type='date'
                                {...register('publishedAt_date')}
                                defaultValue={dayjs(
                                  dataMessages_by_pk?.messages_by_pk?.publishedAt
                                ).format('YYYY-MM-DD')}
                                className={classnames(
                                  'block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm',
                                  {
                                    'focus:border-red-400 focus:ring-red-500 border-red-300':
                                      validationErrors.publishedAt_date,
                                    'focus:border-indigo-500 focus:ring-indigo-500 border-gray-300':
                                      !validationErrors.publishedAt_date,
                                  }
                                )}
                                placeholder='publishedAt_date...'
                              />
                            </label>
                            {validationErrors.publishedAt_date && (
                              <p className='mt-1 text-sm text-red-600'>
                                {validationErrors.publishedAt_date.message}
                              </p>
                            )}
                          </div>

                          {/* publishedAt_time TIME */}
                          <div className='col-span-6 sm:col-span-4'>
                            <label
                              htmlFor='publishedAt_time'
                              className='block text-sm font-medium text-gray-700'
                            >
                              published at:
                              <input
                                type='time'
                                {...register('publishedAt_time')}
                                defaultValue={dayjs(
                                  dataMessages_by_pk?.messages_by_pk?.publishedAt
                                ).format('HH:mm')}
                                className={classnames(
                                  'block w-full mt-1 border-gray-300 rounded-md shadow-sm sm:text-sm',
                                  {
                                    'focus:border-red-400 focus:ring-red-500 border-red-300':
                                      validationErrors.publishedAt_time,
                                    'focus:border-indigo-500 focus:ring-indigo-500 border-gray-300':
                                      !validationErrors.publishedAt_time,
                                  }
                                )}
                                placeholder='publishedAt_time...'
                              />
                            </label>
                            {validationErrors.publishedAt_time && (
                              <p className='mt-1 text-sm text-red-600'>
                                {validationErrors.publishedAt_time.message}
                              </p>
                            )}
                          </div>

                          <div className='flex justify-end'>
                            <button
                              type='button'
                              onClick={() => {
                                reset({
                                  ...dataMessages_by_pk?.messages_by_pk,
                                })
                              }}
                              className={classnames(
                                'inline-flex justify-center px-4 py-2 mr-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
                                {
                                  'text-red-400 underline focus:ring-red-500': formState.isDirty,
                                  'text-gray-400 focus:ring-gray-500': !formState.isDirty,
                                }
                              )}
                            >
                              RESET
                            </button>

                            <Button type='submit' disabled={!formState.isValid}>
                              SAVE
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='hidden sm:block' aria-hidden='true'>
                  <div className='py-5'>
                    <div className='border-t border-gray-200' />
                  </div>
                </div>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
