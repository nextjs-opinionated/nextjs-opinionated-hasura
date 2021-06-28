import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import { Users_by_pk_api_get } from '../../../model/api-models/users/Users_by_pk_api_get'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

export default async function API(req: NextApiRequest, res: NextApiResponse) {
  // check method
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
  }

  // input data
  const inputData = req.query as Users_by_pk_api_get['input']

  try {
    // process
    const data: Users_by_pk_api_get['output'] = await new GqlSdkHelper().getSdk().users_by_pk({
      id: _.toNumber(inputData.user_id),
    })

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
