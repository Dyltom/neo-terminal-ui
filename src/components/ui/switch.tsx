import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "data-[state=checked]:bg-matrix-green-500 data-[state=unchecked]:bg-matrix-green-300/30 shadow-glow-green-soft hover:shadow-glow-green",
        terminal:
          "data-[state=checked]:bg-matrix-green-100 data-[state=unchecked]:bg-matrix-green-100/20 hover:shadow-glow-green border-matrix-green-100/30",
        error:
          "data-[state=checked]:bg-red-500 data-[state=unchecked]:bg-red-500/30 shadow-glow-red border-red-500/50",
        success:
          "data-[state=checked]:bg-matrix-green-100 data-[state=unchecked]:bg-matrix-green-100/30 shadow-glow-green-soft hover:shadow-glow-green border-matrix-green-100/30",
      },
      size: {
        sm: "h-5 w-9",
        default: "h-6 w-11",
        lg: "h-7 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform",
  {
    variants: {
      variant: {
        default: "bg-matrix-green-100 shadow-glow-green-soft",
        terminal: "bg-matrix-black border border-matrix-green-100",
        error: "bg-red-100 shadow-glow-red",
        success: "bg-matrix-green-100 shadow-glow-green-soft",
      },
      size: {
        sm: "h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
        default: "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        lg: "h-6 w-6 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, variant, size, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(switchVariants({ variant, size }), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(switchThumbVariants({ variant, size }))}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }