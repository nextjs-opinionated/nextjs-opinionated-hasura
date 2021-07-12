import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { Roles_Enum } from '../../../graphql/generated'
import {
  Users_by_pk_api_get,
  users_by_pk_api_get_Config,
} from '../../../model/api-models/users/Users_by_pk_api_get'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

export default withSentry(
  logMiddleware(
    withApiAuthRequired(async function API(req: NextApiRequest, res: NextApiResponse) {
      // check user's admin role
      const session = getSession(req, res)
      if (session?.user.role !== Roles_Enum.Admin) {
        res.status(HttpStatusCode.FORBIDDEN_403).end(`your role is forbidden`)
        return
      }

      // check method
      if (req.method !== users_by_pk_api_get_Config.method.toUpperCase()) {
        res.setHeader('Allow', [users_by_pk_api_get_Config.method.toUpperCase()])
        res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
      }

      // input data
      const inputData = req.query as Users_by_pk_api_get['input']

      // process
      const data: Users_by_pk_api_get['output'] = await new GqlSdkHelper().getSdk().users_by_pk({
        id: String(inputData.id),
      })

      // output data
      res.status(HttpStatusCode.OK_200).json(data)
    })
  )
)
