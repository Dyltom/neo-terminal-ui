import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "terminal-input flex h-10 w-full bg-matrix-dark border-0 border-b-2 border-matrix-green-400 px-3 py-2 text-base font-terminal tracking-wider text-matrix-green-100 transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-matrix-green-100 placeholder:text-matrix-green-500 focus-visible:outline-none focus-visible:border-matrix-green-100 focus-visible:shadow-[0_2px_0_var(--matrix-green-100)] focus-visible:bg-matrix-green-500/10 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
