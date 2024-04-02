"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { logo } from "@/assets"
import { motion } from "framer-motion"

import { Button } from "../ui/button"

type Props = {}

function Hero({}: Props) {
  return (
    <main className=" min-h-[calc(100vh-64px)] p-4 lg:p-8 lg:px-14">
      <div className="hero-section relative flex h-[calc(100vh-70px)] items-center justify-center overflow-hidden rounded-3xl bg-primary lg:h-[calc(100vh-140px)]">
        <div className=" hero-section-background absolute inset-0"></div>
        <div
          style={{
            perspective: "300px",
          }}
          className=" relative  z-[1] max-w-lg text-center leading-loose xl:max-w-xl">
          <motion.p
            initial={{
              y: 15,
              opacity: 0,
              rotateX: -90,
            }}
            animate={{
              y: 0,
              rotateX: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="mb-4 text-center   text-secondary xl:text-lg ">
            <Image src={logo} alt="logo" className="mx-auto w-10" />
          </motion.p>
          <motion.h1
            initial={{
              y: 15,
              opacity: 0,
              rotateX: -40,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotateX: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className=" mb-8 whitespace-nowrap text-[24px] font-bold leading-relaxed text-customBlack lg:text-[34px]   xl:text-[44px]">
            المنصة الاولى لصناع محتوى UGC
          </motion.h1>
          <motion.p
            initial={{
              y: 15,
              opacity: 0,
              rotateX: -40,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotateX: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 1,
            }}
            className="mb-5 text-[#7a7a7a] max-lg:text-[15px] lg:text-lg">
            إذا تدور عن صناع محتوى مبدعين لتصوير الإعلانات او أفكار ابداعية لإدارة
            حملتك الإعلانية إنت وصلت!
          </motion.p>
          <div className="flex items-center  justify-center gap-4">
            <motion.div
              initial={{
                y: 15,
                opacity: 0,
                rotateX: -40,
              }}
              animate={{
                y: 0,
                opacity: 1,
                rotateX: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 1,
              }}>
              <Button>
                <Link href={"/contact-us"}>اطلب خدمتك</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{
                y: 15,
                opacity: 0,
                rotateX: -40,
              }}
              animate={{
                y: 0,
                opacity: 1,
                rotateX: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 1,
              }}>
              <Button variant={"outline"}>
                <Link href={"/our-work"}>أعمالنا</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
