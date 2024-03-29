import React from "react"

import Header from "@/components/header"
import OurWorkHero from "@/components/our-work/hero"
import OurWork from "@/components/our-work/our-work"

type Props = {}

const Page = (props: Props) => {
  const videos = ["/models1.mp4", "/models2.mp4", "/models3.mp4", "/models4.mp4"]
  return (
    <>
      <Header />
      <OurWorkHero />
      <OurWork
        videos={videos}
        title="الموديلز"
        subTitle="نماذج متنوعة من فيدوهات الموديلز"
      />
    </>
  )
}

export default Page
