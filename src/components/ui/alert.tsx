import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full border-2 p-4 font-terminal [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground animate-slideUp",
  {
    variants: {
      variant: {
        default: "border-matrix-green-300 bg-matrix-dark/95 text-matrix-green-100 shadow-glow-green-soft [&>svg]:text-matrix-green-100",
        destructive:
          "border-red-500 bg-red-950/95 text-red-400 shadow-glow-red [&>svg]:text-red-400",
        warning:
          "border-amber-500 bg-amber-950/95 text-amber-400 shadow-glow-amber [&>svg]:text-amber-400",
        info:
          "border-matrix-green-400 bg-matrix-green-500/20 text-matrix-green-200 shadow-glow-green-soft [&>svg]:text-matrix-green-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-terminal font-bold leading-none tracking-wider uppercase text-sm", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-terminal tracking-wide [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
