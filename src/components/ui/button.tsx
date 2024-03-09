import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import React, { ButtonHTMLAttributes } from 'react'

const buttonVariance = cva('rounded-3xl inline-bold px-5 py-2  duration-200',{
    variants:{
        variant:{
            default:' bg-secondary hover:bg-secondary/90 text-white ',
            outline:''
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