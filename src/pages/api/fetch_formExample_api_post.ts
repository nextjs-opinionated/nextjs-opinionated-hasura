import { NextApiRequest, NextApiResponse } from 'next'
import { FormExampleValidationSchema } from '../../model/schemas/FormExampleValidationSchema'

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

    FormExampleValidationSchema.parse(inputData)

    // output data
    const output: Fetch_formExample_api_Output_Post = {
      ...inputData,
      server_time: new Date().toLocaleTimeString(),
    }
    res.status(200).json(output)
  } catch (error) {
    // TODO: log on log service
    console.error(error)

    res.status(500).json({
      message: error.message,
      stack: error.stack,
    })
  }
}
