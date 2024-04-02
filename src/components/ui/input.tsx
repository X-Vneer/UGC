import React, { InputHTMLAttributes } from "react"
import { FieldError } from "react-hook-form"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error: FieldError | undefined
  des?: string
}

const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  { label, error, des, ...props }: Props,
  ref,
) {
  return (
    <div>
      <label htmlFor={props.id} className="block  font-medium text-gray-700">
        {label}
      </label>
      {des ? <span className="text-[10px]  text-gray-500">{des}</span> : null}
      <input
        ref={ref}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
        {...props}
      />
      {error?.message ? (
        <span className=" text-sm text-red-600">{error.message}</span>
      ) : null}
    </div>
  )
})

export default Input
