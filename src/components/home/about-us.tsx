"use client"

import React, { useRef } from "react"
import { cornerIcons } from "@/assets"
import { motion } from "framer-motion"

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <section id="about-us" className=" max-md:py-10">
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
                className="about-us-background absolute inset-y-0 top-0 aspect-square w-full overflow-hidden rounded-3xl">
                <video
                  autoPlay
                  muted
                  loop
                  className=" h-full w-full object-cover"
                  preload="none">
                  <source src="/video3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
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
                alt="background"
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
            className="w-full p-5 max-lg:text-center md:w-1/2">
            <h2 className="mb-4  text-[15px] font-bold text-secondary xl:text-lg ">
              ايش ال UGC
            </h2>
            <p className="mb-4 text-[28px] font-bold leading-relaxed text-customBlack  lg:text-[36px] xl:text-[48px]">
              الـugc إختصار جملة User generated content
            </p>
            <p className="text-[#7a7a7a] lg:text-lg">
              وهو أحدث أنواع التسويق بالمحتوى وهو المحتوى الحقيقي المصنوع من األشخاص
              انفسهم وليس من العالمة التجارية موجه من العميل الحالي إلى العميل
              المحتمل.
            </p>
            <div className=" mt-8 grid grid-cols-2 gap-y-3  text-center">
              <div>
                <p>ليه تحتاج الـUGC لعالمتك التجارية ؟</p>
                <span className="block   text-xl text-customBlack">93%</span>
                <span className="text-sm text-[#7a7a7a]">
                  من المبيعات
                  <br />
                  تتم عن طريق محتوى ال UGC
                </span>
              </div>
              <div>
                <p>الإعلانات التقليدية vs محتوى UGC</p>
                <span className="block   text-xl text-customBlack">9.8%</span>
                <span className="text-sm text-[#7a7a7a]">
                  محتوى UGC
                  <br />
                  يؤثر على قرار الشراء
                  <br />
                  أكثر من إعالنات التقليدية
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
