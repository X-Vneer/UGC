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
        <div className="relative z-[1]  leading-loose max-w-lg text-center">
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
            className="text-secondary text-center  mb-8 xl:text-xl ">
            GET STARTED
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
            className=" text-customBlack font-bold text-2xl lg:text-4xl xl:text-5xl mb-10">
            Tap Into the Power of Social Media
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
            className="max-lg:text-[15px] text-[#7a7a7a] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </motion.p>
          <div>
            <Button >Get Started</Button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Hero
