import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        terminal:
          "border-2 border-matrix-green-100 bg-matrix-black text-matrix-green-100 hover:bg-matrix-green-100/10 hover:shadow-glow-green-soft data-[state=on]:bg-matrix-green-100/20 data-[state=on]:shadow-glow-green font-mono",
        error:
          "border-2 border-red-500 bg-red-950/50 text-red-100 hover:bg-red-500/10 hover:shadow-glow-red data-[state=on]:bg-red-500/20 data-[state=on]:shadow-glow-red",
        success:
          "border-2 border-matrix-green-100 bg-matrix-dark text-matrix-green-100 hover:bg-matrix-green-100/10 hover:shadow-glow-green data-[state=on]:bg-matrix-green-100/20 data-[state=on]:shadow-glow-green",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const toggleGroupVariants = cva(
  "inline-flex items-center justify-center rounded-md border-2",
  {
    variants: {
      variant: {
        default: "border-input bg-transparent",
        terminal:
          "border-matrix-green-100 bg-matrix-black shadow-glow-green",
        error:
          "border-red-500 bg-red-950/50 shadow-glow-red",
        success:
          "border-matrix-green-100 bg-matrix-dark shadow-glow-green",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const toggleGroupItemVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground first:rounded-l-sm last:rounded-r-sm",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-accent hover:text-accent-foreground",
        terminal:
          "bg-transparent text-matrix-green-100 hover:bg-matrix-green-100/10 hover:shadow-glow-green-soft data-[state=on]:bg-matrix-green-100/20 data-[state=on]:shadow-glow-green font-mono",
        error:
          "bg-transparent text-red-100 hover:bg-red-500/10 hover:shadow-glow-red data-[state=on]:bg-red-500/20 data-[state=on]:shadow-glow-red",
        success:
          "bg-transparent text-matrix-green-100 hover:bg-matrix-green-100/10 hover:shadow-glow-green data-[state=on]:bg-matrix-green-100/20 data-[state=on]:shadow-glow-green",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

export interface ToggleGroupProps
  extends VariantProps<typeof toggleGroupVariants> {
  className?: string
  children?: React.ReactNode
}

export interface ToggleGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>,
    VariantProps<typeof toggleGroupItemVariants> {}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size }), className)}
    {...props}
  />
))
Toggle.displayName = TogglePrimitive.Root.displayName

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> & ToggleGroupProps
>(({ className, variant, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(toggleGroupVariants({ variant }), className)}
    {...props}
  />
))
ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  ToggleGroupItemProps
>(({ className, variant, size, ...props }, ref) => (
  <ToggleGroupPrimitive.Item
    ref={ref}
    className={cn(toggleGroupItemVariants({ variant, size }), className)}
    {...props}
  />
))
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName

export { Toggle, ToggleGroup, ToggleGroupItem }