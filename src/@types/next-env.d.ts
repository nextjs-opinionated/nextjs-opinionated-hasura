// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'
import { Roles_Enum } from '../model/site/RoleList'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface User {
    sub?: string | null
    name?: string | null
    email?: string | null
    image?: string | null
    role?: Roles_Enum | null
  }

  interface Session {
    user: User
    accessToken?: string | null
  }

  interface JWT {
    name?: string | null
    email?: string | null
    image?: string | null
    picture?: string | null
    role?: Roles_Enum | null
    sub?: string | null
    accessToken?: string | null
  }
}
