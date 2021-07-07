import _ from 'lodash'
import * as z from 'zod'

export const MessagesValidationSchema = z.object({
  id: z.any().refine(
    (value) => {
      // optional if is on insert mode
      if (!value) {
        return true
      }
      return _.isInteger(value)
    },
    {
      message: 'id must be a valid integer',
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
