import React from "react"
import { Control, FieldError, FieldErrors, UseFormRegister } from "react-hook-form"

import { InputField, RadioGroup } from "./reusable-components"
import { ServiceInformationType } from "./types"

interface ModelsFormProps {
  control: Control<ServiceInformationType>
  register: UseFormRegister<ServiceInformationType>
  errors: FieldErrors<ServiceInformationType>
}

const ModelsForm: React.FC<ModelsFormProps> = ({ control, register, errors }) => (
  <>
    <InputField
      control={control}
      name="numberOfModules"
      label="العدد"
      placeholder="العدد"
      errors={errors}
    />
    <RadioGroup
      name="modalReservation"
      options={[
        { label: "جلسة تصوير مع مودل", value: "1" },
        { label: "مودل فقط", value: "2" },
      ]}
      register={register}
      errors={errors}
    />
  </>
)

export default ModelsForm
