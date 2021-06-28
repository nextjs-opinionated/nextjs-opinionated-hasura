import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { isAdmin } from '../../../utils/middleware/isAdmin'
import { Insert_users_one_api_post } from '../../../model/api-models/users/Insert_users_one_api_post'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'

export default isAdmin(async function insert_users_one_api_post(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
  }

  // input data
  const inputData = req.body as Insert_users_one_api_post['input']

  try {
    // process
    const data: Insert_users_one_api_post['output'] = await new GqlSdkHelper()
      .getSdk()
      .insert_users_one({ user: inputData })

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
