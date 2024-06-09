import React from "react"
import {
  Control,
  Controller,
  FieldError,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form"

import { cn } from "@/lib/utils"
import Input from "@/components/ui/input"

import { ServiceInformationType } from "./types"

interface RadioGroupProps {
  name: keyof ServiceInformationType
  errors: FieldErrors<ServiceInformationType>
  options: { label: string; value: string }[]
  register: UseFormRegister<any>
  small?: boolean
  label?: string
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  register,
  small,
  errors,
  label,
}) => {
  return (
    <div>
      {small ? <p className="mb-2 font-medium text-gray-700">{label}</p> : ""}
      <fieldset
        className={cn(small ? "flex flex-wrap gap-3" : "grid grid-cols-2 gap-4")}>
        <legend className="sr-only">{name}</legend>
        {options.map(({ label, value }) => (
          <div key={value}>
            <label className="flex cursor-pointer justify-between gap-3 rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
              <div>
                <p className="text-sm text-gray-700">{label}</p>
              </div>
              <input
                type="radio"
                {...register(name)}
                value={value}
                className={cn(
                  "size-4 border-gray-300 text-secondary",
                  small && "sr-only",
                )}
              />
            </label>
          </div>
        ))}
        {errors[name]?.message && (
          <span className="text-sm text-red-600">{errors[name]?.message}</span>
        )}
      </fieldset>
    </div>
  )
}

interface InputFieldProps {
  control: Control<any>
  label: string
  placeholder: string
  name: keyof ServiceInformationType
  errors: FieldErrors<ServiceInformationType>
}

export const InputField: React.FC<InputFieldProps> = ({
  control,
  name,
  label,
  placeholder,
  errors,
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <Input
        error={errors[name]}
        placeholder={placeholder}
        {...field}
        required
        label={label}
      />
    )}
  />
)
