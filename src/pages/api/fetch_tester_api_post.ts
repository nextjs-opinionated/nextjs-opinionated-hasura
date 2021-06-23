import { NextApiRequest, NextApiResponse } from 'next'
import { ApiConfig } from '../../utils/typedFetch/ApiConfig'

// types
export interface Fetch_tester_api_post {
  input: {
    some_string: string
    divide_by: number
    force_error: boolean
  }
  output: {
    message: string
    division_result: number
  }
}

export const fetch_tester_api_post_Config: ApiConfig = {
  url: '/api/fetch_tester_api_post',
  method: 'post',
  responseType: 'json',
}

// api
export default function fetch_tester_api_post(req: NextApiRequest, res: NextApiResponse) {
  // input data
  const inputData = req.body as Fetch_tester_api_post['input']

  try {
    // force_error
    if (inputData.force_error === true) {
      throw new Error('SOME SERVER ERROR ON POST')
    }

    // process
    const result = 10 / inputData.divide_by
    const finalMessage = `Your string <${inputData.some_string}> has ${inputData.some_string.length} letters`

    // output data
    const output: Fetch_tester_api_post['output'] = {
      message: finalMessage,
      division_result: result,
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
