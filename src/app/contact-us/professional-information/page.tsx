"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { BrandInformationSchema, PersonalDataSchema } from "@/validation/contact-us"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
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
  } = useForm<z.infer<typeof BrandInformationSchema>>({
    resolver: zodResolver(BrandInformationSchema),
    defaultValues: {
      brandName: "",
      brandField: "",
      brandDescription: "",
    },
  })

  const { updateFormData } = useFormContext()
  const Router = useRouter()
  const { formData } = useFormContext()
  useEffect(() => {
    if (!PersonalDataSchema.safeParse(formData).success) {
      console.log("بيانات غير صحيحة")
      setTimeout(() => {
        toast.error("بيانات غير صحيحة")
      }, 1)
      Router.replace("/contact-us/personal-details")
    }
  }, [Router, formData])

  const onSubmit = handleSubmit((data) => {
    updateFormData(data)
    Router.push("/contact-us/service-information")
  })

  return (
    <div>
      <div className="max-md:text-center">
        <h1 className="text-3xl font-semibold  leading-loose">كن ترند الان</h1>
        <p className=" font-medium text-gray-500">معلوامت العلامة التجارية تهمنا </p>
      </div>

      <div className=" my-5">
        <Stepper
          steps={[" بيانات شخصية ", "العلامة التجارية ", "نوع الخدمة "]}
          activeStep={2}
        />
      </div>

      <form onSubmit={onSubmit} className="mt-5 space-y-5" noValidate>
        <Controller
          control={control}
          name="brandName"
          render={({ field }) => {
            return (
              <Input
                error={errors.brandName}
                placeholder="اسم العلامة التجارية"
                {...field}
                required
                label="اسم العلامة التجارية"
              />
            )
          }}
        />
        <Controller
          control={control}
          name="brandField"
          render={({ field }) => {
            return (
              <Input
                error={errors.brandField}
                placeholder="مجال العلامة التحارية"
                {...field}
                required
                label="مجال العلامة التحارية"
              />
            )
          }}
        />

        <Controller
          control={control}
          name="brandDescription"
          render={({ field }) => {
            return (
              <Input
                error={errors.brandDescription}
                placeholder="نبذة مبسطة عن العلامة التجارية"
                {...field}
                required
                label="نبذة مبسطة عن العلامة التجارية"
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
