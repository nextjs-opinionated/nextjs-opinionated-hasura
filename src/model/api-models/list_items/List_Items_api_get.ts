import { List_ItemsQuery } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface List_Item_api_get {
  input: {
    limit: string
    current_page: string
  }
  output: List_ItemsQuery
}

export const list_items_api_get_Config: ApiConfig = {
  url: '/api/list_items/list_items_api_get',
  method: 'get',
  responseType: 'json',
}
