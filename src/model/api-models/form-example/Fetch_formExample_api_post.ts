import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Fetch_formExample_api_post {
  input: {
    email: string
    color_select: string
    toggle: boolean
    image?: File
    image_url: string
    color_input: string
  }
  output: {
    server_time: string
    email: string
    color_select: string
    toggle: boolean
    image?: File
    image_url: string
    color_input: string
  }
}

export const fetch_formExample_api_post_Config: ApiConfig = {
  url: '/api/form-example/formExample_api_post',
  method: 'post',
  responseType: 'json',
}
