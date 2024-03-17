"use client"

import { ContactUsSchema } from "@/validation/contact-us"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"

export default function ContactUs() {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      name: "",
      jobTitle: "",
      phoneNumber: "",
      email: "",
    },
  })
  console.log("🚀 ~ ContactUs ~ errors:", errors)

  const onSubmit = handleSubmit((data) => {
    console.log("🚀 ~ file: page.tsx:100 ~ onSubmit ~ data:", data)
    // TODO handle form submit
  })

  return (
    <div>
      <div className="max-md:text-center">
        <h1 className="text-3xl font-semibold  leading-loose">كن ترند الان</h1>
        <p className=" font-medium text-gray-500">اضف بخطوات بسيطة</p>
      </div>

      <form onSubmit={onSubmit} className="mt-10 space-y-5" noValidate>
        <Controller
          control={control}
          name="name"
          render={({ field }) => {
            return (
              <Input
                error={errors}
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
                error={errors}
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
                error={errors}
                placeholder="رقم التواصل"
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
                error={errors}
                placeholder="ايميل التواصل"
                {...field}
                required
                label="ايميل التواصل"
              />
            )
          }}
        />

        <Button className="w-full rounded-lg" type="submit">
          التالي
        </Button>
        <DevTool control={control} />
      </form>
    </div>
  )
}
