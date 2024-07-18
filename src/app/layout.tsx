import type { Metadata } from "next"
import { Cairo } from "next/font/google"

import "./globals.css"

import Footer from "@/components/footer"

const cairo = Cairo({ subsets: ["latin"], weight: ["400", "500", "700"] })

export const metadata: Metadata = {
  title: "Saudi media",
  description:
    "إذا تدور عن صناع محتوى مبدعين لتصوير الإعلانات او أفكار ابداعية لإدارة حملتك الإعلانية إنت وصلت!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.moyasar.com/mpf/1.13.0/moyasar.css"
        />
      </head>
      <body className={cairo.className + " left-0 right-0 top-0 overflow-y-scroll"}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
