import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/ui/badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Matrix-themed badge component for displaying status indicators and labels.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'amber', 'terminal'],
      description: 'Visual style variant of the badge',
    },
    children: {
      control: 'text',
      description: 'Badge content',
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'ONLINE',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'SECONDARY',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'ERROR',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'OUTLINE',
  },
}

export const Amber: Story = {
  args: {
    variant: 'amber',
    children: 'WARNING',
  },
}

export const Terminal: Story = {
  args: {
    variant: 'terminal',
    children: 'SYSTEM',
  },
  parameters: {
    docs: {
      description: {
        story: 'Terminal-style badge with brackets around the content.',
      },
    },
  },
}

export const StatusIndicators: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">ACTIVE</Badge>
      <Badge variant="amber">PENDING</Badge>
      <Badge variant="destructive">FAILED</Badge>
      <Badge variant="secondary">INACTIVE</Badge>
      <Badge variant="outline">UNKNOWN</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common status indicators using different badge variants.',
      },
    },
  },
}

export const SystemInfo: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4 bg-matrix-black border border-matrix-green-400">
      <div className="text-matrix-green-100 font-mono text-sm">SYSTEM STATUS:</div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">CPU: 2.4%</Badge>
        <Badge variant="default">MEM: 1.2GB</Badge>
        <Badge variant="default">DISK: 45%</Badge>
        <Badge variant="terminal">UPTIME: 72H</Badge>
        <Badge variant="amber">TEMP: 67°C</Badge>
        <Badge variant="destructive">ALERT: 1</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of badges used in a system monitoring interface.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">DEFAULT</Badge>
      <Badge variant="secondary">SECONDARY</Badge>
      <Badge variant="destructive">DESTRUCTIVE</Badge>
      <Badge variant="outline">OUTLINE</Badge>
      <Badge variant="amber">AMBER</Badge>
      <Badge variant="terminal">TERMINAL</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All badge variants displayed together.',
      },
    },
  },
}