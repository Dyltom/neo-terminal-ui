import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tabsListVariants = cva(
  "inline-flex h-10 items-center justify-center rounded-md border-2 p-1 text-muted-foreground",
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

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "data-[state=active]:bg-matrix-green-500/20 data-[state=active]:text-matrix-green-100 data-[state=active]:shadow-glow-green-soft hover:bg-matrix-green-100/10 text-matrix-green-300",
        terminal:
          "data-[state=active]:bg-matrix-green-100/20 data-[state=active]:text-matrix-green-100 data-[state=active]:shadow-glow-green-soft hover:bg-matrix-green-100/10 font-mono text-matrix-green-100",
        error:
          "data-[state=active]:bg-red-500/20 data-[state=active]:text-red-100 data-[state=active]:shadow-glow-red hover:bg-red-500/10 text-red-300",
        success:
          "data-[state=active]:bg-matrix-green-100/20 data-[state=active]:text-matrix-green-100 data-[state=active]:shadow-glow-green hover:bg-matrix-green-100/10 text-matrix-green-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const tabsContentVariants = cva(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "text-matrix-green-100",
        terminal: "text-matrix-green-100 font-mono",
        error: "text-red-100",
        success: "text-matrix-green-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
    VariantProps<typeof tabsContentVariants> {}

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant }), className)}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContentVariants({ variant }), className)}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }