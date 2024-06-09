"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Script from "next/script"
import {
  BrandInformationSchema,
  PersonalDataSchema,
  ServiceInformationSchema,
} from "@/validation/contact-us"
import axios, { AxiosRequestConfig } from "axios"
import { toast } from "sonner"

// import PayPalButton from "@/components/ui/paypal-buttons"
import Stepper from "@/components/ui/stepper"

import { useFormContext } from "../context/context"

declare global {
  interface Window {
    Moyasar?: any
  }
}

const errorMessages = {
  "INSUFFICIENT FUNDS": "لا يوجد رصيد كافي في البطاقة.",
  DECLINED: "عملية مرفوضة من بنك العميل، يجب إستخدام بطاقة أخرى بديلة.",
  BLOCKED:
    'البنك المحصل للأموال قام بحجب العملية دون تحديد سبب لذلك "قد يكون إشتباه لعملية إحتيال".',
  "Allowed time frame for transaction has been expired":
    "إستغرقت عملية الدفع وقت أطول (أكثر من المسموح 15 دقيقة) ثم فشلت، إما بسبب تأخر رسالة البنك التي تحتوي على رمز التحقق إلى الهاتف المحمول الخاص بالعميل أو بسبب تأخر العميل في إكمالها.",
  "UNSPECIFIED FAILURE":
    "رفض بنك العميل العملية لسبب غير محدد في نظامهم، يجب على العميل إستخدام بطاقة أخرى بديلة.",
  "EXPIRED CARD": "فشلت العملية بسبب إنتهاء البطاقة.",
  "TIMED OUT":
    "فشل الإتصال مع بنك العميل، يجب على العميل محاولة معالجة العملية مره أخرى.",
  "Value 'xxxx' is invalid. value: xxxx - reason: Invalid secure code length":
    "تم إدخال رمز الأمان (CVC/CVV) بشكل خاطئ من قِبل حامل البطاقة.",
  REFERRED: "أشار بنك العميل إلى وجود مشكلة في رقم بطاقة الإئتمان.",
  "3-D Secure transaction attempt failed (AUTHENTICATION_FAILED)":
    "المصادقة غير ناجحة أو قد تم إلغاؤها من قِبل حامل البطاقة.",
  "3-D Secure transaction attempt failed (AUTHENTICATION_ATTEMPTED)":
    "إما أن يكون حامل البطاقة أو البنك المصدر للبطاقة غير مسجل في خدمة التحقق الأمني 3D-Secure، مصادقة البطاقة 3D-Secure غير ناجحة.",
  "3-D Secure transaction attempt failed (AUTHENTICATION_NOT_AVAILABLE)":
    "إما أن يكون حامل البطاقة أو البنك المصدر للبطاقة غير مسجل في خدمة التحقق الأمني 3D-Secure، مصادقة البطاقة 3D-Secure غير ناجحة.",
  "3-D Secure transaction attempt failed (Missing parameter)":
    "حدث خطأ في المصادقة.",
  "3-D Secure transaction attempt failed (Relationship not found for merchantID XXX, card type VC)":
    "لم يتاح لحساب التاجر من قِبل البنك بإستقبال عمليات فيزا.",
  "3-D Secure transaction attempt failed (Relationship not found for merchantID XXX, card type MC)":
    "لم يتاح لحساب التاجر من قِبل البنك بإستقبال عمليات ماستركارد.",
  "3-D Secure transaction attempt failed (CARD_NOT_ENROLLED)":
    "البطاقة غير مدرجة في خدمة التحقق الأمني 3D-Secure يجب على حامل البطاقة التواصل مع البنك الذي يتعامل معه لتمكين البطاقة من الدفع عبر الإنترنت. أو قد تم إدخال رقم البطاقة بشكل غير صحيح من قِبل حامل البطاقة.",
  "3-D Secure transaction attempt failed (Value 'xxx' is invalid. Cannot determine card brand)":
    "تم إدخال رقم البطاقة بشكل غير صحيح من قِبل حامل البطاقة.",
  "3-D Secure transaction attempt failed (Value 'xxx' is invalid. Unable to determine card payment)":
    "تم إدخال رقم البطاقة بشكل غير صحيح من قِبل حامل البطاقة.",
  "3-D Secure transaction attempt failed (Value 'xxx' is invalid. Amount exceeds maximum allowed limit)":
    "المبلغ تجاوز الحد الأقصى و المسموح لكل عملية.",
}

export default function ContactUs({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
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

  const initMoyasar = () => {
    if (typeof window !== "undefined" && window.Moyasar) {
      window.Moyasar.init({
        element: ".mysr-form",
        amount: 10000,
        currency: "SAR",
        description: "Coffee Order #1",
        publishable_api_key: "pk_test_FDYvD7Gi9DKzDa2TJUFV8XcF7Qo6zuBBJkb4crMN",
        callback_url: "http://localhost:3000/contact-us/payment",
        methods: ["creditcard"],
      })
    }
  }

  const status = searchParams.status
  let message = searchParams.message
  console.log("🚀 ~ message:", message)
  if (status == "paid")
    message =
      "عملية الدفع تمت بنجاح. سيتم التواصل معك من قبل ادارة Trend UGC في اقرب وقت ممكن"
  if (status === "failed")
    message = errorMessages[message as keyof typeof errorMessages]

  return (
    <>
      <Script
        src="https://cdn.moyasar.com/mpf/1.13.0/moyasar.js"
        onLoad={initMoyasar}></Script>

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
          {status ? null : <div id="moyasar-form" className="mysr-form"></div>}
          <div className="py-10 text-center">
            {status === "paid" ? (
              <div className="mb-4 text-green-500">
                <h2 className="text-2xl font-semibold">Payment Successful</h2>
                <p>{message}</p>
              </div>
            ) : null}
            {status === "failed" ? (
              <div className="mb-4 text-red-500">
                <h2 className="text-2xl font-semibold">Payment Failed</h2>
                <p>{message || "فشلت عملية الدفع"}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}
