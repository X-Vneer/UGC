import React from "react"
import { redirect } from "next/navigation"

type Props = {}

const Page = (props: Props) => {
  return redirect("/contact-us/personal-details")
}

export default Page
