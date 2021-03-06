import { List_Items_By_PkQuery } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface List_items_by_pk_api_get {
  input: {
    id: string | string[]
  }
  output: List_Items_By_PkQuery
}

export const list_items_by_pk_api_get_Config: ApiConfig = {
  url: '/api/list_items/list_items_by_pk_api_get',
  method: 'get',
  responseType: 'json',
}
