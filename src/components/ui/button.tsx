import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-terminal font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-matrix-dark border-2 border-matrix-green-300 text-matrix-green-100 hover:bg-matrix-green-500 hover:shadow-glow-green-soft hover:animate-pulse",
        destructive:
          "bg-matrix-dark border-2 border-red-500 text-red-400 hover:bg-red-950 hover:shadow-glow-red hover:animate-pulse",
        outline:
          "border-2 border-matrix-green-400 bg-transparent text-matrix-green-200 hover:bg-matrix-green-500/20 hover:border-matrix-green-100 hover:text-matrix-green-100 hover:shadow-glow-green-soft",
        secondary:
          "bg-matrix-green-500 border-2 border-matrix-green-400 text-matrix-green-100 hover:bg-matrix-green-400 hover:shadow-glow-green-soft",
        ghost: "text-matrix-green-200 hover:bg-matrix-green-500/20 hover:text-matrix-green-100",
        link: "text-matrix-green-100 underline-offset-4 hover:underline hover:text-matrix-amber",
        terminal: "bg-matrix-black border border-matrix-green-300 text-matrix-green-100 font-mono tracking-wider hover:border-matrix-green-100 hover:shadow-glow-green-soft before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-matrix-green-100/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
