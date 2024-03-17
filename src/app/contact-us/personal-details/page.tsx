"use client"

import { useRouter } from "next/navigation"
import { PersonalDataSchema } from "@/validation/contact-us"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"
import Stepper from "@/components/ui/stepper"

import { useFormContext } from "../context/context"

export default function ContactUs() {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
  } = useForm<z.infer<typeof PersonalDataSchema>>({
    resolver: zodResolver(PersonalDataSchema),
    defaultValues: {
      name: "",
      jobTitle: "",
      phoneNumber: "",
      email: "",
    },
  })

  const { updateFormData } = useFormContext()
  const Router = useRouter()

  const onSubmit = handleSubmit((data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    updateFormData(data)
    Router.push("/contact-us/professional-information")
  })

  return (
    <div>
      <div className="max-md:text-center">
        <h1 className="text-3xl font-semibold  leading-loose">كن ترند الان</h1>
        <p className=" font-medium text-gray-500">معلوامات الاسم والتواصل</p>
      </div>

      <div className=" my-5">
        <Stepper
          steps={[" بيانات شخصية ", "العلامة التجارية ", "نوع الخدمة "]}
          activeStep={1}
        />
      </div>

      <form onSubmit={onSubmit} className="mt-5 space-y-5" noValidate>
        <Controller
          control={control}
          name="name"
          render={({ field }) => {
            return (
              <Input
                error={errors.name}
                placeholder="الاسم"
                {...field}
                required
                label="الاسم"
              />
            )
          }}
        />
        <Controller
          control={control}
          name="jobTitle"
          render={({ field }) => {
            return (
              <Input
                error={errors.jobTitle}
                placeholder="المسمى الوظيفي"
                {...field}
                required
                label="المسمى الوظيفي"
              />
            )
          }}
        />
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => {
            return (
              <Input
                error={errors.phoneNumber}
                placeholder="966 xxx xxx xxx"
                {...field}
                required
                label="رقم التواصل"
              />
            )
          }}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => {
            return (
              <Input
                error={errors.email}
                placeholder="ايميل التواصل"
                {...field}
                required
                label="ايميل التواصل"
              />
            )
          }}
        />

        <Button isLoading={isSubmitting} className="w-full rounded-md" type="submit">
          التالي
        </Button>
        <DevTool control={control} />
      </form>
    </div>
  )
}
