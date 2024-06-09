import { contactTemplate } from "@/email/contact-template"
import { data } from "@/validation/contact-us"
import * as handlebars from "handlebars"
import { z } from "zod"

export async function compileTemplate(args: z.infer<typeof data>) {
  const template = handlebars.compile(contactTemplate)
  const htmlBody = template(args)
  return htmlBody
}
