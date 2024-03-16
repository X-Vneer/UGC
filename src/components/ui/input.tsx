import React, { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id} className="block text-xs font-medium text-gray-700">
        {props.label}
      </label>
      <input
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
        {...props}
      />
    </div>
  )
}

export default Input
