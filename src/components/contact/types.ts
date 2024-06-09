import {
  BrandInformationSchema,
  PersonalDataSchema,
  ServiceInformationSchema,
} from "@/validation/contact-us"
import { z } from "zod"

export type ServiceInformationType = z.infer<typeof ServiceInformationSchema>
export type BrandInformationType = z.infer<typeof BrandInformationSchema>
export type PersonalDataType = z.infer<typeof PersonalDataSchema>
