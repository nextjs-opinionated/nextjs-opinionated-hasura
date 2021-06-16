import * as z from 'zod'
import isEmail from 'validator/lib/isEmail'

export const FormExampleValidationSchema = z.object({
  email: z
    .string()
    .min(5)
    .refine((value) => isEmail(value), {
      message: 'invalid email',
    }),
  color: z.string(),
})
