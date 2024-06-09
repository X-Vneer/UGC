import React from "react"
import { Control, FieldError, FieldErrors, UseFormRegister } from "react-hook-form"

import { InputField, RadioGroup } from "./reusable-components"
import { ServiceInformationType } from "./types"

interface UGCFormProps {
  control: Control<ServiceInformationType>
  register: UseFormRegister<ServiceInformationType>
  errors: FieldErrors<ServiceInformationType>
  watch: (name: string) => any
}

const UGCForm: React.FC<UGCFormProps> = ({ control, register, errors, watch }) => (
  <>
    <RadioGroup
      name="serviceType"
      options={[
        { label: "حملة", value: "campaign" },
        { label: "فيديو", value: "video" },
      ]}
      register={register}
      errors={errors}
    />
    {watch("serviceType") === "campaign" && (
      <RadioGroup
        small
        name="numberOfVideos"
        options={[
          { label: "15", value: "15" },
          { label: "20", value: "20" },
          { label: "30", value: "30" },
          { label: "اكتر", value: "more" },
        ]}
        register={register}
        errors={errors}
      />
    )}
    <InputField
      control={control}
      name="likedVideo"
      label="رابط لفديو اعجبك"
      placeholder="رابط لفديو اعجبك"
      errors={errors}
    />
  </>
)

export default UGCForm
