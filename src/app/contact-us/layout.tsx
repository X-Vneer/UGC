import React from "react"
import Link from "next/link"
import { blogger, logo } from "@/assets"
import { Toaster } from "sonner"

import { FormProvider } from "./context/context"

export const dynamic = "force-dynamic"
type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <section className=" min-h-screen">
      <Toaster />
      <div className="h-full">
        <div className="flex h-full items-center justify-center p-4 lg:gap-32 lg:p-0">
          <Link href={"/"} className="absolute right-4 top-4 flex gap-2  ">
            <span className="self-center whitespace-nowrap text-2xl font-semibold  text-secondary ">
              UGC
            </span>
            <img src={logo.src} className="h-9" alt="logo" />
          </Link>
          <div className=" w-full lg:w-2/3 ">
            <div className="flex  max-lg:justify-center lg:pr-20 ">
              <div className="w-full max-w-[650px]  max-lg:py-20">
                <FormProvider>{children}</FormProvider>
              </div>
            </div>
          </div>
          {/*  */}
          <div className=" relative hidden min-h-screen  bg-primary  max-lg:hidden lg:block lg:w-1/3  ">
            <div className=" absolute top-[140px] z-10  aspect-[3/4] w-full  max-w-sm translate-x-14 overflow-hidden rounded-xl xl:translate-x-32">
              <video
                autoPlay
                muted
                loop
                className=" h-full w-full object-cover"
                preload="none">
                <source src="/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-x-0 h-full overflow-hidden"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout
