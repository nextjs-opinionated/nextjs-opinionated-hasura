import { NextApiRequest, NextApiResponse } from 'next'
import { FormExampleValidationSchema } from '../../model/schemas/FormExampleValidationSchema'
import { ApiConfig } from '../../utils/typedFetch/ApiConfig'
import { HttpStatusCode } from '../../utils/typedFetch/HttpStatusCode'

// types
export interface Fetch_formExample_api_post {
  input: {
    email: string
    color_select: string
    toggle: boolean
    image?: File
    image_url: string
    color_input: string
  }
  output: {
    server_time: string
    email: string
    color_select: string
    toggle: boolean
    image?: File
    image_url: string
    color_input: string
  }
}

export const fetch_formExample_api_post_Config: ApiConfig = {
  url: '/api/formExample_api_post',
  method: 'post',
  responseType: 'json',
}

// api
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
      if (error?.errors) {
        res.status(HttpStatusCode.BAD_REQUEST_400).json({
          message: error.message,
          stack: error.stack,
          validationError: error?.errors,
        })
      }
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
