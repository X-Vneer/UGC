import React from "react"
import Link from "next/link"
import { blogger, logo } from "@/assets"

import { Toaster } from "sonner"

import { FormProvider } from "./context/context"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <section className=" min-h-screen">
      <Toaster />
      <div className="h-full">
        <div className="flex h-full justify-center p-4 lg:gap-32 lg:p-0">
          <div className="h-full w-full lg:w-2/3 ">
            <div className="flex min-h-full  max-lg:justify-center lg:pr-20 ">
              <Link href={"/"} className="absolute right-4 top-4 flex gap-2  ">
                <span className="self-center whitespace-nowrap text-2xl font-semibold  text-secondary ">
                  UGC
                </span>
                <img src={logo.src} className="h-9" alt="logo" />
              </Link>
              <div className="w-full max-w-[650px] pb-10  pt-24 lg:pt-40">
                <FormProvider>{children}</FormProvider>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" relative hidden min-h-screen  bg-primary  max-lg:hidden lg:block lg:w-1/3  ">
            <div className=" absolute top-[140px] z-10  aspect-[3/4] w-full  max-w-sm translate-x-14 overflow-hidden rounded-xl xl:translate-x-32">
              <img
                src={blogger.src}
                alt="place"
                className=" h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 h-full overflow-hidden">
              <span className="absolute right-[34%] top-[3%] block aspect-square w-10 rounded-full border  border-secondary  "></span>
              <span className="absolute right-[42%] top-[12%] block aspect-square w-6 rounded-full border border-secondary  "></span>
              <span className="absolute right-[73%] top-[8%] block aspect-square w-14 rounded-full border border-secondary  "></span>
              <span className="absolute right-[31%] top-[32%] block aspect-square w-10 rounded-full border border-secondary  "></span>
              <span className="absolute right-[75%] top-[34%] block aspect-square w-8 rounded-full border border-secondary  "></span>
              <span className="absolute right-[36%] top-[67%] block aspect-square w-8 rounded-full border border-secondary  "></span>
              <span className="absolute right-[77%] top-[43%] block aspect-square w-5 rounded-full border border-secondary  "></span>
              <span className="absolute right-[55%] top-[10%] block aspect-square w-14 rounded-full border border-secondary  "></span>
              <span className="absolute right-[45%] top-[76%] block aspect-square w-16 rounded-full border border-secondary  "></span>
              <span className="absolute right-[90%] top-[45%] block aspect-square w-12 rounded-full border border-secondary  "></span>
              <span className="absolute right-[50%] top-[65%] block aspect-square w-20 rounded-full border border-secondary  "></span>
              <span className="absolute right-[68%] top-[80%] block aspect-square w-4 rounded-full border border-secondary  "></span>
              <span className="absolute right-[40%] top-[48%] block aspect-square w-14 rounded-full border border-secondary  "></span>
              <span className="absolute right-[80%] top-[90%] block aspect-square w-12 rounded-full border border-secondary  "></span>
              <span className="absolute right-[39%] top-[87%] block aspect-square w-16 rounded-full border border-secondary  "></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout
