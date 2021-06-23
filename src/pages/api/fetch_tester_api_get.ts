import { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'
import { ApiConfig } from '../../utils/typedFetch/ApiConfig'

// types
export interface Fetch_tester_api_get {
  input: {
    some_string: string
    divide_by: string
    force_error: string
  }
  output: {
    message: string
    division_result: number
  }
}

export const fetch_tester_api_get_Config: ApiConfig = {
  url: '/api/fetch_tester_api_get',
  method: 'get',
  responseType: 'json',
}

// api
export default function fetch_tester_api_get(req: NextApiRequest, res: NextApiResponse) {
  // input data
  const inputData = req.query as Fetch_tester_api_get['input']

  try {
    // force_error
    if (inputData.force_error === 'true') {
      throw new Error('SOME SERVER ERROR ON GET')
    }

    // process
    const result = 10 / _.toNumber(inputData.divide_by)
    const finalMessage = `Your string <${inputData.some_string}> has ${inputData.some_string.length} letters`

    // output data
    const output: Fetch_tester_api_get['output'] = {
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
