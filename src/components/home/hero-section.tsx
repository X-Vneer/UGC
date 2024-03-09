"use client"

import React from "react"
import { motion } from "framer-motion"

import { Button } from "../ui/button"

type Props = {}

function Hero({}: Props) {
  return (
    <main className=" min-h-[calc(100vh-64px)] p-4 lg:p-8 lg:px-14">
      <div className="hero-section relative flex h-[calc(100vh-70px)] items-center justify-center overflow-hidden rounded-3xl bg-primary lg:h-[calc(100vh-140px)]">
        <div className=" hero-section-background absolute inset-0"></div>
        <div className="relative z-[1]  max-w-lg text-center leading-loose xl:max-w-xl">
          <motion.p
            initial={{
              y: 15,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="mb-4 text-center  text-sm text-secondary xl:text-lg ">
            هيا نبدأ
          </motion.p>
          <motion.h1
            initial={{
              y: 15,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className=" mb-8 text-[24px] font-bold leading-relaxed text-customBlack lg:text-[36px] xl:text-[48px]">
            الاستفادة من قوة وسائل التواصل الاجتماعي
          </motion.h1>
          <motion.p
            initial={{
              y: 15,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
              duration: 1,
            }}
            className="mb-5 text-[#7a7a7a] max-lg:text-[15px]">
            هذا نص تجريبي يجب استبداله بنص خصا ذو معنى يهدف الى ايضاح الفكرة العامة
            من هذا النص
          </motion.p>
          <div className="flex items-center  justify-center gap-4">
            <motion.div
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1.1,
                duration: 1,
              }}>
              <Button>نص تجريبي</Button>
            </motion.div>
            <motion.div
              initial={{
                y: 15,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1.2,
                duration: 1,
              }}>
              <Button variant={"outline"}>نص تجريبي</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
