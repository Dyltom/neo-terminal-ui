import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const separatorVariants = cva(
  "shrink-0 bg-matrix-green-300 shadow-glow-green-soft transition-all duration-200",
  {
    variants: {
      variant: {
        default: "",
        terminal: "bg-matrix-green-100 shadow-glow-green relative before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-matrix-green-100/50 before:to-transparent before:animate-pulse",
        dashed: "border-t border-dashed border-matrix-green-300 bg-transparent shadow-none",
        dotted: "border-t border-dotted border-matrix-green-300 bg-transparent shadow-none",
        glitch: "bg-matrix-green-100 animate-pulse shadow-glow-green",
      },
      orientation: {
        horizontal: "h-[1px] w-full",
        vertical: "h-full w-[1px]",
      },
    },
    compoundVariants: [
      {
        variant: "dashed",
        orientation: "vertical",
        class: "border-t-0 border-l border-dashed h-full w-[1px]",
      },
      {
        variant: "dotted",
        orientation: "vertical",
        class: "border-t-0 border-l border-dotted h-full w-[1px]",
      },
    ],
    defaultVariants: {
      variant: "default",
      orientation: "horizontal",
    },
  }
)

export interface SeparatorProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, 'orientation'>,
    VariantProps<typeof separatorVariants> {
  orientation?: "horizontal" | "vertical"
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(({ className, orientation = "horizontal", variant, decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(separatorVariants({ variant, orientation }), className)}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }