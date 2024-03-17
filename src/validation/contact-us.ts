import { z } from "zod"

const ContactUsSchema = z.object({
  name: z.string().min(1, "الرجاء ادخال الاسم بالكامل."),
  jobTitle: z.string().min(1, "الرجاء ادخال المسمى الوظيفي"),
  phoneNumber: z
    .string()
    .min(1, "رقم التواصل مطلوب")
    .regex(/^(966)\d{7}$/, "رقم غير صحيح"),
  email: z.string().email("يرجى كتابة ايميل صحيح"),
})

export { ContactUsSchema }
