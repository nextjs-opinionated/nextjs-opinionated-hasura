import * as z from 'zod'
import isEmail from 'validator/lib/isEmail'
import { EMPTY_SELECT_OPTION_VALUE } from '../../components/forms/FormSelect/FormSelect'

export const ImageFormExample = z
  .object({
    image_url: z.string(),
    image: typeof window === 'undefined' ? z.any() : z.instanceof(FileList),
  })
  .partial()
  .refine((data) => !!data.image_url || !!data.image[0], {
    message: 'Select an image',
    path: ['image'],
  })

export const FormExampleValidationSchema = z
  .object({
    email: z
      .string()
      .min(5)
      .refine((value) => isEmail(value), {
        message: 'invalid email',
      }),

    color_select: z.string().refine((value) => value !== EMPTY_SELECT_OPTION_VALUE, {
      message: 'please, select an option',
    }),
    color_input: z.string().nonempty(),
    toggle: z.boolean(),
  })
  .and(ImageFormExample)
