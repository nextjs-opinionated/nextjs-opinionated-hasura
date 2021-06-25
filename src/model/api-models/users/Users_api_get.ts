import { UsersQuery } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'

export interface Users_api_get {
  input: {
    limit: string
  }
  output: UsersQuery
}

export const users_api_get_Config: ApiConfig = {
  url: '/api/users/users_api_get',
  method: 'get',
  responseType: 'json',
}
