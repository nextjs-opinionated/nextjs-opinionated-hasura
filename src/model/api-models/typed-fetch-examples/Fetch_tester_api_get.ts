import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

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
  url: '/api/typed-fetch-examples/fetch_tester_api_get',
  method: 'get',
  responseType: 'json',
}
