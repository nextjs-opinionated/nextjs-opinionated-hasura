import { z } from 'zod'
import { Insert_Users_OneMutation } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'
import { UserValidationSchema } from '../../schemas/UserValidationSchema'

export interface Insert_users_one_api_post {
  input: z.infer<typeof UserValidationSchema>
  output: Insert_Users_OneMutation
}

export const insert_users_one_api_post_Config: ApiConfig = {
  url: '/api/users/insert_users_one_api_post',
  method: 'post',
  responseType: 'json',
}
