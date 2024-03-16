import { z } from "zod"

const ContactUsSchema = z.object({
  name: z.string().min(1),
})

export { ContactUsSchema }
