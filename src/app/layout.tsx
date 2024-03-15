import type { Metadata } from "next"
import { Cairo } from "next/font/google"

import "./globals.css"

import Footer from "@/components/footer"

const cairo = Cairo({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className + " left-0 right-0 top-0 overflow-y-scroll"}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
