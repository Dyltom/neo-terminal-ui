import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full bg-matrix-dark border-2 border-matrix-green-400 px-3 py-2 text-base font-terminal tracking-wider text-matrix-green-100 transition-all duration-200 placeholder:text-matrix-green-500 focus-visible:outline-none focus-visible:border-matrix-green-100 focus-visible:shadow-glow-green-soft focus-visible:bg-matrix-green-500/10 disabled:cursor-not-allowed disabled:opacity-50 resize-none md:text-sm scrollbar-terminal",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
