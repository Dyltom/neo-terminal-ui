import * as React from "react"
import { cn } from "@lib/utils"

export interface TerminalLine {
  type: "input" | "output" | "error" | "system"
  content: string
  timestamp?: boolean
}

export interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: TerminalLine[]
  prompt?: string
  title?: string
  showCursor?: boolean
  crt?: boolean
  autoScroll?: boolean
  height?: string
  onCommand?: (command: string) => void
}

const Terminal = React.forwardRef<HTMLDivElement, TerminalProps>(
  ({
    className,
    lines = [],
    prompt = "$",
    title = "TERMINAL v2.0",
    showCursor = true,
    crt = false,
    autoScroll = true,
    height = "400px",
    onCommand,
    ...props
  }, ref) => {
    const [currentInput, setCurrentInput] = React.useState("")
    const [history, setHistory] = React.useState<TerminalLine[]>(lines)
    const [commandHistory, setCommandHistory] = React.useState<string[]>([])
    const [historyIndex, setHistoryIndex] = React.useState(-1)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const scrollRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      if (autoScroll && scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      }
    }, [history, autoScroll])

    const addLine = (line: TerminalLine) => {
      setHistory(prev => [...prev, line])
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && currentInput.trim()) {
        e.preventDefault()

        // Add input to history
        addLine({ type: "input", content: `${prompt} ${currentInput}` })

        // Add to command history
        setCommandHistory(prev => [...prev, currentInput])
        setHistoryIndex(-1)

        // Execute command callback
        if (onCommand) {
          onCommand(currentInput)
        } else {
          // Default: echo the command
          addLine({ type: "output", content: currentInput })
        }

        setCurrentInput("")
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
          const newIndex = historyIndex + 1
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex])
        }
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1
          setHistoryIndex(newIndex)
          setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex])
        } else if (historyIndex === 0) {
          setHistoryIndex(-1)
          setCurrentInput("")
        }
      }
    }

    const formatLine = (line: TerminalLine) => {
      const timestamp = line.timestamp ?
        `[${new Date().toLocaleTimeString()}] ` : ""

      const colorClass = {
        input: "text-matrix-green-100",
        output: "text-matrix-green-200",
        error: "text-matrix-red",
        system: "text-matrix-amber"
      }[line.type]

      return (
        <div className={cn("font-mono text-sm", colorClass)}>
          {timestamp && (
            <span className="text-matrix-green-400 text-xs">{timestamp}</span>
          )}
          {line.content}
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-matrix-dark/95 border border-matrix-green-300",
          crt && "crt-effect",
          className
        )}
        onClick={() => inputRef.current?.focus()}
        {...props}
      >
        {/* Terminal Header */}
        <div className="border-b border-matrix-green-300 p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-matrix-red" />
              <span className="w-3 h-3 rounded-full bg-matrix-amber" />
              <span className="w-3 h-3 rounded-full bg-matrix-green-100" />
            </div>
            <span className="text-xs uppercase tracking-wider text-matrix-green-200">
              {title}
            </span>
          </div>
          <span className="text-xs text-matrix-green-300 font-mono">
            {new Date().toLocaleString()}
          </span>
        </div>

        {/* Terminal Content */}
        <div
          ref={scrollRef}
          className="p-4 overflow-y-auto scrollbar-terminal"
          style={{ height }}
        >
          {/* History */}
          {history.map((line, index) => (
            <div key={index}>
              {formatLine(line)}
            </div>
          ))}

          {/* Current Input Line */}
          <div className="flex items-center text-matrix-green-100 font-mono text-sm">
            <span className="mr-2">{prompt}</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none"
              autoFocus
            />
            {showCursor && <span className="cursor animate-blink ml-0.5">█</span>}
          </div>
        </div>
      </div>
    )
  }
)

Terminal.displayName = "Terminal"

export interface CRTScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  bootSequence?: boolean
}

const CRTScreen = React.forwardRef<HTMLDivElement, CRTScreenProps>(
  ({ className, children, bootSequence = false, ...props }, ref) => {
    const [isBooting, setIsBooting] = React.useState(bootSequence)

    React.useEffect(() => {
      if (bootSequence) {
        const timer = setTimeout(() => {
          setIsBooting(false)
        }, 2000)
        return () => clearTimeout(timer)
      }
    }, [bootSequence])

    return (
      <div
        ref={ref}
        className={cn(
          "relative min-h-screen bg-matrix-black overflow-hidden",
          className
        )}
        {...props}
      >
        {/* CRT Monitor Effect */}
        <div className="crt-monitor" />

        {/* Terminal Screen */}
        <div className="terminal-screen">
          {isBooting ? (
            <div className="boot-sequence text-center">
              <div className="terminal-text typing-text text-matrix-green-100 text-xl mb-4">
                {'> INITIALIZING NEO TERMINAL v2.0...'}
                <span className="cursor" />
              </div>
              <div className="terminal-text text-matrix-green-200 text-sm opacity-70">
                {'> LOADING SYSTEM MODULES...'}
              </div>
              <div className="terminal-text text-matrix-green-300 text-sm opacity-50 mt-2">
                {'> CALIBRATING DISPLAY MATRIX...'}
              </div>
            </div>
          ) : (
            <div className="terminal-window">
              {children}
            </div>
          )}
        </div>
      </div>
    )
  }
)

CRTScreen.displayName = "CRTScreen"

export { Terminal, CRTScreen }