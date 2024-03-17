import { z } from "zod"

const PersonalDataSchema = z.object({
  name: z.string().min(1, "الرجاء ادخال الاسم بالكامل."),
  jobTitle: z.string().min(1, "الرجاء ادخال المسمى الوظيفي"),
  phoneNumber: z
    .string()
    .min(1, "رقم التواصل مطلوب")
    .regex(/^(966)\d{9}$/, "الرجاء استخدام رقم سعودي"),
  email: z.string().email("يرجى كتابة ايميل صحيح"),
})
const BrandInformationSchema = z.object({
  brandName: z.string().min(1, "الرجاء ادخال اسم العلامة التجارية."),
  brandField: z.string().min(1, "مجال العلامة التجارية مطلوب. "),
  brandDescription: z.string().min(50, "الرجاء كتابة نبذة مبسطة "),
})

const ServiceInformationSchema = z
  .object({
    serviceType: z.enum(["campaign", "video"]),
    numberOfVideos: z.enum(["15", "20", "30", "more"]).optional(),
    likedVideo: z.string().url("رابط غير صالح"),
    videoType: z.enum(["homemade", "liveCoverage"]),
    contentCreatorSex: z.enum(["male", "female", "both"]),
  })
  .refine(
    (obj) => {
      if (obj.serviceType === "campaign") {
        return !!obj.numberOfVideos
      }
      return true
    },
    {
      message: "يرجى اختيار عدد الفديوهات المطلوبة",
      path: ["numberOfVideos"],
    },
  )

export { PersonalDataSchema, BrandInformationSchema, ServiceInformationSchema }
