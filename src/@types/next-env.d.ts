// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    user: {
      name?: string | null
      email?: string | null
      image?: string | null
      sub?: string | null // added
    }
  }
}
