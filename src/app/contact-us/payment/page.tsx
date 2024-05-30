"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  BrandInformationSchema,
  PersonalDataSchema,
  ServiceInformationSchema,
} from "@/validation/contact-us"
import { toast } from "sonner"

import PayPalButton from "@/components/ui/paypal-buttons"
import Stepper from "@/components/ui/stepper"

import { useFormContext } from "../context/context"

export default function ContactUs() {
  const Router = useRouter()
  const { formData } = useFormContext()
  useEffect(() => {
    if (
      !PersonalDataSchema.merge(BrandInformationSchema)
        .and(ServiceInformationSchema)
        .safeParse(formData).success
    ) {
      console.log("بيانات غير صحيحة")
      setTimeout(() => {
        toast.error("بيانات غير صحيحة")
      }, 1)
      Router.replace("/contact-us/personal-details")
    }
  }, [Router, formData])

  return (
    <div>
      <div className="max-md:text-center">
        <h1 className="text-3xl font-semibold  leading-loose">كن ترند الان</h1>
        <p className=" font-medium text-gray-500">
          يمكنك اختيار تفاصيل الخدمة التي تحتاجها{" "}
        </p>
      </div>

      <div className=" my-5">
        <Stepper
          steps={[" بيانات شخصية ", "العلامة التجارية ", "نوع الخدمة ", "الدفع"]}
          activeStep={4}
        />
      </div>
      <div className="py-10">
        <PayPalButton />
      </div>
    </div>
  )
}
