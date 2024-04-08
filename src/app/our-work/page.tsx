import React from "react"

import Header from "@/components/header"
import OurWorkHero from "@/components/our-work/hero"
import OurWork from "@/components/our-work/our-work"

type Props = {}

const Page = (props: Props) => {
  const videos = [
    "/models1.mp4",
    "/video1.mp4",
    "/video2.mp4",
    "/video3.mp4",
    "/video4.mp4",
    "/video5.mp4",
    "/video6.mp4",
    "/models2.mp4",
    "/models3.mp4",
  ]
  return (
    <>
      <Header />
      <OurWorkHero />
      <OurWork videos={videos} title="أعمالنا" subTitle="نماذج متنوعة من أعمالنا" />
    </>
  )
}

export default Page
