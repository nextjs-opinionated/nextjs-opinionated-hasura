import * as z from 'zod'
import validator from 'validator'
import { validate as uuidValidate } from 'uuid'

export const List_items_validation_schema = z.object({
  id: z.any().refine(
    (value) => {
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
  url: z
    .string()
    .nonempty()
    .refine((value) => validator.isURL(value), {
      message: 'must be a valid URL',
    }),
  imageUrl: z
    .string()
    .nullish()
    .refine(
      (value) => {
        // optional if is on insert mode
        if (!value || value?.length === 0) {
          return true
        } else {
          return validator.isURL(value)
        }
      },
      {
        message: 'must be a valid URL',
      }
    ),
  publishedAt: z.string().nullish(),
  publishedAt_date: z
    .string()
    .nullish()
    .refine(
      (value) => {
        // optional
        if (!value || value?.length === 0) {
          return true
        } else {
          console.log('--  value: ', value)
          return validator.isDate(value, { format: 'YYYY-MM-DD' })
        }
      },
      {
        message: 'must be a valid URL',
      }
    ),
  publishedAt_time: z
    .string()
    .nullish()
    .refine(
      (value) => {
        // optional
        if (!value || value?.length === 0) {
          return true
        } else {
          return value.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/) // https://stackoverflow.com/a/7536768
        }
      },
      {
        message: 'must be a valid time',
      }
    ),
})
