import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Custom icons for Matrix theme
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6,9 12,15 18,9" />
  </svg>
)

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18,15 12,9 6,15" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20,6 9,17 4,12" />
  </svg>
)

const selectTriggerVariants = cva(
  "flex h-10 w-full items-center justify-between rounded-md border-2 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "border-matrix-green-300 bg-matrix-dark text-matrix-green-100 placeholder:text-matrix-green-500 hover:border-matrix-green-100 shadow-glow-green-soft",
        terminal:
          "border-matrix-green-100 bg-matrix-black text-matrix-green-100 placeholder:text-matrix-green-500 hover:bg-matrix-dark hover:shadow-glow-green font-mono",
        error:
          "border-red-500 bg-red-950/50 text-red-100 placeholder:text-red-300 hover:border-red-400 shadow-glow-red",
        success:
          "border-matrix-green-100 bg-matrix-dark text-matrix-green-100 placeholder:text-matrix-green-500 shadow-glow-green-soft hover:shadow-glow-green",
      },
      size: {
        sm: "h-9 px-2 text-xs",
        default: "h-10 px-3 text-sm",
        lg: "h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const selectContentVariants = cva(
  "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border-2 bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const selectItemVariants = cva(
  "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 transition-colors duration-150",
  {
    variants: {
      variant: {
        default:
          "text-matrix-green-100 focus:bg-matrix-green-500/20 focus:text-matrix-green-100 data-[highlighted]:bg-matrix-green-500/20",
        terminal:
          "bg-matrix-black text-matrix-green-100 focus:bg-matrix-green-100/20 focus:text-matrix-green-100 data-[highlighted]:bg-matrix-green-100/20 font-mono",
        error:
          "bg-red-950/50 text-red-100 focus:bg-red-500/20 focus:text-red-100 data-[highlighted]:bg-red-500/20",
        success:
          "bg-matrix-dark text-matrix-green-100 focus:bg-matrix-green-100/20 focus:text-matrix-green-100 data-[highlighted]:bg-matrix-green-100/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const selectLabelVariants = cva(
  "py-1.5 pl-8 pr-2 text-sm font-semibold opacity-60",
  {
    variants: {
      variant: {
        default: "text-matrix-green-300",
        terminal: "text-matrix-green-100 font-mono",
        error: "text-red-300",
        success: "text-matrix-green-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const selectSeparatorVariants = cva(
  "-mx-1 my-1 h-px",
  {
    variants: {
      variant: {
        default: "bg-matrix-green-300/50",
        terminal: "bg-matrix-green-100/30",
        error: "bg-red-500/30",
        success: "bg-matrix-green-100/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
    VariantProps<typeof selectTriggerVariants> {}

export interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
    VariantProps<typeof selectContentVariants> {}

export interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    VariantProps<typeof selectItemVariants> {}

export interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>,
    VariantProps<typeof selectLabelVariants> {}

export interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>,
    VariantProps<typeof selectSeparatorVariants> {}

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, variant, size, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ variant, size }), className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronUpIcon className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
))
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className
    )}
    {...props}
  >
    <ChevronDownIcon className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
))
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(({ className, children, position = "popper", variant, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        selectContentVariants({ variant }),
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabelProps
>(({ className, variant, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn(selectLabelVariants({ variant }), className)}
    {...props}
  />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, variant, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(selectItemVariants({ variant }), className)}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparatorProps
>(({ className, variant, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn(selectSeparatorVariants({ variant }), className)}
    {...props}
  />
))
SelectSeparator.displayName = SelectPrimitive.Separator.displayName

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}