"use client"

import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  BrandInformationSchema,
  PersonalDataSchema,
  ServiceInformationSchema,
} from "@/validation/contact-us"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import Stepper from "@/components/ui/stepper"
import ModelsForm from "@/components/contact/mode-form"
import { RadioGroup } from "@/components/contact/reusable-components"
import { ServiceInformationType } from "@/components/contact/types"
import UGCForm from "@/components/contact/ugc-form"

import { useFormContext } from "../context/context"

const ContactUs: React.FC = () => {
  const {
    watch,
    formState: { errors, isSubmitting, isSubmitted },
    handleSubmit,
    control,
    register,
    reset,
    setError,
  } = useForm<ServiceInformationType>({
    resolver: zodResolver(ServiceInformationSchema),
    defaultValues: {
      videosType: "ugc",
      numberOfModules: "1",
      serviceType: "campaign",
      numberOfVideos: "15",
      contentCreatorSex: "male",
      likedVideo: "",
      videoType: "homemade",
      modalReservation: "1",
    },
  })

  const Router = useRouter()
  const { formData, updateFormData } = useFormContext()

  useEffect(() => {
    if (
      !PersonalDataSchema.merge(BrandInformationSchema).safeParse(formData).success
    ) {
      console.log("بيانات غير صحيحة")
      setTimeout(() => {
        toast.error("بيانات غير صحيحة")
      }, 1)
      Router.replace("/contact-us/personal-details")
    }
  }, [Router, formData])



  const onSubmit = handleSubmit(async (data) => {
    // console.log("🚀 ~ onSubmit ~ data:", data)
    // updateFormData(data)
    try {
      await axios.post("/api/create-order", { ...formData, ...data })
      toast.success("تم ارسال الطلب بنجاح")
      toast.success("سيتم التواصل معك في اقرب وقت ممكن")
      Router.push('/')
      reset()
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error)
      setError("root", { message: "العملية فشلت, الرجاء المحاولة مجددا" })
    }
    // Router.push("/contact-us/payment")
  })

  return (
    <div>
      {/* <div className="max-md:text-center">
        <h1 className="text-3xl font-semibold leading-loose">كن ترند الان</h1>
        <p className="font-medium text-gray-500">
          يمكنك اختيار تفاصيل الخدمة التي تحتاجها
        </p>
      </div> */}

      <div className="my-5">
        <Stepper
          steps={[" بيانات شخصية ", "العلامة التجارية ", "نوع الخدمة "]}
          activeStep={3}
        />
      </div>

      <form onSubmit={onSubmit} className="mt-5 space-y-5" noValidate>
        <div>
          <p className="mb-2 font-medium text-gray-700">نوع الخدمة</p>
          <RadioGroup
            name="videosType"
            options={[
              { label: "UGC", value: "ugc" },
              { label: "Model", value: "models" },
            ]}
            register={register}
            errors={errors}
          />
        </div>

        {watch("videosType") === "ugc" ? (
          <UGCForm
            control={control}
            register={register}
            errors={errors}
            watch={watch}
          />
        ) : (
          <ModelsForm control={control} register={register} errors={errors} />
        )}

        <div>
          <p className="mb-2 font-medium text-gray-700">
            {watch("videosType") === "ugc" ? "جنس صانع المحتوى" : "الجنس"}
          </p>
          <RadioGroup
            small
            name="contentCreatorSex"
            options={[
              { label: "ذكر", value: "male" },
              { label: "أنثى", value: "female" },
              { label: "كلاهما", value: "both" },
            ]}
            register={register}
            errors={errors}
          />
        </div>

        {watch("videosType") === "models" ? (
          <div key="modalReservation">
            <p className="mb-2 font-medium text-gray-700">نوع الحجز</p>
            <RadioGroup
              name="modalReservation"
              options={[
                { label: "جلسة تصوير مع مودل", value: "1" },
                { label: "مودل فقط", value: "2" },
              ]}
              register={register}
              errors={errors}
            />
          </div>
        ) : (
          <div key="videoType">
            <p className="mb-2 font-medium text-gray-700">نوع الفديو</p>
            <RadioGroup
              name="videoType"
              options={[
                { label: "منتج تصوير منزلي", value: "homemade" },
                { label: "تغطية حية", value: "liveCoverage" },
              ]}
              register={register}
              errors={errors}
            />
          </div>
        )}

        <Button
          isLoading={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-md"
          type="submit">
          {isSubmitting ? <Loader2 className=" animate-spin" /> : null}
          اطلب الخدمة
        </Button>
        {isSubmitted ? (
          <p className="text-center text-sm font-bold text-green-600">
            تم استقبال طلبك بنجاح سيتم التواصل معك في اقرب وقت ممكن
          </p>
        ) : (
          ""
        )}
        {errors.root?.message && (
          <span className="text-sm text-red-600">{errors.root.message}</span>
        )}
        <DevTool control={control} />
      </form>
    </div>
  )
}

export default ContactUs
