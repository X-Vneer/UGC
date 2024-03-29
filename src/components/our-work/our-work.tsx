"use client"

import React from "react"
import { motion } from "framer-motion"

type Props = {
  videos: string[]
  title: string
  subTitle: string
}

const OurWork = ({ videos, title, subTitle }: Props) => {
  return (
    <section className="min-h-screen py-10 text-center lg:py-20">
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
        {title}
      </motion.p>
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
          delay: 0.4,
          duration: 1,
        }}
        className=" mb-8 text-[24px] font-bold  leading-relaxed text-customBlack lg:text-[36px] xl:text-[48px]">
        {subTitle}
      </motion.p>
      <div className="flex flex-wrap justify-center   gap-6 px-4 ">
        {videos.map((video, index) => {
          return (
            <video
              key={`video_${index}`}
              autoPlay
              controls
              muted
              loop
              className=" aspect-[9/16] w-full max-w-96 rounded-lg  "
              preload="none">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )
        })}
      </div>
    </section>
  )
}

export default OurWork
