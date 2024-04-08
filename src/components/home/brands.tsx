"use client"

import React, { useRef } from "react"
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
} from "@/assets"
import { motion, useInView } from "framer-motion"

type Props = {}

const Brands = (props: Props) => {
  const containerRef = useRef<React.ElementRef<"section">>(null)
  const isInView = useInView(containerRef)

  const bransLogo = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8]
  return (
    <section ref={containerRef} className="py-10">
      <div className="container">
        <motion.p
          initial={{
            y: 15,
            opacity: 0,
            rotateX: -50,
          }}
          animate={
            isInView
              ? {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            delay: 0.2,
            duration: 0.4,
          }}
          className="mb-4 text-center  text-secondary xl:text-lg ">
          عملائنا
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-3 ">
          {bransLogo.map((e, i) => {
            return (
              <motion.img
                initial={{
                  y: 25,
                  opacity: 0,
                }}
                animate={
                  isInView
                    ? {
                        y: 0,
                        opacity: 1,
                      }
                    : {}
                }
                transition={{
                  delay: 0.2 + i / 5,
                  duration: 0.5,
                }}
                key={`brand_${i}`}
                src={e.src}
                className="aspect-square w-1/6 min-w-[140px] shrink-0  opacity-65 duration-300 hover:opacity-100 "
                alt="logo"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Brands
