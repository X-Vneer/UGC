import React from "react"
import Link from "next/link"
import { logo } from "@/assets"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer dir="ltr" className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link className="flex justify-center gap-2  sm:justify-start" href="/">
            <img src={logo.src} className="h-10" alt="logo" />
          </Link>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            &copy; {new Date().getFullYear()} .UGCHUB جميع الحقوق محفوظة لمنصة
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
