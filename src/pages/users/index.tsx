import { Layout } from '../../components/Layout/Layout'
import { Roles_Enum } from '../../graphql/generated'
import Link from 'next/link'
import { getInitialNameAvatar } from '../../utils/getInitialNameAvatar'
import { LinksList } from '../../model/site/LinksList'
import { useQuery } from 'react-query'
import { Users_api_get, users_api_get_Config } from '../../model/api-models/users/Users_api_get'
import typedFetch from '../../utils/typedFetch/typedFetch'
import React, { useState } from 'react'
import { Table } from '../../components/Table/Table'

const handleBadgeRole = (role: Roles_Enum) => {
  switch (role) {
    case Roles_Enum.Admin: {
      return <span className='badge badge-error'>{role}</span>
    }
    case Roles_Enum.User: {
      return <span className='badge badge-info'>{role}</span>
    }
    default: {
      return <span className='badge badge-success'>Sem função</span>
    }
  }
}

export default function Page() {
  const [current_page, current_pageSet] = useState(1)
  const ITEMS_PER_PAGE = 6

  const { data, isLoading, error } = useQuery('users_api_get', async () => {
    const resultObj = await typedFetch<Users_api_get['input'], Users_api_get['output']>({
      ...users_api_get_Config,
      data: { limit: ITEMS_PER_PAGE.toString(), current_page: current_page.toString() },
    })
    return resultObj.data
  })

  if (error) {
    return <p>ERROR {error}</p>
  }

  if (isLoading) {
    return <button className='btn btn-sm btn-ghost loading'>loading</button>
  }

  return (
    <Layout
      title={
        <div className='flex items-baseline flex-grow px-2 mx-2 space-x-3'>
          <div className='text-base font-bold'>Users</div>
          <div className='text-sm'>{process.env.NEXT_PUBLIC_SITE_NAME}</div>
        </div>
      }
      menuItems={Object.values(LinksList)}
    >
      <Table
        pageSize={ITEMS_PER_PAGE}
        totalItems={data?.users_aggregate?.aggregate?.count}
        currentPage={current_page}
        onPageSet={current_pageSet}
        className='table-zebra'
        data={data?.users || []}
        fields={{
          Título: (item) => (
            <Link href={`/users/${item.id}`}>
              <a title={`Editar os dados de ${item.name}`}>
                <div className='avatar'>
                  <div className='w-12 h-12 mask mask-squircle'>
                    <img
                      src={item.image ? item.image : getInitialNameAvatar(item.name)}
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
              </a>
            </Link>
          ),
          'E-mail/Nome': (item) => item.email || item.name,
          'Função ': (item) => handleBadgeRole(item.role as Roles_Enum),
        }}
      />
    </Layout>
  )
}
