// import _ from 'lodash'
import * as z from 'zod'
import { Roles_Enum } from '../../graphql/generated'
import _ from 'lodash'

export const UserValidationSchema = z.object({
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
  name: z.string().nonempty(),
  email: z.string().email(),
  role: z.nativeEnum(Roles_Enum),
})
