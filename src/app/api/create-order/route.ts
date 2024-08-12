import Order from "@/model/order"
import { data } from "@/validation/contact-us"

import dbConnect from "@/lib/db"
import { sendMail } from "@/lib/nodemailer/mail"

export const POST = async (request: Request) => {
  try {
    const body = await request.json()

    const parsedData = data.parse(body)

    await dbConnect()
    const order = await Order.create(parsedData)
    await sendMail(parsedData)

    return new Response(JSON.stringify(order))
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return new Response(JSON.stringify(error), { status: 500 })
  }
}
