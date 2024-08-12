import { contactTemplate, modelOrder } from "@/email/contact-template"
import { data } from "@/validation/contact-us"
import * as handlebars from "handlebars"
import { z } from "zod"

export async function compileTemplate(args: z.infer<typeof data>) {
  const templateToRender = args.videosType === "ugc" ? contactTemplate : modelOrder
  const template = handlebars.compile(templateToRender)
  const htmlBody = template({
    ...args,
    modalReservation:
      args.modalReservation === "1" ? "جلسة تصوير مع مودل" : "مودل فقط",
    videoType: args.videoType === "homemade" ? "منتج تصوير منزلي" : "تغطية حية",
  })
  return htmlBody
}
