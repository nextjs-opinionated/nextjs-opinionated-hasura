import * as z from 'zod'
import isEmail from 'validator/lib/isEmail'
import { EMPTY_SELECT_OPTION_VALUE } from '../components/forms/FormSelect/FormSelect'

export const FormExampleValidationSchema = z.object({
  email: z
    .string()
    .min(5)
    .refine((value) => isEmail(value), {
      message: 'invalid email',
    }),
  color_select: z.string().refine((value) => value !== EMPTY_SELECT_OPTION_VALUE, {
    message: 'please, select an item',
  }),
  toggle: z.boolean(),
})
