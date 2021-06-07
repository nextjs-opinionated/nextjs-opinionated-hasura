import * as React from 'react'
import { Messages_By_PkQuery, Messages_Insert_Input } from '../../graphql/generated'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { messageValidationSchema } from '../../model/messageValidationSchema'
import classnames from 'classnames'
import useSWRFetch from '../../utils/useSWRFetch'
import queryString from 'query-string'
import { useRouter } from 'next/router'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import dayjs from 'dayjs'
import Head from 'next/head'
import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'
import { useEffect } from 'react'

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
    setValue,
  } = useForm<FormProps>({
    mode: 'onChange',
    resolver: zodResolver(messageValidationSchema),
  })

  useEffect(() => {
    if (!loadingMessages_by_pk && dataMessages_by_pk?.messages_by_pk) {
      setValue('title', dataMessages_by_pk?.messages_by_pk?.title)
      setValue('body', dataMessages_by_pk?.messages_by_pk?.body)
      setValue('url', dataMessages_by_pk?.messages_by_pk?.url)
      setValue('imageUrl', dataMessages_by_pk?.messages_by_pk?.imageUrl)
      setValue(
        'publishedAt_date',
        dayjs(dataMessages_by_pk?.messages_by_pk?.publishedAt).format('YYYY-MM-DD')
      )
      setValue(
        'publishedAt_time',
        dayjs(dataMessages_by_pk?.messages_by_pk?.publishedAt).format('HH:mm')
      )
    }
  }, [dataMessages_by_pk, loadingMessages_by_pk])

  const onSubmit = handleSubmit(
    async (submitProps) => {
      const publishedAt = new Date(
        `${submitProps.publishedAt_date}T${submitProps.publishedAt_time}`
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

  if (loadingMessages_by_pk) {
    return (
      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>...</div>
            <div className='text-sm'>Next.js Opinionated</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <p>Loading...</p>
      </Layout>
    )
  }

  if (errorMessages_by_pk) {
    return <p>ERROR {errorMessages_by_pk}</p>
  }

  return (
    <>
      <Head>
        <title>EDIT MESSAGE : Next.js Opinionated</title>
      </Head>

      <Layout
        title={
          <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
            <div className='text-base font-bold'>EDIT MESSAGE</div>
            <div className='text-sm'>Next.js Opinionated</div>
          </div>
        }
        menuItems={Object.values(LinksList)}
      >
        <main className='flex justify-center mx-8'>
          {!loadingMessages_by_pk && (
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
                        {/* title */}
                        <div className='col-span-6 sm:col-span-4'>
                          <div className='form-control'>
                            <label className='label' htmlFor='title'>
                              <span className='label-text'>title</span>
                            </label>
                            <input
                              type='text'
                              defaultValue={dataMessages_by_pk?.messages_by_pk?.title}
                              {...register('title')}
                              placeholder='title...'
                              className={classnames('input input-bordered', {
                                'input-error': validationErrors.title,
                              })}
                            />
                            {validationErrors.title && (
                              <label className='label'>
                                <span className='label-text-alt'>
                                  {validationErrors.title.message}
                                </span>
                              </label>
                            )}
                          </div>
                        </div>

                        {/* body */}
                        <div className='col-span-6 sm:col-span-4'>
                          <div className='form-control'>
                            <label className='label' htmlFor='body'>
                              <span className='label-text'>body</span>
                            </label>
                            <input
                              type='text'
                              defaultValue={dataMessages_by_pk?.messages_by_pk?.body}
                              {...register('body')}
                              placeholder='body...'
                              className={classnames('input input-bordered', {
                                'input-error': validationErrors.body,
                              })}
                            />
                            {validationErrors.body && (
                              <label className='label'>
                                <span className='label-text-alt'>
                                  {validationErrors.body.message}
                                </span>
                              </label>
                            )}
                          </div>
                        </div>

                        {/* url */}
                        <div className='col-span-6 sm:col-span-4'>
                          <div className='form-control'>
                            <label className='label' htmlFor='url'>
                              <span className='label-text'>url</span>
                            </label>
                            <input
                              type='text'
                              defaultValue={dataMessages_by_pk?.messages_by_pk?.url}
                              {...register('url')}
                              placeholder='url...'
                              className={classnames('input input-bordered', {
                                'input-error': validationErrors.url,
                              })}
                            />
                            {validationErrors.url && (
                              <label className='label'>
                                <span className='label-text-alt'>
                                  {validationErrors.url.message}
                                </span>
                              </label>
                            )}
                          </div>
                        </div>

                        {/* imageUrl */}
                        <div className='col-span-6 sm:col-span-4'>
                          <div className='form-control'>
                            <label className='label' htmlFor='imageUrl'>
                              <span className='label-text'>imageUrl</span>
                            </label>
                            <input
                              type='text'
                              defaultValue={dataMessages_by_pk?.messages_by_pk?.imageUrl}
                              {...register('imageUrl')}
                              placeholder='imageUrl...'
                              className={classnames('input input-bordered', {
                                'input-error': validationErrors.imageUrl,
                              })}
                            />
                            {validationErrors.imageUrl && (
                              <label className='label'>
                                <span className='label-text-alt'>
                                  {validationErrors.imageUrl.message}
                                </span>
                              </label>
                            )}
                          </div>
                        </div>

                        {/* publishedAt_date DATE */}
                        <div className='col-span-6 sm:col-span-4'>
                          <div className='form-control'>
                            <label className='label' htmlFor='publishedAt_date'>
                              <span className='label-text'>publishedAt_date</span>
                            </label>
                            <input
                              type='date'
                              defaultValue={dayjs(
                                dataMessages_by_pk?.messages_by_pk?.publishedAt
                              ).format('YYYY-MM-DD')}
                              {...register('publishedAt_date')}
                              placeholder='publishedAt_date...'
                              className={classnames('input input-bordered', {
                                'input-error': validationErrors.publishedAt_date,
                              })}
                            />
                            {validationErrors.publishedAt_date && (
                              <label className='label'>
                                <span className='label-text-alt'>
                                  {validationErrors.publishedAt_date.message}
                                </span>
                              </label>
                            )}
                          </div>
                        </div>

                        {/* publishedAt_time TIME */}
                        <div className='col-span-6 sm:col-span-4'>
                          <div className='form-control'>
                            <label className='label' htmlFor='publishedAt_time'>
                              <span className='label-text'>publishedAt_time</span>
                            </label>
                            <input
                              type='time'
                              defaultValue={dayjs(
                                dataMessages_by_pk?.messages_by_pk?.publishedAt
                              ).format('HH:mm')}
                              {...register('publishedAt_time')}
                              placeholder='publishedAt_time...'
                              className={classnames('input input-bordered', {
                                'input-error': validationErrors.publishedAt_time,
                              })}
                            />
                            {validationErrors.publishedAt_time && (
                              <label className='label'>
                                <span className='label-text-alt'>
                                  {validationErrors.publishedAt_time.message}
                                </span>
                              </label>
                            )}
                          </div>
                        </div>

                        <div className='flex justify-end'>
                          <button
                            type='button'
                            onClick={() => {
                              reset({
                                ...dataMessages_by_pk?.messages_by_pk,
                              })
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
