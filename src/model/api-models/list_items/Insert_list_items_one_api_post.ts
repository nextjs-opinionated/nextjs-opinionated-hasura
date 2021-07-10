import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Insert_list_items_one_api_post {
  input: {
    id: string
    title: string
    body: string
    url: string
    imageUrl: string
    publishedAt: string
    updated_at: string
  }
  output: {
    insert_list_items_one: {
      id: string
      title: string
      body: string
      url: string
      imageUrl: string
      publishedAt: string
      updated_at: string
    }
  }
}

export const insert_list_items_one_api_post_Config: ApiConfig = {
  url: '/api/list_items/insert_list_items_one_api_post',
  method: 'post',
  responseType: 'json',
}
