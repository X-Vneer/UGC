import React from "react"
import { logo } from "@/assets"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center gap-2 text-teal-600 sm:justify-start">
            <span className="self-center whitespace-nowrap text-2xl font-semibold  text-secondary ">
              UGC
            </span>

            <img src={logo.src} className="h-9" alt="logo" />
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
