"use client"

import React from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

type Props = {}
const services = [
  "دراسة وتحليل العلامة التجارية حيث نعمل على تقديم المقترحات الاستراتيجية التي تتناسب مع أهداف العلامة التجارية ودراستها بعمق لتحقيق النتائج المرجوة.",
  " البحث عن واختيار المبدعين في صناعة المحتوى الذين يتناسبون مع روح وقيم العلامة التجارية لضمان الجودة والتأثير الأمثل.",
  "توليد أفكار محتوى مبتكرة وكتابتها بما يتوافق مع أهداف العلامة التجارية، لضمان التواصل الفعّال مع الجمهور المستهدف.",
  "إنتاج محتوى مرئي ومكتوب يتوافق مع خوارزميات المنصات الرقمية المستهدفة لزيادة الوصول والتفاعل.",
  "تقديم استراتيجيات جذب (Hooks) حيث نطوير ونقديم مجموعة من الاستراتيجيات والأساليب الجاذبة التي تساعد في قياس النتائج وتحسين الأداء التسويقي.",
  " تخطيط وتنفيذ حملات تسويقية تعتمد على المحتوى المُنتَج من قِبل المستخدمين(UGC)، لتعزيز المصداقية وتوسيع نطاق الانتشار بشكل فعّال.",
]

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
          <h2 className="mb-4  text-[15px] text-secondary xl:text-lg ">خدماتنا</h2>
          <p className="mb-4 text-[28px] font-bold leading-relaxed text-customBlack  lg:text-[36px] xl:text-[48px]">
            خدماتنا
          </p>
          <p className="text-[#7a7a7a] lg:text-lg ">
            خدماتنا تشكل مجموعة متكاملة تهدف إلى تعزيز الهوية التجارية وتحقيق التفاعل
            الأمثل مع الجمهور المستهدف من خلال استراتيجيات محتوى مدروسة ومبتكرة.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {services.map((e, i) => {
            return <Card key={`Card_${i}`} index={i} content={e} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
