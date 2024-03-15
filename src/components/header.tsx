"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { logo } from "@/assets"

import { cn } from "@/lib/utils"

type Props = {}

const Header = (props: Props) => {
  const [open, setOpen] = useState(false)
  const handleOpenMenu = () => {
    setOpen((pre) => !pre)
  }
  useEffect(() => {
    document.body.style.position = open ? "fixed" : ""
  }, [open])
  return (
    <nav className="border-gray-200 bg-gray-50 ">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <button
            onClick={handleOpenMenu}
            aria-label="open and close"
            id="menu-btn"
            className={cn(
              "hamburger block bg-transparent  focus:outline-none md:hidden ",
              open && " open ",
            )}
            type="button">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>

          <div
            className={cn(
              " w-full max-md:h-screen md:block md:w-auto",
              open ? "block" : "hidden",
            )}
            id="navbar-solid-bg">
            <ul
              onClick={() => setOpen(false)}
              className="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent rtl:space-x-reverse">
              <li>
                <Link
                  href="/"
                  className="block rounded  px-3 py-2  text-secondary md:bg-transparent md:p-0  "
                  aria-current="page">
                  الرئيسية
                </Link>
              </li>

              <li>
                <a
                  href="#about-us"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 ">
                  ايش الUGC
                </a>
              </li>
              <li>
                <a
                  href="#why-ugc"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 ">
                  ليش ال UGC
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 ">
                  الخدمات
                </a>
              </li>
              <li>
                <Link
                  href="#contact-us"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 ">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center whitespace-nowrap text-2xl font-semibold  text-secondary ">
              UGC
            </span>
            <img src={logo.src} className="h-9" alt="logo" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header
