import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { Roles_Enum } from '../../../graphql/generated'

import GqlSdkHelper from '../../../utils/GqlSdkHelper'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],

  secret: process.env.JWT_SECRET,

  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 24hr
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    secret: process.env.JWT_SECRET,
    encryption: true,
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/auth/login', // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn(user, account, profile) {
    //   // console.log({ user, account, profile })
    //   return true
    // },
    async redirect(_, baseUrl) {
      return Promise.resolve(baseUrl)
    },
    async jwt(token, user, account) {
      if (user) {
        const { users } = await new GqlSdkHelper()
          .getSdk()
          .users_by_oauth_id({ oauth_id: String(user.id) })
        if (users.length > 0) {
          token.role = users[0].role
          token.email = users[0].email
        } else {
          // new user
          const userInput = {
            name: user?.name,
            email: user?.email,
            image: user?.image,
            role: Roles_Enum.User,
            oauth_id: String(user?.id),
          }
          await new GqlSdkHelper().getSdk().insert_users_one({ user: userInput })
          token.role = Roles_Enum.User // default user
        }
      }

      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }

      return token
    },
    async session(session, token) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
      }

      if (token?.email) {
        session.user.email = token.email
      }

      if (token?.role) {
        session.user.role = token.role
      }

      session.accessToken = token?.accessToken
      session.user.sub = String(token?.sub)
      return session
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  theme: 'light',

  debug: false,
})
