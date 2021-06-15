import { GetStaticProps } from 'next'
import { Layout } from '../../components/Layout/Layout'
import { Roles_Enum, Users } from '../../graphql/generated'
import GqlSdkHelper from '../../utils/GqlSdkHelper'
import dayjs from 'dayjs'

type Props = {
  users: Users[]
}

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1522196772883-393d879eb14d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=891&q=80'

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

export default function Page({ users }: Props) {
  return (
    <Layout>
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
                            src={user.image ? user.image : DEFAULT_IMG}
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
                    <button className='btn btn-ghost btn-xs'>details</button>
                  </th>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { users } = await new GqlSdkHelper().getSdk().users()

  return { props: { users }, revalidate: 60 }
}
