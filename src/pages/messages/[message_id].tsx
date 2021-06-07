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
import { FormInput } from '../../components/FormInput/FormInput'

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
                        <FormInput
                          label='Title:'
                          name='title'
                          register={register}
                          defaultValue={dataMessages_by_pk?.messages_by_pk?.title}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Body:'
                          name='body'
                          register={register}
                          defaultValue={dataMessages_by_pk?.messages_by_pk?.body}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='URL:'
                          name='url'
                          register={register}
                          defaultValue={dataMessages_by_pk?.messages_by_pk?.url}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Image URL:'
                          name='imageUrl'
                          register={register}
                          defaultValue={dataMessages_by_pk?.messages_by_pk?.imageUrl}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Publish Date:'
                          name='publishedAt_date'
                          register={register}
                          defaultValue={dayjs(
                            dataMessages_by_pk?.messages_by_pk?.publishedAt
                          ).format('YYYY-MM-DD')}
                          {...register('publishedAt_date')}
                          validationErrors={validationErrors}
                        />

                        <FormInput
                          label='Publish Time:'
                          name='publishedAt_time'
                          register={register}
                          defaultValue={dayjs(
                            dataMessages_by_pk?.messages_by_pk?.publishedAt
                          ).format('HH:mm')}
                          {...register('publishedAt_time')}
                          validationErrors={validationErrors}
                        />

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
