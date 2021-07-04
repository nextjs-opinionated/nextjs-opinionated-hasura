import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { Current_user_role_api_get } from '../../../model/api-models/users/Current_user_role_api_get'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { Roles_Enum } from '../../../graphql/generated'

export default withSentry(
  logMiddleware(
    withApiAuthRequired(async function current_user_role_api_get(
      req: NextApiRequest,
      res: NextApiResponse
    ) {
      // check method
      if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET'])
        res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
      }

      // process
      const session = getSession(req, res)
      console.log('--  session.user: ', session?.user)
      const data = await new GqlSdkHelper().getSdk().users_by_pk({ id: session?.user.sub })

      const role: Current_user_role_api_get['output'] = data?.users_by_pk?.role as Roles_Enum

      // output data
      res.status(HttpStatusCode.OK_200).json(role)
    })
  )
)
