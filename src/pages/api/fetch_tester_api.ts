import { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'

export type Fetch_tester_api_Input =
  // POST
  | {
      some_string: string
      divide_by: number
      force_error?: boolean
    }
  // GET
  | {
      [key: string]: string | string[]
    }

export type Fetch_tester_api_Output = {
  message: string
  division_result: number
}

export default function fetch_tester_api(req: NextApiRequest, res: NextApiResponse) {
  // input data
  let inputData: Fetch_tester_api_Input = null

  if (req.method === 'GET') {
    inputData = req.query
  } else if (req.method === 'POST') {
    inputData = req.body as Fetch_tester_api_Input
  }

  // process
  try {
    const result = 10 / _.toNumber(inputData.divide_by)
    const finalMessage = `Your string <${inputData.some_string}> has ${inputData.some_string.length} letters`

    if (inputData?.force_error === 'true' || inputData?.force_error === true) {
      throw new Error('SOME SERVER ERROR')
    }

    // output data
    res.status(200).json({
      message: finalMessage,
      division_result: result,
    } as Fetch_tester_api_Output)
  } catch (error) {
    // TODO: log on log service
    console.error(error)
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    })
  }
}
