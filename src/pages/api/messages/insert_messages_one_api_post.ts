import { NextApiRequest, NextApiResponse } from 'next'
import GqlSdkHelper from '../../../utils/GqlSdkHelper'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { Messages_Update_Column } from '../../../graphql/generated'
import { MessageValidationSchema } from '../../../model/schemas/MessageValidationSchema'
import { Insert_messages_one_api_post } from '../../../model/api-models/messages/Insert_messages_one_api_post'

export default async function insert_messages_one_api_post(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // check method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    res.status(HttpStatusCode.METHOD_NOT_ALLOWED_405).end(`Method ${req.method} Not Allowed`)
  }

  // input data
  const inputData = req.body as Insert_messages_one_api_post['input']

  // server validations
  try {
    MessageValidationSchema.parse(inputData)
  } catch (error) {
    if (error?.errors) {
      res.status(HttpStatusCode.BAD_REQUEST_400).json(error.errors)
      return
    }
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR_500).json(error)
    return
  }

  try {
    // process
    const data: Insert_messages_one_api_post['output'] = await new GqlSdkHelper()
      .getSdk()
      .insert_messages_one({
        message: inputData,
        update_columns: Object.values(Messages_Update_Column),
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
