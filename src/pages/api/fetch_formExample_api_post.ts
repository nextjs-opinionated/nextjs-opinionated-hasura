import { NextApiRequest, NextApiResponse } from 'next'
import { FormExampleValidationSchema } from '../../model/schemas/FormExampleValidationSchema'
import { HttpStatusCode } from '../../utils/HttpStatusCode'

export type Fetch_formExample_api_Input_Post = {
  email: string
  color_select: string
  toggle: boolean
  image?: File
  image_url: string
  color_input: string
}

export type Fetch_formExample_api_Output_Post = {
  server_time: string
  email: string
  color_select: string
  toggle: boolean
  image?: File
  image_url: string
  color_input: string
}

export const FETCH_FORMEXAMPLE_API_POST_URL = '/api/fetch_formExample_api_post'

export default function fetch_formExample_api_post(req: NextApiRequest, res: NextApiResponse) {
  // input data
  const inputData = req.body as Fetch_formExample_api_Input_Post
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
    const output: Fetch_formExample_api_Output_Post = {
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
