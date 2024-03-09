import React from "react"

import WhyUGCCard from "../ui/why-ugc-card"

type Props = {}

const WhyUGC = (props: Props) => {
  return (
    <div className="my-10 min-h-screen bg-[#121212] py-12 text-white lg:py-28">
      <div className="text-center">
        <h2 className="mb-6 text-[15px] text-primary xl:text-lg">ليش ال UGC</h2>
        <p className="mx-auto max-w-xs  text-[24px]  font-bold leading-relaxed lg:max-w-md lg:text-[36px] xl:max-w-lg xl:text-[48px]">
          عنوان اخر يوضع هنا بهذا الحجم تقريبا
        </p>
      </div>
      <div className="container">
        <div className="mx-auto  mt-20 grid max-w-screen-lg grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {new Array(6).fill("").map((e, i) => (
            <WhyUGCCard key={`card_${i}`} index={i + 1} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyUGC
