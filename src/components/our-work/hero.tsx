import React from "react"

type Props = {}

const ServicesHero = (props: Props) => {
  return (
    <section className="-mt-20 flex h-[43vh] flex-col items-center justify-center bg-primary">
      <h1 className="pt-20  text-[36px] font-bold text-customBlack xl:text-[48px]">
        أعمالنا
      </h1>
      <div className="flex gap-2 pt-3 text-lightGray">
        <p>الرئيسية</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1F19E1"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-move-left">
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" />
        </svg>
        <p>أعمالنا</p>
      </div>
    </section>
  )
}

export default ServicesHero
