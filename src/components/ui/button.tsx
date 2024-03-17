import React, { ButtonHTMLAttributes } from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariance = cva("rounded-3xl inline-bold px-6 py-1  duration-200", {
  variants: {
    variant: {
      default: "bg-secondary hover:bg-secondary/80 text-white ",
      outline:
        "bg-transparent text-customBlack border border-customBlack hover:bg-customBlack  hover:text-white ",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariance> {
  isLoading?: boolean
}
const Button = ({ className, variant, isLoading, ...props }: Props) => {
  return (
    <button
      className={cn(
        buttonVariance({ variant, className }),
        isLoading && "pointer-events-none  opacity-70",
      )}
      disabled={isLoading}
      {...props}
    />
  )
}

export { Button, buttonVariance as ButtonCVA }
