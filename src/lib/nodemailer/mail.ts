import { data } from "@/validation/contact-us"
import nodemailer from "nodemailer"
import { z } from "zod"

import { compileTemplate } from "../handlebars/complieTemplate"

export async function sendMail(args: z.infer<typeof data>) {
  // env
  const { SMIP_MAIL, SMIP_PASSWORD } = process.env
  if (!SMIP_MAIL) throw new Error("Missing SMIP_MAIL env")
  if (!SMIP_PASSWORD) throw new Error("Missing SMIP_PASSWORD env")

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMIP_MAIL,
      pass: SMIP_PASSWORD,
    },
  })

  // verify email and password
  await transport.verify()

  const htmlBody = await compileTemplate(args)
  // sending mails
  const sendMail = await transport.sendMail({
    from: SMIP_MAIL,
    to: SMIP_MAIL,
    subject: "طلب خدمة",
    html: htmlBody,
  })
}
