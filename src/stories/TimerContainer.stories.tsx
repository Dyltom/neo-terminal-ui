import type { Meta, StoryObj } from '@storybook/react'
import { TimerContainer } from '../components/matrix-effects/TimerContainer'
import { TimerDisplay } from '../components/matrix-effects/TimerDisplay'
import { ASCIIHeader } from '../components/matrix-effects/ASCIIHeader'
import { TerminalStatus } from '../components/matrix-effects/TerminalStatus'
import { KeyboardHints } from '../components/matrix-effects/KeyboardHints'

const meta: Meta<typeof TimerContainer> = {
  title: 'Matrix Effects/TimerContainer',
  component: TimerContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Layout wrapper for timer components providing consistent positioning and spacing with proper z-index management.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof TimerContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
  args: {
    children: (
      <div className="p-8 text-matrix-green-300 text-sm font-mono">
        Empty timer container
      </div>
    ),
  },
}

export const WithTimerDisplay: Story = {
  args: {
    children: (
      <>
        <TimerDisplay time="00:12.34" showBrackets={true} />
      </>
    ),
  },
}

export const WithHeader: Story = {
  args: {
    children: (
      <>
        <ASCIIHeader color="green-300">
{`╔═══════════════════╗
║   TIMER ACTIVE   ║
╚═══════════════════╝`}
        </ASCIIHeader>
        <div className="mt-4">
          <TimerDisplay time="01:23.45" showBrackets={true} />
        </div>
      </>
    ),
  },
}

export const CompleteTimerLayout: Story = {
  args: {
    children: (
      <>
        <ASCIIHeader color="green-300" className="mb-4">
{`╔═══════════════════════╗
║   SYSTEM TIMER       ║
╚═══════════════════════╝`}
        </ASCIIHeader>

        <div className="mb-4">
          <TerminalStatus status="online" customLabel="RUNNING" />
        </div>

        <TimerDisplay time="05:42.13" showBrackets={true} className="mb-6" />

        <KeyboardHints
          hints={[
            { key: 'SPACE', label: 'PAUSE' },
            { key: 'R', label: 'RESET' },
          ]}
          showIndicator={true}
        />
      </>
    ),
  },
  parameters: {
    layout: 'padded',
  },
}

export const CustomStyling: Story = {
  args: {
    children: (
      <TimerDisplay time="99:99.99" showBrackets={true} />
    ),
    className: 'p-8 border-2 border-matrix-green-400 rounded',
  },
}