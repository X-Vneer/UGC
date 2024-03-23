import React from "react"

import Header from "@/components/header"
import ServicesHero from "@/components/our-work/hero"
import OurWork from "@/components/our-work/our-work"

type Props = {}

const Page = (props: Props) => {
  return (
    <>
      <Header />
      <ServicesHero />
      <OurWork />
    </>
  )
}

export default Page
