import _ from 'lodash'
import { NextApiRequest, NextApiResponse } from 'next'
import { Messages_by_pk_api_get } from '../../../model/api-models/messages/Messages_by_pk_api_get'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'

export default async function API(req: NextApiRequest, res: NextApiResponse) {
  // check method
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  // input data
  const inputData = req.query as Messages_by_pk_api_get['input']

  try {
    // process
    const data: Messages_by_pk_api_get['output'] = await new GqlSdkHelper()
      .getSdk()
      .messages_by_pk({
        id: _.toNumber(inputData.message_id),
      })

    // output data
    res.status(200).json(data)
  } catch (error) {
    // TODO: log on log service
    console.error(error)

    res.status(500).json({
      message: error.message,
      stack: error.stack,
    })
  }
}
