// Core Components
export { Button, buttonVariants } from './components/Button'
export type { ButtonProps } from './components/Button'

export { Input, Textarea } from './components/Input'
export type { InputProps, TextareaProps } from './components/Input'

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  TerminalCard,
} from './components/Card'
export type { CardProps, TerminalCardProps } from './components/Card'

export { Terminal, CRTScreen } from './components/Terminal'
export type { TerminalProps, TerminalLine, CRTScreenProps } from './components/Terminal'

// Timer Components
export { Timer } from './components/Timer'
export type { TimerProps } from './components/Timer'

// Boot Sequence Components
export { BootSequence } from './components/BootSequence'
export type { BootSequenceProps, BootSequenceMessage } from './components/BootSequence'

// CRT Monitor Effect
export { CRTMonitor } from './components/CRTMonitor'
export type { CRTMonitorProps } from './components/CRTMonitor'

// ASCII Frame Components
export { ASCIIFrame, ASCIIBox } from './components/ASCIIFrame'
export type { ASCIIFrameProps, ASCIIBoxProps, FrameStyle } from './components/ASCIIFrame'

// Terminal Status Components
export { TerminalStatus, SystemInfo } from './components/TerminalStatus'
export type { TerminalStatusProps, SystemInfoProps, StatusType, StatusConfig } from './components/TerminalStatus'

// Badge Components
export { Badge, badgeVariants } from './components/ui/badge'
export type { BadgeProps } from './components/ui/badge'

// Alert Components
export { Alert, AlertTitle, AlertDescription } from './components/ui/alert'

// Utilities
export { cn } from './lib/utils'

// Styles
import './styles/globals.css'