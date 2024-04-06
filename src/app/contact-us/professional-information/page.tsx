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
    register,
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
    console.log("🚀 ~ ContactUs ~ formData:", formData)
    if (!PersonalDataSchema.safeParse(formData).success) {
      console.log("بيانات غير صحيحة")
      setTimeout(() => {
        toast.error("بيانات غير صحيحة")
      }, 1)
      Router.push("/contact-us/personal-details")
    }
  }, [Router, formData])

  const onSubmit = handleSubmit((data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
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
              <>
                <Input
                  error={errors.brandField}
                  placeholder="مجال العلامة التحارية"
                  {...field}
                  required
                  label="مجال العلامة التحارية"
                />
              </>
            )
          }}
        />
        <div>
          <label
            htmlFor="brandDescription"
            className="block  font-medium text-gray-700">
            نبذة مبسطة عن العلامة التجارية
          </label>
          <span className="text-[12px]  text-gray-500">
            الرجاء كتابة نبذة مختصرة لا تقل عن 50 حرف
          </span>

          <textarea
            {...register("brandDescription")}
            id="brandDescription"
            className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
            rows={4}
            placeholder="نبذة مبسطة عن العلامة التجارية"></textarea>
          {errors.brandDescription?.message ? (
            <span className=" text-sm text-red-600">
              {errors.brandDescription.message}
            </span>
          ) : null}
        </div>
        <Button isLoading={isSubmitting} className="w-full rounded-md" type="submit">
          التالي
        </Button>
        <DevTool control={control} />
      </form>
    </div>
  )
}
