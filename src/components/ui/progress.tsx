import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const progressVariants = cva(
  "relative h-4 w-full overflow-hidden rounded-full border-2",
  {
    variants: {
      variant: {
        default:
          "border-matrix-green-300 bg-matrix-dark shadow-glow-green-soft",
        terminal:
          "border-matrix-green-100 bg-matrix-black shadow-glow-green",
        error:
          "border-red-500 bg-red-950/50 shadow-glow-red",
        success:
          "border-matrix-green-100 bg-matrix-dark shadow-glow-green",
      },
      size: {
        sm: "h-2",
        default: "h-4",
        lg: "h-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const progressIndicatorVariants = cva(
  "h-full w-full flex-1 transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-matrix-green-300 to-matrix-green-500 shadow-glow-green-soft",
        terminal:
          "bg-gradient-to-r from-matrix-green-100 to-matrix-green-300 shadow-glow-green-soft",
        error:
          "bg-gradient-to-r from-red-500 to-red-300 shadow-glow-red",
        success:
          "bg-gradient-to-r from-matrix-green-100 to-matrix-green-300 shadow-glow-green",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  value?: number
  max?: number
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, variant, size, max = 100, ...props }, ref) => {
  // Clamp value between 0 and max
  const clampedValue = value !== undefined ? Math.min(Math.max(0, value), max) : undefined
  const percentage = clampedValue !== undefined ? (clampedValue / max) * 100 : 0

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(progressVariants({ variant, size }), className)}
      value={clampedValue}
      max={max}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(progressIndicatorVariants({ variant }))}
        style={{ transform: `translateX(-${100 - percentage}%)` }}
        data-testid="progress-indicator"
      />
    </ProgressPrimitive.Root>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }