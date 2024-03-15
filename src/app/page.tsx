import Footer from "@/components/footer"
import Header from "@/components/header"
import AboutUs from "@/components/home/about-us"
import Hero from "@/components/home/hero-section"
import Services from "@/components/home/services"
import WhyUGC from "@/components/home/why-ugc"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <WhyUGC />
      <Services />
    </>
  )
}
