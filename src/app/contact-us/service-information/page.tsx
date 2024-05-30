"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  BrandInformationSchema,
  PersonalDataSchema,
  ServiceInformationSchema,
} from "@/validation/contact-us"
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
    watch,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
    register,
  } = useForm<z.infer<typeof ServiceInformationSchema>>({
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
  const { formData } = useFormContext()
  const { updateFormData } = useFormContext()
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

  const onSubmit = handleSubmit((data) => {
    updateFormData(data)
    Router.push("/contact-us/payment")
  })

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
          activeStep={3}
        />
      </div>

      <form onSubmit={onSubmit} className="mt-5 space-y-5" noValidate>
        <div>
          <p className="mb-2  font-medium text-gray-700">نوع الخدمة</p>

          <fieldset className="grid grid-cols-2 gap-4">
            <legend className="sr-only">نوع الخدمة</legend>
            <div>
              <label className="flex cursor-pointer justify-between gap-3 rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
                <div>
                  <p className="text-sm text-gray-700"> UGC</p>
                </div>

                <input
                  type="radio"
                  {...register("videosType")}
                  value="ugc"
                  className="size-4 border-gray-300 text-secondary"
                />
              </label>
            </div>
            <div>
              <label className="flex cursor-pointer justify-between gap-3 rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
                <div>
                  <p className="text-sm text-gray-700">Model</p>
                </div>

                <input
                  type="radio"
                  {...register("videosType")}
                  value="models"
                  className="size-4 border-gray-300 text-secondary"
                />
              </label>
            </div>
          </fieldset>
        </div>
        {watch("videosType") === "models" ? null : (
          <div>
            <fieldset className="grid grid-cols-2 gap-4">
              <legend className="sr-only">نوع الحملة</legend>
              <div>
                <label className="flex cursor-pointer justify-between gap-3 rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
                  <div>
                    <p className="text-sm text-gray-700">حملة</p>
                  </div>

                  <input
                    type="radio"
                    {...register("serviceType")}
                    value="campaign"
                    className="size-4 border-gray-300 text-secondary"
                  />
                </label>
              </div>
              <div>
                <label className="flex cursor-pointer justify-between gap-3 rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
                  <div>
                    <p className="text-sm text-gray-700">فيديو</p>
                  </div>

                  <input
                    type="radio"
                    {...register("serviceType")}
                    value="video"
                    className="size-4 border-gray-300 text-secondary"
                  />
                </label>
              </div>
            </fieldset>
            {errors.serviceType?.message ? (
              <span className=" text-sm text-red-600">
                {errors.serviceType.message}
              </span>
            ) : null}
          </div>
        )}

        {watch("videosType") === "ugc" && watch("serviceType") === "campaign" ? (
          <div>
            <p className="mb-2 font-medium text-gray-700">عددالمقاطع</p>

            <fieldset className="flex flex-wrap gap-3">
              <div>
                <label className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:bg-secondary has-[:checked]:text-white">
                  <input
                    type="radio"
                    {...register("numberOfVideos")}
                    value={"15"}
                    className="sr-only"
                  />

                  <p className="text-sm font-medium">15</p>
                </label>
              </div>

              <div>
                <label className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:bg-secondary has-[:checked]:text-white">
                  <input
                    type="radio"
                    {...register("numberOfVideos")}
                    value={"20"}
                    className="sr-only"
                  />

                  <p className="text-sm font-medium">20</p>
                </label>
              </div>

              <div>
                <label className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:bg-secondary has-[:checked]:text-white">
                  <input
                    type="radio"
                    {...register("numberOfVideos")}
                    value={"30"}
                    className="sr-only"
                  />

                  <p className="text-sm font-medium">30</p>
                </label>
              </div>

              <div>
                <label className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:bg-secondary has-[:checked]:text-white">
                  <input
                    type="radio"
                    {...register("numberOfVideos")}
                    value={"more"}
                    className="sr-only"
                  />

                  <p className="text-sm font-medium">اكتر</p>
                </label>
              </div>
            </fieldset>
            {errors.numberOfVideos?.message ? (
              <span className=" text-sm text-red-600">
                {errors.numberOfVideos.message}
              </span>
            ) : null}
          </div>
        ) : null}

        {watch("videosType") === "models" ? (
          <div>
            <Controller
              control={control}
              name="numberOfModules"
              render={({ field }) => {
                return (
                  <Input
                    error={errors.numberOfModules}
                    placeholder="العدد"
                    {...field}
                    required
                    label="العدد"
                  />
                )
              }}
            />
          </div>
        ) : null}
        {watch("videosType") === "ugc" ? (
          <Controller
            control={control}
            name="likedVideo"
            render={({ field }) => {
              return (
                <Input
                  error={errors.likedVideo}
                  placeholder="رابط لفديو اعجبك"
                  {...field}
                  required
                  label="رابط لفديو اعجبك"
                />
              )
            }}
          />
        ) : null}

        <div>
          {watch("videosType") === "ugc" ? (
            <p className="mb-2 font-medium text-gray-700">جنس صانع المحتوى</p>
          ) : (
            <p className="mb-2 font-medium text-gray-700">الجنس</p>
          )}

          <fieldset className="flex flex-wrap gap-3">
            <div>
              <label className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:bg-secondary has-[:checked]:text-white">
                <input
                  type="radio"
                  {...register("contentCreatorSex")}
                  value={"male"}
                  className="sr-only"
                />

                <p className="text-sm font-medium">ذكر</p>
              </label>
            </div>

            <div>
              <label className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:bg-secondary has-[:checked]:text-white">
                <input
                  type="radio"
                  {...register("contentCreatorSex")}
                  value={"female"}
                  className="sr-only"
                />

                <p className="text-sm font-medium">أنثى</p>
              </label>
            </div>

            <div>
              <label className="flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:bg-secondary has-[:checked]:text-white">
                <input
                  type="radio"
                  {...register("contentCreatorSex")}
                  value={"both"}
                  className="sr-only"
                />

                <p className="text-sm font-medium">كلاهما</p>
              </label>
            </div>
          </fieldset>
          {errors.contentCreatorSex?.message ? (
            <span className=" text-sm text-red-600">
              {errors.contentCreatorSex.message}
            </span>
          ) : null}
        </div>

        {watch("videosType") === "models" ? (
          <div>
            <p className="mb-2  font-medium text-gray-700">نوع الحجز</p>
            <fieldset className="grid grid-cols-2 gap-4">
              <legend className="sr-only">نوع الحجز</legend>
              <div>
                <label className="flex cursor-pointer justify-between gap-3 rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
                  <div>
                    <p className="text-sm text-gray-700">جلسة تصوير مع مودل</p>
                  </div>

                  <input
                    type="radio"
                    {...register("modalReservation")}
                    value="1"
                    className="size-4 border-gray-300 text-secondary"
                  />
                </label>
              </div>
              <div>
                <label className="flex cursor-pointer justify-between gap-3 rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
                  <div>
                    <p className="text-sm text-gray-700"> مودل فقط</p>
                  </div>

                  <input
                    type="radio"
                    {...register("modalReservation")}
                    value="2"
                    className="size-4 border-gray-300 text-secondary"
                  />
                </label>
              </div>
            </fieldset>
            {errors.modalReservation?.message ? (
              <span className=" text-sm text-red-600">
                {errors.modalReservation.message}
              </span>
            ) : null}
          </div>
        ) : (
          <div>
            <p className="mb-2  font-medium text-gray-700">نوع الفديو</p>

            <fieldset className="grid grid-cols-2 gap-4">
              <legend className="sr-only">نوع الفديو</legend>
              <div>
                <label className="flex cursor-pointer justify-between gap-3 rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
                  <div>
                    <p className="text-sm text-gray-700">منتج تصوير منزلي</p>
                  </div>

                  <input
                    type="radio"
                    {...register("videoType")}
                    value="homemade"
                    className="size-4 border-gray-300 text-secondary"
                  />
                </label>
              </div>
              <div>
                <label className="flex cursor-pointer justify-between gap-3 rounded-lg border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
                  <div>
                    <p className="text-sm text-gray-700">تغطية حية</p>
                  </div>

                  <input
                    type="radio"
                    {...register("videoType")}
                    value="liveCoverage"
                    className="size-4 border-gray-300 text-secondary"
                  />
                </label>
              </div>
            </fieldset>
            {errors.videoType?.message ? (
              <span className=" text-sm text-red-600">
                {errors.videoType.message}
              </span>
            ) : null}
          </div>
        )}

        <Button isLoading={isSubmitting} className="w-full rounded-md" type="submit">
          اطلب الخدمة
        </Button>
        {errors.root?.message ? (
          <span className=" text-sm text-red-600">{errors.root.message}</span>
        ) : null}

        <DevTool control={control} />
      </form>
    </div>
  )
}
