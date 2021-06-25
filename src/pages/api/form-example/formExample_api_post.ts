import { NextApiRequest, NextApiResponse } from 'next'
import { FormExampleValidationSchema } from '../../../model/schemas/FormExampleValidationSchema'
import { HttpStatusCode } from '../../../utils/typedFetch/HttpStatusCode'
import { Fetch_formExample_api_post } from '../../../model/api-models/form-example/Fetch_formExample_api_post'

export default function fetch_formExample_api_post(req: NextApiRequest, res: NextApiResponse) {
  // input data
  const inputData = req.body as Fetch_formExample_api_post['input']
  try {
    // process

    try {
      // server validation (VALIDATIONS)
      FormExampleValidationSchema.parse(req.body)
    } catch (error) {
      console.error({ msg: 'validation:', error })
      res.status(HttpStatusCode.BAD_REQUEST_400).json({
        message: error.message,
        stack: error.stack,
        validationError: error?.errors,
      })
    }

    // output data
    const output: Fetch_formExample_api_post['output'] = {
      ...inputData,
      server_time: new Date().toLocaleTimeString(),
    }
    res.status(HttpStatusCode.OK_200).json(output)
  } catch (error) {
    // TODO: log on log service
    console.error(error)

    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR_500).json({
      message: error.message,
      stack: error.stack,
    })
  }
}
