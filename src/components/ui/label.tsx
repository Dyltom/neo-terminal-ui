import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-terminal font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-matrix-green-100 tracking-wide uppercase transition-all duration-200",
  {
    variants: {
      variant: {
        default: "",
        terminal: "font-mono text-matrix-green-100 border-l-2 border-matrix-green-300 pl-2 bg-matrix-black/50",
        error: "text-red-400 border-l-2 border-red-500 pl-2",
        success: "text-matrix-green-100 border-l-2 border-matrix-green-100 pl-2 shadow-glow-green-soft",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, variant, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant }), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }