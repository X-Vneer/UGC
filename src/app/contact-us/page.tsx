"use client"

import { ContactUsSchema } from "@/validation/contact-us"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"

export default function ContactUs() {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    control,
    watch,
  } = useForm<z.infer<typeof ContactUsSchema>>({
    resolver: zodResolver(ContactUsSchema),
    defaultValues: {
      name: "",
    },
  })

  console.log(watch("name"))
  const onSubmit = handleSubmit((data) => {
    console.log("🚀 ~ file: page.tsx:100 ~ onSubmit ~ data:", data)
    // TODO handle form submit
  })

  return (
    <div>
      <h1 className="flex items-center gap-2 text-3xl font-semibold  leading-loose">
        كن ترند الان
      </h1>
      <p className=" font-medium text-gray-500">اضف بخطوات بسيطة</p>

      <form onSubmit={onSubmit} className="mt-10  space-y-5" noValidate>
        <Input placeholder="الاسم" {...register("name")} required label="الاسم" />

        <Button type="submit">التالي</Button>
        <DevTool control={control} />
      </form>
    </div>
  )
}
