import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import { Delete_users_by_pk_api_delete } from '../../../model/api-models/users/Delete_users_by_pk_api_delete'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { isAdmin } from '../../../utils/middleware/isAdmin'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

export default isAdmin(async function delete_users_by_pk_api_delete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check method
  if (req.method !== 'DELETE') {
    res.setHeader('Allow', ['DELETE'])
    res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
  }

  // input data
  const inputData = req.query as Delete_users_by_pk_api_delete['input']

  try {
    // process
    const data: Delete_users_by_pk_api_delete['output'] = await new GqlSdkHelper()
      .getSdk()
      .delete_users_by_pk({ id: _.toNumber(inputData.id) })

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  } catch (error) {
    // TODO: log on log service
    console.error(error)

    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR_500).json({
      message: error.message,
      stack: error.stack,
    })
  }
})
