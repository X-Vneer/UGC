import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React, { ButtonHTMLAttributes } from 'react'

const buttonVariance = cva('rounded-3xl inline-bold px-6 py-1  duration-200',{
    variants:{
        variant:{
            default:'bg-secondary hover:bg-secondary/80 text-white ',
            outline:'bg-transparent text-customBlack border border-customBlack hover:bg-customBlack  hover:text-white '
        }
    },
    defaultVariants:{
        variant:'default'
    }
})

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariance>{}
const Button = ({className,variant,...props}: Props) => {
  return (
    <button className={cn(buttonVariance({variant,className}))} {...props}/>
  )
}

export { Button,buttonVariance as ButtonCVA }