// import _ from 'lodash'
import * as z from 'zod'
import { Roles_Enum } from '../../graphql/generated'

export const Users_validation_schema = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  email: z.string().email(),
  role: z.nativeEnum(Roles_Enum),
  image: z.string().nullish(),
})
