import { NextApiRequest, NextApiResponse } from 'next'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import {
  Delete_users_by_pk_api_delete,
  delete_users_by_pk_api_delete_Config,
} from '../../../model/api-models/users/Delete_users_by_pk_api_delete'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { Roles_Enum } from '../../../graphql/generated'

export default withSentry(
  logMiddleware(
    withApiAuthRequired(async function insert_users_one_api_post(
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
      if (req.method !== delete_users_by_pk_api_delete_Config.method.toUpperCase()) {
        res.setHeader('Allow', [delete_users_by_pk_api_delete_Config.method.toUpperCase()])
        res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
        return
      }

      // input data
      const inputData = req.query as Delete_users_by_pk_api_delete['input']

      const data: Delete_users_by_pk_api_delete['output'] = await new GqlSdkHelper()
        .getSdk()
        .delete_users_by_pk({
          id: inputData.id,
        })

      // output data
      res.status(HttpStatusCode.OK_200).json(data)
    })
  )
)
