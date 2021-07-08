import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Generate_crud_api_post {
  input: {
    table_name: string
    table_id: string
  }
  output: {
    saved: boolean
    vars: {
      [key: string]: string
    }
  }
}

export const generate_crud_api_post_Config: ApiConfig = {
  url: '/api/code-generator/generate_crud_api_post',
  method: 'post',
  responseType: 'json',
}
