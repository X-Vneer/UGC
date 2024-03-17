import React from "react"

import { cn } from "@/lib/utils"

type Props = {
  steps: React.ReactNode[]
  activeStep: number
}

const Stepper = ({ steps, activeStep }: Props) => {
  return (
    <div>
      <h2 className="sr-only">Steps</h2>
      <div className="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100">
        <ol className="relative z-10 flex justify-between text-sm font-medium text-gray-500">
          {steps.map((element, index) => {
            return (
              <li
                key={`step_${index}`}
                className="flex items-center gap-2 bg-white p-2">
                <span
                  className={cn(
                    "size-6 rounded-full  text-center text-[10px]/6 font-bold",
                    index + 1 <= activeStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100",
                  )}>
                  {index + 1}
                </span>

                <span className="hidden sm:block"> {element} </span>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default Stepper
