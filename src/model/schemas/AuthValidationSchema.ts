import * as z from 'zod'

export const AuthValidationSchema = z.object({
  email: z.string().email({ message: 'invalid email' }),
})
