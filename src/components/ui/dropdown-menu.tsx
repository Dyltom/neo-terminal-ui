import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Custom icons for Matrix theme
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

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9,18 15,12 9,6" />
  </svg>
)

const CircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
  </svg>
)

const dropdownMenuContentVariants = cva(
  "z-50 min-w-[8rem] overflow-hidden rounded-md border-2 p-1 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
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

const dropdownMenuItemVariants = cva(
  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-matrix-green-100 focus:bg-matrix-green-500/20 focus:text-matrix-green-100 data-[highlighted]:bg-matrix-green-500/20",
        terminal:
          "text-matrix-green-100 focus:bg-matrix-green-100/20 focus:text-matrix-green-100 data-[highlighted]:bg-matrix-green-100/20 font-mono",
        error:
          "text-red-100 focus:bg-red-500/20 focus:text-red-100 data-[highlighted]:bg-red-500/20",
        success:
          "text-matrix-green-100 focus:bg-matrix-green-100/20 focus:text-matrix-green-100 data-[highlighted]:bg-matrix-green-100/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const dropdownMenuLabelVariants = cva(
  "px-2 py-1.5 text-sm font-semibold",
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

const dropdownMenuSeparatorVariants = cva(
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

const dropdownMenuShortcutVariants = cva(
  "ml-auto text-xs tracking-widest opacity-60",
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

export interface DropdownMenuContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>,
    VariantProps<typeof dropdownMenuContentVariants> {}

export interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof dropdownMenuItemVariants> {}

export interface DropdownMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>,
    VariantProps<typeof dropdownMenuLabelVariants> {}

export interface DropdownMenuSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>,
    VariantProps<typeof dropdownMenuSeparatorVariants> {}

export interface DropdownMenuShortcutProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof dropdownMenuShortcutVariants> {}

export interface DropdownMenuCheckboxItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>,
    VariantProps<typeof dropdownMenuItemVariants> {}

export interface DropdownMenuRadioItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>,
    VariantProps<typeof dropdownMenuItemVariants> {}

export interface DropdownMenuSubContentProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>,
    VariantProps<typeof dropdownMenuContentVariants> {}

export interface DropdownMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>,
    VariantProps<typeof dropdownMenuItemVariants> {}

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentProps
>(({ className, sideOffset = 4, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(dropdownMenuContentVariants({ variant }), className)}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemProps
>(({ className, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(dropdownMenuItemVariants({ variant }), className)}
    {...props}
  />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemProps
>(({ className, children, checked, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(dropdownMenuItemVariants({ variant }), "pl-8", className)}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownMenuRadioItemProps
>(({ className, children, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(dropdownMenuItemVariants({ variant }), "pl-8", className)}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CircleIcon className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelProps
>(({ className, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(dropdownMenuLabelVariants({ variant }), className)}
    {...props}
  />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuSeparatorProps
>(({ className, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn(dropdownMenuSeparatorVariants({ variant }), className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

const DropdownMenuShortcut = React.forwardRef<
  HTMLSpanElement,
  DropdownMenuShortcutProps
>(({ className, variant, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(dropdownMenuShortcutVariants({ variant }), className)}
    {...props}
  />
))
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, variant, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(dropdownMenuItemVariants({ variant }), "pr-8", className)}
    {...props}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownMenuSubContentProps
>(({ className, variant, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(dropdownMenuContentVariants({ variant }), className)}
    {...props}
  />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

// Note: DropdownMenuClose is not available in this version of @radix-ui/react-dropdown-menu
// Users can use the DropdownMenuItem with onSelect to close the menu

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
}