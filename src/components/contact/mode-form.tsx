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
  </>
)

export default ModelsForm
