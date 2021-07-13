import { z } from 'zod'
import { Insert_List_Items_OneMutation } from '../../../graphql/generated'
import { ApiConfig } from '../../../utils/typedFetch/ApiConfig'
import { List_items_validation_schema } from '../../schemas/List_items_validation_schema'

export interface Insert_list_items_one_api_post {
  input: {
    id: string
    body?: string | null | undefined
    imageUrl?: string | null | undefined
    publishedAt?: string | null | undefined
    publishedAt_date?: string | null | undefined
    publishedAt_time?: string | null | undefined
    title: string
    url: string
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
