import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

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
  url: '/api/typed-fetch-examples/fetch_tester_api_post',
  method: 'post',
  responseType: 'json',
}
