import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Generate_component_api_post {
  input: {
    name: string
  }
  output: {
    saved: boolean
  }
}

export const generate_component_api_post_Config: ApiConfig = {
  url: '/api/code-generator/generate_component_api_post',
  method: 'post',
  responseType: 'json',
}
