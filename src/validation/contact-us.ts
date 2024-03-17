import { z } from "zod"

const PersonalDataSchema = z.object({
  name: z.string().min(1, "الرجاء ادخال الاسم بالكامل."),
  jobTitle: z.string().min(1, "الرجاء ادخال المسمى الوظيفي"),
  phoneNumber: z
    .string()
    .min(1, "رقم التواصل مطلوب")
    .regex(/^(966)\d{7}$/, "الرجاء استخدام رقم سعودي"),
  email: z.string().email("يرجى كتابة ايميل صحيح"),
})
const BrandInformationSchema = z.object({
  brandName: z.string().min(1, "الرجاء ادخال اسم العلامة التجارية."),
  brandField: z.string().min(1, "مجال العلامة التجارية مطلوب. "),
  brandDescription: z.string().min(100, "الرجاء كتابة نبذة مبسطة "),
})

export { PersonalDataSchema, BrandInformationSchema }
