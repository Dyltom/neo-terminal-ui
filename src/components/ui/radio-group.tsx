import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Custom circle icon for Matrix theme
const CircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
  >
    <circle cx="12" cy="12" r="4" />
  </svg>
)

const radioGroupVariants = cva(
  "grid gap-2",
  {
    variants: {
      orientation: {
        vertical: "grid gap-2",
        horizontal: "flex gap-2",
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
)

const radioGroupItemVariants = cva(
  "aspect-square h-4 w-4 rounded-full border-2 text-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "border-matrix-green-300 bg-matrix-dark text-matrix-green-100 data-[state=checked]:bg-matrix-green-500 data-[state=checked]:border-matrix-green-100 hover:border-matrix-green-100 shadow-glow-green-soft",
        terminal:
          "border-matrix-green-100 bg-matrix-black text-matrix-green-100 data-[state=checked]:bg-matrix-green-100 data-[state=checked]:text-matrix-black hover:shadow-glow-green font-mono",
        error:
          "border-red-500 bg-red-950/50 text-red-100 data-[state=checked]:bg-red-500 data-[state=checked]:text-red-950 hover:border-red-400 shadow-glow-red",
        success:
          "border-matrix-green-100 bg-matrix-dark text-matrix-green-100 data-[state=checked]:bg-matrix-green-100 data-[state=checked]:text-matrix-dark shadow-glow-green-soft hover:shadow-glow-green",
      },
      size: {
        sm: "h-3 w-3",
        default: "h-4 w-4",
        lg: "h-5 w-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface RadioGroupProps
  extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, 'orientation'>,
    VariantProps<typeof radioGroupVariants> {}

export interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, orientation, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(radioGroupVariants({ orientation }), className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupItemVariants({ variant, size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <CircleIcon className="h-2.5 w-2.5 fill-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }