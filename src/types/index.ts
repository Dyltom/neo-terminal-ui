// Common type definitions for neo-terminal-ui

export type Status = "online" | "warning" | "error"

export interface ThemeColors {
  black: string
  dark: string
  green: {
    100: string
    200: string
    300: string
    400: string
    500: string
  }
  amber: string
  red: string
}

export interface ComponentTheme {
  colors: ThemeColors
  effects: {
    glow: string
    glowSoft: string
    scanlines: boolean
    flicker: boolean
  }
}

export type Size = "sm" | "default" | "lg"
export type Variant = "default" | "primary" | "destructive" | "ghost" | "link" | "terminal"

export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface InteractiveComponentProps extends BaseComponentProps {
  disabled?: boolean
  loading?: boolean
  "aria-label"?: string
  "aria-pressed"?: boolean
  "aria-describedby"?: string
}