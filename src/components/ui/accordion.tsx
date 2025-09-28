import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Custom chevron icon for Matrix theme
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

const accordionItemVariants = cva(
  "border-b-2 transition-colors",
  {
    variants: {
      variant: {
        default: "border-matrix-green-300/30",
        terminal: "border-matrix-green-100/30 bg-matrix-black/50",
        error: "border-red-500/30 bg-red-950/20",
        success: "border-matrix-green-100/30 bg-matrix-dark/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const accordionTriggerVariants = cva(
  "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default:
          "text-matrix-green-100 hover:text-matrix-green-100 hover:shadow-glow-green-soft",
        terminal:
          "text-matrix-green-100 hover:text-matrix-green-100 hover:shadow-glow-green-soft font-mono",
        error:
          "text-red-100 hover:text-red-100 hover:shadow-glow-red",
        success:
          "text-matrix-green-100 hover:text-matrix-green-100 hover:shadow-glow-green",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const accordionContentVariants = cva(
  "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
  {
    variants: {
      variant: {
        default: "text-matrix-green-100/90",
        terminal: "text-matrix-green-100/90 font-mono",
        error: "text-red-100/90",
        success: "text-matrix-green-100/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface AccordionItemProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>,
    VariantProps<typeof accordionItemVariants> {}

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerVariants> {}

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>,
    VariantProps<typeof accordionContentVariants> {}

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItemProps
>(({ className, variant, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(accordionItemVariants({ variant }), className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, variant, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ variant }), className)}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, variant, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(accordionContentVariants({ variant }), className)}
    {...props}
  >
    <div className="pb-4 pt-0">{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }