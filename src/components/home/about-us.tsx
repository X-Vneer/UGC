"use client"

import React, { useRef } from "react"
import { cornerIcons } from "@/assets"
import { motion } from "framer-motion"

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <div className=" max-md:py-10">
      <div className="container">
        <div className="flex min-h-screen items-center gap-10 max-md:flex-col-reverse lg:gap-14">
          <div className="relative w-full p-5  md:w-1/2 ">
            <div className="relative aspect-square w-full">
              <motion.div
                initial={{
                  y: 50,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  y: {
                    type: "spring",
                    stiffness: 200,
                    duration: 1,
                    delay: 0.2,
                  },
                }}
                className="about-us-background absolute inset-y-0 top-0 aspect-square w-full rounded-3xl"></motion.div>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  scale: {
                    delay: 0.35,
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                src={cornerIcons.src}
                alt="bacground"
                className=" absolute  -bottom-8 -left-5 w-1/2  "
              />
            </div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              x: 10,
            }}
            transition={{
              delay: 0.4,
              duration: 0.4,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            className="w-full p-5 md:w-1/2">
            <h2 className="mb-4  text-[15px] text-secondary xl:text-lg ">
              هيا نبدا
            </h2>
            <p className="mb-4 text-[28px] font-bold leading-relaxed text-customBlack  lg:text-[36px] xl:text-[48px]">
              يتم توظيف السوشل ميدا كما لم يتم من قبل
            </p>
            <p className="text-[#7a7a7a] max-lg:text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              cursus, libero lacinia mattis cursus, justo massa bibendum orci, in
              ultrices nunc massa sed erat. Aenean blandit erat at lectus viverra
              facilisis.
            </p>
            <div className=" mt-7 grid grid-cols-2 gap-y-3  ">
              <div>
                <p className="text-xl   text-customBlack">+ 1000</p>
                <span className="text-sm text-[#7a7a7a]">نص ما</span>
              </div>
              <div>
                <p className="text-xl   text-customBlack">+ 1000</p>
                <span className="text-sm text-[#7a7a7a]">نص ما</span>
              </div>
              <div>
                <p className="text-xl   text-customBlack">+ 1000</p>
                <span className="text-sm text-[#7a7a7a]">نص ما</span>
              </div>
              <div>
                <p className="text-xl   text-customBlack">+ 1000</p>
                <span className="text-sm text-[#7a7a7a]">نص ما</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
