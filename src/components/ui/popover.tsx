import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const popoverContentVariants = cva(
  "z-50 rounded-md border-2 bg-popover text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default:
          "border-matrix-green-300 bg-matrix-dark text-matrix-green-100 shadow-glow-green-soft",
        terminal:
          "border-matrix-green-100 bg-matrix-black text-matrix-green-100 shadow-glow-green font-mono",
        error:
          "border-red-500 bg-red-950/50 text-red-100 shadow-glow-red",
        success:
          "border-matrix-green-100 bg-matrix-dark text-matrix-green-100 shadow-glow-green",
        warning:
          "border-yellow-500 bg-yellow-950/50 text-yellow-100 shadow-glow-yellow",
      },
      size: {
        sm: "w-56 p-3",
        default: "w-72 p-4",
        lg: "w-96 p-6",
        xl: "w-[32rem] p-8",
        auto: "min-w-32 p-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    VariantProps<typeof popoverContentVariants> {}

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverClose = PopoverPrimitive.Close

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ className, variant, size, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(popoverContentVariants({ variant, size }), className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor, PopoverClose }