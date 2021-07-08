import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface List_items_by_pk_api_get {
  input: {
    list_item_id: string | string[]
  }
  output: {
    list_items_by_pk: {
      body?: string
      created_at?: string
      id?: number
      imageUrl?: string
      publishedAt?: string
      title?: string
      updated_at?: string
      url?: string
    }
  }
}

export const list_items_by_pk_api_get_Config: ApiConfig = {
  url: '/api/list-items/list_items_by_pk_api_get',
  method: 'get',
  responseType: 'json',
}
