"use client"

import React, { createContext, useContext, useState } from "react"

const FormContext = createContext<{
  formData: Record<string, any>
  updateFormData: (updatedData: Record<string, any>) => void
}>({
  formData: {},
  updateFormData: () => {},
})

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error("useAppState must be used within the AppProvider")
  }
  return context
}

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formData, setFormData] = useState<Record<string, any>>({})

  const updateFormData = (updatedData: Record<string, any>) => {
    setFormData((prevData) => ({ ...prevData, ...updatedData }))
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  )
}
