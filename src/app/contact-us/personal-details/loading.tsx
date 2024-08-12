import React from "react"
import { Loader2 } from "lucide-react"

type Props = {}

const loading = (props: Props) => {
  return (
    <div className="flex h-svh items-center justify-center">
      <Loader2 className="size-14 animate-spin " />
    </div>
  )
}

export default loading
