import { handleAuth, handleCallback, handleLogin, handleLogout } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

// from: https://github.com/auth0/nextjs-auth0/issues/108#issuecomment-800059278

const audience = process.env.AUTH0_AUDIENCE
const scope = process.env.AUTH0_SCOPE

function getUrls({ req }) {
  const { host } = req.headers
  const protocol = process.env.VERCEL_URL ? 'https' : 'http'
  const redirectUri = `${protocol}://${host}/api/auth/callback`
  const returnTo = `${protocol}://${host}`
  return {
    redirectUri,
    returnTo,
  }
}

export default handleAuth({
  async callback(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { redirectUri } = getUrls({ req })
      await handleCallback(req, res, { redirectUri })
    } catch (error) {
      res.status(error.status || 500).end(error.message)
    }
  },

  async login(req: NextApiRequest, res: NextApiResponse) {
    try {
      const { redirectUri, returnTo } = getUrls({ req })

      await handleLogin(req, res, {
        authorizationParams: {
          audience,
          scope,
          redirectUri,
        },
        returnTo,
      })
    } catch (error) {
      res.status(error.status || 400).end(error.message)
    }
  },

  async logout(req: NextApiRequest, res: NextApiResponse) {
    const { returnTo } = getUrls({ req })
    await handleLogout(req, res, {
      returnTo,
    })
  },
})
