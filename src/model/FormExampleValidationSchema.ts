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
  image:
    typeof window === 'undefined'
      ? z.any()
      : z.instanceof(FileList).refine(
          (fileValue) => {
            if (fileValue.length > 0) {
              return true
            } else {
              return false
            }
          },
          { message: 'please, select an image' }
        ),
  color_select: z.string().refine((value) => value !== EMPTY_SELECT_OPTION_VALUE, {
    message: 'please, select an option',
  }),
  color_input: z.string().nonempty(),
  toggle: z.boolean(),
})
// .refine() // TODO: validate image_url to ignore image validation if there is already an image on server
