import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface List_Item_api_get {
  input: {
    limit: string
    current_page: string
  }
  output: {
    list_items: {
      id: string
      title: string
      body: string
      imageUrl: string
      publishedAt: string
      url: string
      updated_at: string
    }[]
    list_items_aggregate: {
      aggregate: {
        count: number
      }
    }
  }
}

export const list_items_api_get_Config: ApiConfig = {
  url: '/api/list-items/list_items_api_get',
  method: 'get',
  responseType: 'json',
}
