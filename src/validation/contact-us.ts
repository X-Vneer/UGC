import { z } from "zod"

export const phoneNumberSchema = z
  .string()
  .regex(/^\+?(966)?5\d{8}$/, "الرجاء استخدام رقم سعودي")
  .refine(
    (number) => {
      if (
        (number.length === 9 && number.startsWith("966")) ||
        (number.startsWith("+966") && number.length === 10)
      ) {
        return false
      }
      return true
    },
    {
      message: "الرجاء استخدام رقم سعودي",
    },
  )

const PersonalDataSchema = z.object({
  name: z.string().min(1, "الرجاء ادخال الاسم بالكامل."),
  jobTitle: z.string().min(1, "الرجاء ادخال المسمى الوظيفي"),
  phoneNumber: phoneNumberSchema,
  email: z.string().email("يرجى كتابة ايميل صحيح"),
})
const BrandInformationSchema = z.object({
  brandName: z.string().min(1, "الرجاء ادخال اسم العلامة التجارية."),
  brandField: z.string().min(1, "مجال العلامة التجارية مطلوب. "),
  brandDescription: z.string().min(100, "الرجاء كتابة نبذة مبسطة "),
})

const ServiceInformationSchema = z
  .object({
    videosType: z.enum(["ugc", "models"]),
    serviceType: z.enum(["campaign", "video"]),
    numberOfVideos: z.enum(["15", "20", "30", "more"]).optional(),
    likedVideo: z.string().optional(),
    videoType: z.enum(["homemade", "liveCoverage"]),
    contentCreatorSex: z.enum(["male", "female", "both"]),
    modalReservation: z.enum(["1", "2"]).optional(),
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
  .refine(
    (obj) => {
      if (obj.videosType === "ugc") {
        return z.string().url().safeParse(obj.likedVideo).success
      }
      return true
    },
    {
      message: " !رابط غير صالح",
      path: ["likedVideo"],
    },
  )

export { PersonalDataSchema, BrandInformationSchema, ServiceInformationSchema }
