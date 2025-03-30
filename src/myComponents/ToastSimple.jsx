"use client"

import { useToast } from "@/hooks/use-toast.ts"
import { Button } from "@/components/ui/button"

const ToastSimple = ()=> {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}

export default ToastSimple;