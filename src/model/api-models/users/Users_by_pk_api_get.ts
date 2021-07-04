import { Users_By_PkQuery } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Users_by_pk_api_get {
  input: {
    id: string | string[]
  }
  output: Users_By_PkQuery
}

export const users_by_pk_api_get_Config: ApiConfig = {
  url: '/api/users/users_by_pk_api_get',
  method: 'get',
  responseType: 'json',
}
