"use client"

import { domAnimation, LazyMotion } from "framer-motion"

export default function FramerMotion({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion strict features={domAnimation}>
      {children}
    </LazyMotion>
  )
}
