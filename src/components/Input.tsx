import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  success?: boolean
  withCursor?: boolean
  terminal?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, success, withCursor, terminal, id, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false)
    const [, setValue] = React.useState(props.value || props.defaultValue || "")
    const inputId = id || React.useId()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      props.onChange?.(e)
    }

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-xs uppercase tracking-wider text-matrix-green-200 mb-2">
            {terminal && "> "}{label}
          </label>
        )}
        <div className="relative">
          {terminal && (
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-matrix-green-100 pointer-events-none">
              $
            </span>
          )}
          <input
            id={inputId}
            type={type}
            className={cn(
              "terminal-input",
              terminal && "pl-6",
              error && "border-matrix-red text-matrix-red focus:border-matrix-red focus:shadow-[0_1px_0_var(--matrix-red)]",
              success && "border-matrix-green-100 text-matrix-green-100",
              focused && !error && "shadow-glow-green-soft",
              className
            )}
            ref={ref}
            onChange={handleChange}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
          {withCursor && focused && (
            <span className="absolute right-0 top-1/2 -translate-y-1/2 cursor animate-blink" />
          )}
        </div>
        {error && (
          <p className="mt-2 text-xs text-matrix-red animate-pulse">
            {'>'} ERROR: {error}
          </p>
        )}
        {success && !error && (
          <p className="mt-2 text-xs text-matrix-green-100">
            {'>'} SUCCESS
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = "Input"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  terminal?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, terminal, ...props }, ref) => {
    const [focused, setFocused] = React.useState(false)

    return (
      <div className="w-full">
        {label && (
          <label className="block text-xs uppercase tracking-wider text-matrix-green-200 mb-2">
            {terminal && "> "}{label}
          </label>
        )}
        <div className="relative">
          <textarea
            className={cn(
              "flex min-h-[80px] w-full bg-transparent px-3 py-2 text-sm placeholder:text-matrix-green-400/50 disabled:cursor-not-allowed disabled:opacity-50",
              "border border-matrix-green-100/30 text-matrix-green-100 font-mono",
              "focus:border-matrix-green-100 focus:outline-none focus:shadow-terminal",
              "transition-all duration-200 resize-none scrollbar-terminal",
              error && "border-matrix-red text-matrix-red focus:border-matrix-red",
              focused && !error && "shadow-glow-green-soft",
              className
            )}
            ref={ref}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-2 text-xs text-matrix-red animate-pulse">
            {'>'} ERROR: {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"

export { Input, Textarea }