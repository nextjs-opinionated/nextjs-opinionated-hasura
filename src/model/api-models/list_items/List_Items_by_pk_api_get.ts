import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface List_items_by_pk_api_get {
  input: {
    list_item_id: string | string[]
  }
  output: {
    list_items_by_pk:
      | {
          id: string
          title: string
          body: string
          imageUrl: string
          publishedAt: string
          url: string
          updated_at: string
        }
      | undefined
  }
}

export const list_items_by_pk_api_get_Config: ApiConfig = {
  url: '/api/list_items/list_items_by_pk_api_get',
  method: 'get',
  responseType: 'json',
}
