import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border px-2.5 py-0.5 text-xs font-terminal font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 tracking-wider uppercase",
  {
    variants: {
      variant: {
        default:
          "border-matrix-green-300 bg-matrix-green-500/20 text-matrix-green-100 shadow-glow-green-soft hover:bg-matrix-green-500/40 hover:shadow-glow-green",
        secondary:
          "border-matrix-green-400 bg-matrix-dark text-matrix-green-200 hover:bg-matrix-green-500/20 hover:text-matrix-green-100",
        destructive:
          "border-red-500 bg-red-950/50 text-red-400 shadow-glow-red hover:bg-red-950 hover:text-red-300",
        outline: "border-matrix-green-400 bg-transparent text-matrix-green-200 hover:bg-matrix-green-500/20 hover:text-matrix-green-100",
        amber: "border-amber-500 bg-amber-950/50 text-amber-400 shadow-glow-amber hover:bg-amber-950 hover:text-amber-300",
        terminal: "border-matrix-green-300 bg-matrix-black text-matrix-green-100 font-mono before:content-['['] after:content-[']'] hover:shadow-glow-green-soft",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
