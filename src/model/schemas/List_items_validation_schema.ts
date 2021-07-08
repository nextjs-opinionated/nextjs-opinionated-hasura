import * as z from 'zod'
import { validate as uuidValidate } from 'uuid'

export const List_items_validation_schema = z.object({
  id: z.any().refine(
    (value) => {
      // optional if is on insert mode
      if (!value || value?.length === 0) {
        return true
      }
      return uuidValidate(value)
    },
    {
      message: 'id must be a valid uuid',
    }
  ),
  title: z.string().nonempty(),
  body: z.string().nullish(),
  url: z.string().nonempty(),
  imageUrl: z.string().nullish(),
  publishedAt: z.string().nullish(),
  publishedAt_date: z.string().nullish(),
  publishedAt_time: z.string().nullish(),
})
