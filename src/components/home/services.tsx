"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

type Props = {}

const Card = ({ content, index }: { content: string; index: number }) => {
  return (
    <div className="relative p-3 pr-16">
      <motion.span
        initial={{
          y: 10,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          y: {
            type: "spring",
            stiffness: 250,
          },
          delay: index / 6,
        }}
        className="absolute right-3 top-3  clear-start flex aspect-square items-center justify-center rounded-full bg-primary p-2 text-sm text-customBlack">
        <span>
          <Check />
        </span>
      </motion.span>
      <motion.p
        initial={{
          x: 10,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: index / 6,
        }}
        className="text-[#7a7a7a]">
        {content}
      </motion.p>
    </div>
  )
}

const Services = (props: Props) => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="max-w-xl max-md:text-center">
          <h2 className="mb-4  text-[15px] text-secondary xl:text-lg ">
            ليه ال UGC
          </h2>
          <p className="mb-4 text-[28px] font-bold leading-relaxed text-customBlack  lg:text-[36px] xl:text-[48px]">
            ايش الخدمات يلي نقدمها
          </p>
          <p className="text-[#7a7a7a] max-lg:text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            cursus, libero lacinia mattis cursus, justo massa bibendum orci, in
            ultrices nunc massa sed erat. Aenean blandit erat at lectus viverra
            facilisis.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {new Array(6).fill("").map((e, i) => {
            return (
              <Card
                key={`Card_${i}`}
                index={i}
                content={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturcursus, libero lacinia mattis cursus, justo massa bibendum orci, inultrices nunc"
                }
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
