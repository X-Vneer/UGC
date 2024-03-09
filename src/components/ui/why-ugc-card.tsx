"use client"

import React from "react"
import { motion } from "framer-motion"

type Props = {
  index: number
}

const WhyUGCCard = ({ index }: Props) => {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay: index / 6,
      }}
      className="aspect-square rounded-xl bg-white p-4 text-center">
      <div className="flex items-center justify-center">
        <div className="  mb-5 flex aspect-square w-[72px] items-center justify-center overflow-hidden rounded-full bg-customBlack font-bold text-primary">
          ICON
        </div>
      </div>
      <p className="mb-2 text-[20px] font-bold leading-relaxed text-customBlack">
        عنوان صغير
      </p>
      <p className="text-lightGray text-[15px] leading-relaxed">
        هذا نص تجريبي فقط هذا نص تجريبي فقط يجب استبدال هذا النص بتص بديل يعادله ب
        الحج يزيد عنه بقليل او ينقص عنه بقليل
      </p>
    </motion.div>
  )
}

export default WhyUGCCard
