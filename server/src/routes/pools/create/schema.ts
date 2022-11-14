import { z } from 'zod'

export const CreatePoolsBody = z.object({
  title: z.string()
})