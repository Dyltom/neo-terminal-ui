import type { Meta, StoryObj } from '@storybook/react'
import { TimerDisplay } from '../components/matrix-effects/TimerDisplay'

const meta: Meta<typeof TimerDisplay> = {
  title: 'Matrix Effects/TimerDisplay',
  component: TimerDisplay,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display formatted time with Matrix terminal styling. Perfect for countdown/countup timers with optional decorative brackets.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    time: {
      control: 'text',
      description: 'Formatted time string to display',
    },
    showBrackets: {
      control: 'boolean',
      description: 'Show decorative brackets around time',
    },
    color: {
      control: 'select',
      options: ['green-100', 'green-200', 'green-300', 'green-400', 'amber', 'red'],
      description: 'Color variant for the timer display',
    },
    ariaLabel: {
      control: 'text',
      description: 'Custom ARIA label for accessibility',
    },
  },
} satisfies Meta<typeof TimerDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    time: '00:00.00',
    showBrackets: true,
    color: 'green-100',
  },
}

export const Running: Story = {
  args: {
    time: '01:23.45',
    showBrackets: true,
    color: 'green-100',
  },
}

export const LongDuration: Story = {
  args: {
    time: '99:59.99',
    showBrackets: true,
    color: 'green-100',
  },
}

export const WithoutBrackets: Story = {
  args: {
    time: '00:42.13',
    showBrackets: false,
    color: 'green-100',
  },
}

export const AmberWarning: Story = {
  args: {
    time: '00:05.00',
    showBrackets: true,
    color: 'amber',
  },
}

export const RedAlert: Story = {
  args: {
    time: '00:00.00',
    showBrackets: true,
    color: 'red',
  },
}

export const CustomStyling: Story = {
  args: {
    time: '12:34.56',
    showBrackets: true,
    color: 'green-100',
    className: 'text-6xl',
  },
}