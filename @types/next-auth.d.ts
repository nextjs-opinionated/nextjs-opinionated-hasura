// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */

  interface User {
    id: number
    name: string
    email: string
    image: string
  }

  interface Session {
    user: {
      id: number
      name: string
      email: string
      image: string
      role?: string | unknown
    }
  }
  interface JWT {
    name: string
    email: string
    image: unknown
    picture: unknown
    role?: string
    sub: unknown
  }

}