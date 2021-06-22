import { Layout } from '../../components/Layout/Layout'
import { Roles_Enum, Users } from '../../graphql/generated'
import dayjs from 'dayjs'
import Link from 'next/link'
import { getInitialNameAvatar } from '../../utils/getInitialNameAvatar'
import useSWRFetch from '../../utils/useSWRFetch'
import { LinksList } from '../../model/site/LinksList'

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
  const { data: users, loading: userLoading, error: userError } = useSWRFetch<Users[]>('/api/users')

  if (userError) {
    return <p>ERROR {userError}</p>
  }

  if (userLoading) {
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
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Função</th>
            </tr>
          </thead>
          {users.length > 0 &&
            users.map((user) => (
              <tbody key={user.id}>
                <tr>
                  <td>
                    <div className='flex items-center space-x-3'>
                      <div className='avatar'>
                        <div className='w-12 h-12 mask mask-squircle'>
                          <img
                            src={user.image ? user.image : getInitialNameAvatar(user.name)}
                            alt='Avatar Tailwind CSS Component'
                          />
                        </div>
                      </div>
                      <div>
                        <div className='font-bold'>{user.name}</div>
                        <div className='text-sm opacity-50'>
                          {dayjs(user.created_at).format('DD-MM-YYYY')}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{handleBadgeRole(user.role)}</td>
                  <th>
                    <Link href={`/users/${user.id}`}>
                      <button className='btn btn-ghost btn-xs'>details</button>
                    </Link>
                  </th>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </Layout>
  )
}
