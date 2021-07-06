import { Layout } from '../../components/Layout/Layout'
import { LinksList } from '../../model/site/LinksList'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { getAllDocs, MetaTypes } from '../../utils/docs'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async () => {
  const docs = getAllDocs()

  return {
    props: { docs },
  }
}

type DocsProps = {
  docs: MetaTypes[]
}

export default function Docs({ docs }: DocsProps) {
  const router = useRouter()

  return (
    <Layout
      title={
        <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
          <div className='text-base font-bold'>Documentation</div>
          <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
        </div>
      }
      menuItems={Object.values(LinksList)}
    >
      <main className='md:mx-8'>
        <h2 className='my-10 text-xl'>Documentation about the boilerplate</h2>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 grid-flow'>
          {docs?.length > 0 &&
            docs.map((item) => (
              <div key={item.slug} className='card bordered'>
                <figure className='bg-base-200'>
                  <img
                    src={
                      item.meta.image_url ||
                      'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
                    }
                    className='object-contain w-full h-48 md:object-scale-down'
                  />
                </figure>
                <div className='card-body'>
                  <div className='flex flex-col justify-between h-full'>
                    <div className='my-1'>
                      {item.meta.date && <p>{dayjs(item.meta.date).format('YYYY-MM-DD')}</p>}
                      <h2 className='card-title'>
                        <Link href={`/docs/${item.slug}`}>
                          <a className='underline link-hover'>{item.meta.title}</a>
                        </Link>
                      </h2>
                    </div>
                    <div className='card-actions'>
                      <button
                        className='btn btn-sm btn-secondary'
                        onClick={() => router.push(`/docs/${item.slug}`)}
                      >
                        Visitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
    </Layout>
  )
}
