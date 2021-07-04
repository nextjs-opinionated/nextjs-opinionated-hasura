import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { Messages_api_get } from '../../../model/api-models/messages/Messages_api_get'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { withSentry } from '@sentry/nextjs'
import { logMiddleware } from '../../../utils/middleware/logMiddleware'

export default withSentry(
  logMiddleware(async function API(req: NextApiRequest, res: NextApiResponse) {
    // check method
    if (req.method !== 'GET') {
      res.setHeader('Allow', ['GET'])
      res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
    }

    // process
    const data: Messages_api_get['output'] = await new GqlSdkHelper().getSdk().messages()

    // output data
    res.status(HttpStatusCode.OK_200).json(data)
  })
)
