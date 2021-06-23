import { NextApiRequest, NextApiResponse } from 'next'

export type Fetch_tester_api_Input_Post = {
  some_string: string
  divide_by: number
  force_error: boolean
}

export type Fetch_tester_api_Output_Post = {
  message: string
  division_result: number
}

export const FETCH_TESTER_API_POST_URL = '/api/fetch_tester_api_post'

export default function fetch_tester_api_post(req: NextApiRequest, res: NextApiResponse) {
  // input data
  const inputData = req.body as Fetch_tester_api_Input_Post

  try {
    // force_error
    if (inputData.force_error === true) {
      throw new Error('SOME SERVER ERROR ON POST')
    }

    // process
    const result = 10 / inputData.divide_by
    const finalMessage = `Your string <${inputData.some_string}> has ${inputData.some_string.length} letters`

    // output data
    const output: Fetch_tester_api_Output_Post = {
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
