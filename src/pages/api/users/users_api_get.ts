import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { Users_api_get } from '../../../model/api-models/users/Users_api_get'
import _ from 'lodash'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

export default async function users_api_get(req: NextApiRequest, res: NextApiResponse) {
  // check method
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
  }

  // input data
  const inputData = req.query as Users_api_get['input']

  try {
    // process
    const data: Users_api_get['output'] = await new GqlSdkHelper()
      .getSdk()
      .users({ limit: _.toNumber(inputData.limit) })

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
}
