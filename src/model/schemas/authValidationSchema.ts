import * as z from 'zod'

export const authValidationSchema = z.object({
  email: z.string().email({ message: 'Insira um email válido' }),
})
