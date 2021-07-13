import { handleAuth, handleCallback, handleLogin, handleLogout } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { Roles_Enum, Users_Update_Column } from '../../../graphql/generated'
import { Insert_users_one_api_post } from '../../../model/api-models/users/Insert_users_one_api_post'
import { Users_by_pk_api_get } from '../../../model/api-models/users/Users_by_pk_api_get'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'

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
      await handleCallback(req, res, {
        redirectUri,
        afterCallback: async (req, res, session /* , state */) => {
          const userResultObj: Users_by_pk_api_get['output'] = await new GqlSdkHelper()
            .getSdk()
            .users_by_pk({
              id: session.user.sub,
            })

          // get user ROLE
          // check if users exists and get current role
          if (userResultObj?.users_by_pk?.role) {
            // return existing user
            session.user.role = userResultObj?.users_by_pk?.role as Roles_Enum
            return session
          } else {
            // save new user
            const inputData = {
              id: session.user.sub,
              name: session.user.name,
              email: session.user.email,
              image: session.user.picture,
              role: Roles_Enum.User,
            } as Insert_users_one_api_post['input']
            const insertResultObj: Insert_users_one_api_post['output'] = await new GqlSdkHelper()
              .getSdk()
              .insert_users_one({
                object: inputData,
                update_columns: Object.values(Users_Update_Column),
              })

            session.user.role = insertResultObj.insert_users_one?.role
            return session
          }
        },
      })
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
