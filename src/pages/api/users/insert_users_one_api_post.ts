import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { Insert_users_one_api_post } from '../../../model/api-models/users/Insert_users_one_api_post'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { Roles_Enum } from '../../../graphql/generated'

export default withSentry(
  logMiddleware(
    withApiAuthRequired(async function insert_users_one_api_post(
      req: NextApiRequest,
      res: NextApiResponse
    ) {
      // check user's admin role
      const session = getSession(req, res)
      if (session.user.role !== Roles_Enum.Admin) {
        res.status(HttpStatusCode.FORBIDDEN_403).end(`your role is forbidden`)
      }

      // check method
      if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST'])
        res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
      }

      // input data
      const inputData = req.body as Insert_users_one_api_post['input']

      // process
      const data: Insert_users_one_api_post['output'] = await new GqlSdkHelper()
        .getSdk()
        .insert_users_one({ user: inputData })

      // output data
      res.status(HttpStatusCode.OK_200).json(data)
    })
  )
)
