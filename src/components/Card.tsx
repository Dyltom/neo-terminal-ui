import * as React from "react"
import { cn } from "@lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(
  "relative overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-matrix-dark/95 border border-matrix-green-300 shadow-terminal",
        ghost: "bg-transparent border border-matrix-green-100/20",
        terminal: "bg-matrix-black border-2 border-matrix-green-100 shadow-glow-green-soft",
        crt: "bg-matrix-dark/95 border border-matrix-green-300 shadow-terminal before:absolute before:inset-0 before:pointer-events-none before:z-10 before:bg-gradient-to-b before:from-transparent before:via-matrix-green-100/[0.03] before:to-transparent before:bg-[length:100%_4px] before:animate-scanlines",
      },
      hover: {
        true: "hover:shadow-glow-green hover:border-matrix-green-100 hover:scale-[1.02]",
      },
      pulse: {
        true: "animate-pulse",
      },
      glitch: {
        true: "animate-glitch",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, pulse, glitch, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, hover, pulse, glitch }), className)}
      {...props}
    />
  )
)

Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col space-y-1.5 p-6 border-b border-matrix-green-400/30",
      className
    )}
    {...props}
  />
))

CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-mono font-semibold leading-none tracking-wide text-matrix-green-100 uppercase",
      "before:content-['['] before:text-matrix-green-300 before:mr-2",
      "after:content-[']'] after:text-matrix-green-300 after:ml-2",
      className
    )}
    {...props}
  >
    {children}
  </h3>
))

CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "text-sm text-matrix-green-200/80 font-mono",
      "before:content-['>'] before:mr-2 before:text-matrix-green-100 before:animate-blink",
      className
    )}
    {...props}
  />
))

CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0 font-mono text-matrix-green-100", className)}
    {...props}
  />
))

CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center p-6 pt-0 font-mono text-xs text-matrix-green-300 uppercase tracking-wider",
      className
    )}
    {...props}
  />
))

CardFooter.displayName = "CardFooter"

export interface TerminalCardProps extends CardProps {
  title?: string
  system?: string
  status?: "online" | "warning" | "error"
}

const TerminalCard = React.forwardRef<HTMLDivElement, TerminalCardProps>(
  ({ className, title, system = "SYSTEM", status = "online", children, ...props }, ref) => {
    const statusColors = {
      online: "text-matrix-green-100",
      warning: "text-matrix-amber",
      error: "text-matrix-red animate-blink"
    }

    return (
      <Card ref={ref} variant="terminal" className={cn("p-0", className)} {...props}>
        <div className="border-b border-matrix-green-100 p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-matrix-green-300">
              {system}
            </span>
            {title && (
              <span className="text-sm font-mono text-matrix-green-100">
                {title}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className={cn("text-xs uppercase", statusColors[status])}>
              {status}
            </span>
            <span className={cn(
              "w-2 h-2 rounded-full",
              status === "online" && "bg-matrix-green-100 shadow-glow-green-soft animate-pulse",
              status === "warning" && "bg-matrix-amber shadow-glow-amber animate-pulse",
              status === "error" && "bg-matrix-red shadow-glow-red animate-blink"
            )} />
          </div>
        </div>
        <div className="p-6 font-mono text-matrix-green-100">
          {children}
        </div>
      </Card>
    )
  }
)

TerminalCard.displayName = "TerminalCard"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  TerminalCard,
}