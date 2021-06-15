import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

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
    async redirect(_, baseUrl) {
      return Promise.resolve(baseUrl)
    },
    // async session(session, user) {
    //   console.log({ user, session })
    //   return session },
    async jwt(token, _, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }

      return token
    },
    async session(session, token) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
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
