import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@lib/utils"

const buttonVariants = cva(
  // Base styles exactly matching timer-scheduler
  [
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "min-w-[120px]",
    "px-5",
    "py-2.5",
    "bg-transparent",
    "border",
    "border-[#00ff41]",
    "text-[#00ff41]",
    "font-['Share_Tech_Mono',_monospace]",
    "text-[0.8rem]",
    "font-normal",
    "uppercase",
    "tracking-[0.12em]",
    "cursor-[crosshair]",
    "transition-all",
    "duration-200",
    "overflow-hidden",
    "select-none",
    // Hover effect with glow
    "hover:text-[#0a0a0a]",
    "hover:shadow-[0_0_10px_#00ff41,0_0_20px_#00ff41,0_0_30px_#00ff41]",
    "active:scale-[0.98]",
    // Focus state
    "focus-visible:outline",
    "focus-visible:outline-1",
    "focus-visible:outline-[#00ff41]",
    "focus-visible:outline-offset-2",
    // Disabled state
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "disabled:pointer-events-none"
  ].join(" "),
  {
    variants: {
      variant: {
        default: "",
        primary: "bg-[#00ff41] text-[#0a0a0a] border-[#00ff41] hover:shadow-[0_0_10px_#00ff41,0_0_20px_#00ff41,0_0_30px_#00ff41]",
        destructive: "border-[#ff0040] text-[#ff0040] hover:bg-[#ff0040] hover:text-[#0a0a0a] hover:shadow-[0_0_10px_#ff0040,0_0_20px_#ff0040]",
        amber: "border-[#ffb000] text-[#ffb000] hover:bg-[#ffb000] hover:text-[#0a0a0a] hover:shadow-[0_0_10px_#ffb000,0_0_20px_#ffb000]",
        ghost: "border-transparent text-[#00ff41] hover:bg-[#00ff41]/10 hover:shadow-none",
        link: "border-transparent text-[#00ff41] underline-offset-4 hover:underline hover:shadow-none min-w-fit px-0",
      },
      size: {
        default: "py-2.5 px-5 text-[0.8rem]",
        sm: "py-2 px-4 text-[0.75rem] min-w-[100px]",
        lg: "py-3 px-6 text-[0.875rem] min-w-[140px]",
        icon: "w-10 h-10 min-w-0 p-0",
      },
      pulse: {
        true: "animate-pulse",
      },
      glitch: {
        true: "",
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
  loading?: boolean
  withSound?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, pulse, glitch, loading, withSound, children, onClick, icon, style, ...props }, ref) => {
    const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      if (withSound) {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBTGH0fPTgjMGHm7A7+OZURE')
        audio.volume = 0.1
        audio.play().catch(() => {})
      }
      onClick?.(e)
    }, [onClick, withSound])

    return (
      <button
        className={cn(buttonVariants({ variant, size, pulse, className }))}
        ref={ref}
        onClick={handleClick}
        disabled={loading || props.disabled}
        style={{
          position: 'relative',
          ...style
        }}
        {...props}
      >
        {/* Slide-in background effect */}
        <span
          className="absolute inset-0 bg-[#00ff41] -left-full transition-[left] duration-300 hover:left-0"
          style={{ zIndex: 0 }}
          aria-hidden="true"
        />

        {/* Button content */}
        <span className="relative z-10 flex items-center gap-2">
          {icon && <span className="inline-block">{icon}</span>}
          {loading ? (
            <span className="inline-block animate-pulse">LOADING...</span>
          ) : (
            children
          )}
        </span>

        {/* Glitch effect overlay */}
        {glitch && (
          <span
            className="absolute inset-0 pointer-events-none"
            style={{
              animation: 'glitch 0.3s infinite',
              opacity: 0.8,
              mixBlendMode: 'screen'
            }}
            aria-hidden="true"
          />
        )}
      </button>
    )
  }
)

Button.displayName = "Button"

// Terminal-style icon button component
export const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size="icon"
        {...props}
      >
        {children}
      </Button>
    )
  }
)

IconButton.displayName = "IconButton"

export { Button, buttonVariants }