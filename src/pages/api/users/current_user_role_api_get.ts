import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import {
  Current_user_role_api_get,
  current_user_role_api_get_Config,
} from '../../../model/api-models/users/Current_user_role_api_get'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { Roles_Enum } from '../../../graphql/generated'

export default withSentry(
  logMiddleware(
    withApiAuthRequired(async function current_user_role_api_get(
      req: NextApiRequest,
      res: NextApiResponse
    ) {
      // check user's admin role
      const session = getSession(req, res)
      if (session?.user.role !== Roles_Enum.Admin) {
        res.status(HttpStatusCode.FORBIDDEN_403).end(`your role is forbidden`)
        return
      }
      // check method
      if (req.method !== current_user_role_api_get_Config.method.toUpperCase()) {
        res.setHeader('Allow', [current_user_role_api_get_Config.method.toUpperCase()])
        res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
        return
      }

      // process
      const data = await new GqlSdkHelper().getSdk().users_by_pk({ id: session?.user.sub })

      const role: Current_user_role_api_get['output'] = data?.users_by_pk?.role as Roles_Enum

      // output data
      res.status(HttpStatusCode.OK_200).json(role)
    })
  )
)
