// Core UI Components (shadcn)
export { Button, buttonVariants } from './components/ui/button'
export type { ButtonProps } from './components/ui/button'

export { Input } from './components/ui/input'
export { Textarea } from './components/ui/textarea'

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './components/ui/card'

// Matrix Effects Components
export { Terminal, CRTScreen } from './components/matrix-effects/Terminal'
export type { TerminalProps, TerminalLine, CRTScreenProps } from './components/matrix-effects/Terminal'

export { Timer } from './components/matrix-effects/Timer'
export type { TimerProps } from './components/matrix-effects/Timer'

export { BootSequence } from './components/matrix-effects/BootSequence'
export type { BootSequenceProps, BootSequenceMessage } from './components/matrix-effects/BootSequence'

export { CRTMonitor } from './components/matrix-effects/CRTMonitor'
export type { CRTMonitorProps } from './components/matrix-effects/CRTMonitor'

export { ASCIIFrame, ASCIIBox } from './components/matrix-effects/ASCIIFrame'
export type { ASCIIFrameProps, ASCIIBoxProps, FrameStyle } from './components/matrix-effects/ASCIIFrame'

export { TerminalStatus, SystemInfo } from './components/matrix-effects/TerminalStatus'
export type { TerminalStatusProps, SystemInfoProps, StatusType, StatusConfig } from './components/matrix-effects/TerminalStatus'

// Badge Components
export { Badge, badgeVariants } from './components/ui/badge'
export type { BadgeProps } from './components/ui/badge'

// Alert Components
export { Alert, AlertTitle, AlertDescription } from './components/ui/alert'

// Utilities
export { cn } from './lib/utils'

// Styles
import './styles/globals.css'