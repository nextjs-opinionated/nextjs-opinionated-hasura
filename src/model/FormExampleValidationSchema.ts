import * as z from 'zod'
import isEmail from 'validator/lib/isEmail'

export const FormExampleValidationSchema = z.object({
  email: z
    .string()
    .min(5)
    .refine((value) => isEmail(value), {
      message: 'invalid email',
    }),
  image:
    typeof window === 'undefined'
      ? z.any()
      : z.instanceof(FileList).refine((fileValue) => {
          if (fileValue.length > 0) {
            return true
          } else {
            return false
          }
        }),
})
