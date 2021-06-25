import { NextApiRequest, NextApiResponse } from 'next'
import _ from 'lodash'
import { Fetch_tester_api_get } from '../../../model/api-models/typed-fetch-examples/Fetch_tester_api_get'

export default async function fetch_tester_api_get(req: NextApiRequest, res: NextApiResponse) {
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

    await new Promise(function (resolve) {
      setTimeout(resolve, 1000)
    })

    // output data
    const output: Fetch_tester_api_get['output'] = {
      message: finalMessage,
      division_result: result,
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
