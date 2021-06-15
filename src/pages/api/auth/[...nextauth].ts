import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import Adapters from 'next-auth/adapters'

import Models from '../../../model/auth'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER,
        port: Number(process.env.EMAIL_PORT),
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: {
    ssl: true,
    url: process.env.DB_URL,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  secret: process.env.JWT_SECRET,

  adapter: Adapters.TypeORM.Adapter(
    // TODO: decide to connect the hasura 'role' itself or we do that
    process.env.DB_URL,
    {
      models: {
        ...Adapters.TypeORM.Models,
        User: Models.User,
      },
    }
  ),

  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 24hr
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    secret: process.env.JWT_SECRET,
    // A secret to use for key generation (you should set this explicitly)
    // secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
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
    async redirect(url) {
      return Promise.resolve(url)
    },
    // async session(session, user) {
    //   console.log({ user, session })
    //   return session },
    // async jwt(token, user, account, profile, isNewUser) {
    //   console.log({ token, user, account })
    //   return token
    // }
    async jwt(token, user, account, _, __) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      if (user?.role) {
        token.role = user.role
      }
      return token
    },
    async session(session, token) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
      }
      if (token?.role) {
        session.user.role = token.role
      }
      return session
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  theme: 'light',

  debug: false,
})