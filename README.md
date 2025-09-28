# Neo Terminal UI

A Matrix-inspired terminal UI component library for React, built with shadcn/ui and Tailwind CSS.

## Features

- 🎨 **Matrix Terminal Theme** - Authentic retro terminal aesthetic with green-on-black styling
- 🖥️ **CRT Monitor Effects** - Flicker, scanlines, and curve effects for immersive experience
- ⏱️ **Timer Components** - Full-featured timer with keyboard shortcuts and accessibility
- 🚀 **Boot Sequence** - Animated startup sequences with customizable messages
- 🎯 **ASCII Frames** - Various frame styles for terminal UI decoration
- 📊 **Status Indicators** - System status and information displays
- ♿ **Accessibility First** - Full keyboard navigation and screen reader support
- 🎭 **Highly Customizable** - Built on shadcn/ui with proper component composition
- 📚 **TypeScript** - Full type safety and IntelliSense support

## Installation

```bash
npm install neo-terminal-ui
```

### Peer Dependencies

```bash
npm install react react-dom
```

## Setup

1. **Import the CSS** (required for styling):

```tsx
import 'neo-terminal-ui/styles'
```

2. **Configure Tailwind CSS** (if using Tailwind in your project):

```js
// tailwind.config.js
module.exports = {
  content: [
    // ... your content paths
    "./node_modules/neo-terminal-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ... your config
}
```

## Quick Start

### Basic Timer Application

```tsx
import { CRTMonitor, BootSequence, Timer } from 'neo-terminal-ui'
import 'neo-terminal-ui/styles'

function App() {
  const [showBoot, setShowBoot] = useState(true)
  const [showTimer, setShowTimer] = useState(false)

  return (
    <CRTMonitor>
      {showBoot ? (
        <BootSequence
          onComplete={() => {
            setShowBoot(false)
            setTimeout(() => setShowTimer(true), 500)
          }}
        />
      ) : showTimer ? (
        <div className="terminal-window">
          <Timer />
        </div>
      ) : null}
    </CRTMonitor>
  )
}
```

## Components

### CRTMonitor

Wrapper component that provides authentic CRT monitor effects.

```tsx
<CRTMonitor
  enableFlicker={true}
  enableScanlines={true}
  enableCurve={true}
  flickerIntensity="low" // "low" | "medium" | "high"
  scanlinesOpacity={0.03}
>
  {children}
</CRTMonitor>
```

### Timer

Feature-complete timer with Matrix styling.

```tsx
<Timer
  showKeyboardHints={true}
  showStatus={true}
  showSystemInfo={true}
  onTimeUpdate={(time) => console.log(time)}
/>
```

**Keyboard Shortcuts:**
- `Space` - Start/Pause
- `R` - Reset
- `F` - Fast Forward (hold)

### BootSequence

Animated boot sequence with typing effects.

```tsx
<BootSequence
  messages={[
    { text: '> INITIALIZING...', delay: 0 },
    { text: '> LOADING MODULES...', delay: 800 },
    { text: '> SYSTEM READY', delay: 1600, isSystemReady: true }
  ]}
  onComplete={() => console.log('Boot complete')}
  typingSpeed={30}
/>
```

### ASCIIFrame

Terminal-style frames for content decoration.

```tsx
<ASCIIFrame
  style="double" // "single" | "double" | "rounded" | "heavy" | "dashed"
  color="green-100" // Matrix color variants
  width={40}
  title="SYSTEM STATUS"
  animate={true}
>
  Content goes here
</ASCIIFrame>
```

### TerminalStatus

Status indicators with various states.

```tsx
<TerminalStatus
  status="online" // "online" | "offline" | "warning" | "error" | "loading" | "idle"
  size="md" // "sm" | "md" | "lg"
  showIndicator={true}
  customLabel="CONNECTED"
/>
```

### SystemInfo

System information display.

```tsx
<SystemInfo
  uptime={3600}
  cpu={2.4}
  memory="128KB"
  showLabels={true}
/>
```

## Theming

The library uses CSS variables for theming. You can customize the Matrix color palette:

```css
:root {
  --matrix-black: #0a0a0a;
  --matrix-dark: #001100;
  --matrix-green-100: #00ff41;
  --matrix-green-200: #00cc33;
  --matrix-green-300: #009926;
  --matrix-green-400: #006619;
  --matrix-green-500: #003d0f;
  --matrix-amber: #ffb000;
  --matrix-red: #ff0040;

  --glow-green: 0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41;
  --glow-green-soft: 0 0 5px #00ff41, 0 0 10px #00ff41;
}
```

## Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build:lib

# Run tests
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © Dylan Henderson

## Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/)
- Inspired by The Matrix terminal aesthetic
- Uses [Tailwind CSS](https://tailwindcss.com/) for styling
- Font: [Share Tech Mono](https://fonts.google.com/specimen/Share+Tech+Mono)