import _ from 'lodash'
import * as z from 'zod'

export const messageValidationSchema = z.object({
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
  title: z.string().nonempty({ message: 'Title is required' }),
})
