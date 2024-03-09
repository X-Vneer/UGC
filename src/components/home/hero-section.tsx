"use client"
import React from "react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"

type Props = {}

function Hero({}: Props) {
  return (
    <main className=" min-h-screen lg:px-14 p-4 lg:p-8">
      <div className="flex items-center justify-center bg-primary h-[calc(100vh-30px)] lg:h-[calc(100vh-70px)] overflow-hidden rounded-3xl relative hero-section">
        <div className=" absolute inset-0 hero-section-background"></div>
        <div className="relative z-[1]  leading-loose max-w-lg xl:max-w-xl text-center">
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
            className="text-secondary text-center  mb-4 xl:text-xl ">
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
            className=" text-customBlack font-bold text-[24px] lg:text-[36px] xl:text-[48px] leading-relaxed mb-8">
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
            className="max-lg:text-[15px] text-[#7a7a7a] mb-5">
        هذا نص تجريبي يجب استبداله بنص خصا ذو معنى يهدف الى ايضاح الفكرة العامة من هذا النص
          </motion.p>
          <div className="flex gap-4  items-center justify-center">
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
              }}
            >

            <Button >نص تجريبي</Button>
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
              }}
            >

            <Button variant={'outline'}>نص تجريبي</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
