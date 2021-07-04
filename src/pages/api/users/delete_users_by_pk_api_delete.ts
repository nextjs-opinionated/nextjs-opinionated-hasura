import { withSentry } from '@sentry/nextjs'
import { NextApiRequest, NextApiResponse } from 'next'
import { Delete_users_by_pk_api_delete } from '../../../model/api-models/users/Delete_users_by_pk_api_delete'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { Roles_Enum } from '../../../graphql/generated'

export default withSentry(
  logMiddleware(
    withApiAuthRequired(async function delete_users_by_pk_api_delete(
      req: NextApiRequest,
      res: NextApiResponse
    ) {
      // check user's admin role
      const session = getSession(req, res)
      if (session?.user.role !== Roles_Enum.Admin) {
        res.status(HttpStatusCode.FORBIDDEN_403).end(`your role is forbidden`)
      }

      // check method
      if (req.method !== 'DELETE') {
        res.setHeader('Allow', ['DELETE'])
        res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
      }

      // input data
      const inputData = req.query as Delete_users_by_pk_api_delete['input']

      // process
      const data: Delete_users_by_pk_api_delete['output'] = await new GqlSdkHelper()
        .getSdk()
        .delete_users_by_pk({ id: inputData.id })

      // output data
      res.status(HttpStatusCode.OK_200).json(data)
    })
  )
)
