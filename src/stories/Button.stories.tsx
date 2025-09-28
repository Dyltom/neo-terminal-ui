import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Matrix-themed button component with hover effects and customizable variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'destructive', 'amber', 'ghost', 'link'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state',
    },
    withSound: {
      control: 'boolean',
      description: 'Play sound effect on click',
    },
    pulse: {
      control: 'boolean',
      description: 'Add pulsing animation',
    },
    glitch: {
      control: 'boolean',
      description: 'Add glitch effect overlay',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'MATRIX BUTTON',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'PRIMARY ACTION',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'TERMINATE',
  },
}

export const Amber: Story = {
  args: {
    variant: 'amber',
    children: 'WARNING',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'GHOST MODE',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'ACCESS LINK',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'SMALL BTN',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'LARGE BUTTON',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    children: '⚡',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    children: 'LOADING...',
  },
}

export const WithSound: Story = {
  args: {
    withSound: true,
    children: 'CLICK FOR SOUND',
  },
  parameters: {
    docs: {
      description: {
        story: 'Click to hear the Matrix-themed sound effect.',
      },
    },
  },
}

export const Pulse: Story = {
  args: {
    pulse: true,
    children: 'PULSING',
  },
}

export const Glitch: Story = {
  args: {
    glitch: true,
    children: 'GLITCH EFFECT',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'DISABLED',
  },
}

export const WithIcon: Story = {
  args: {
    icon: '→',
    children: 'WITH ICON',
  },
}

export const Showcase: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">DEFAULT</Button>
      <Button variant="primary">PRIMARY</Button>
      <Button variant="destructive">DESTRUCTIVE</Button>
      <Button variant="amber">AMBER</Button>
      <Button variant="ghost">GHOST</Button>
      <Button variant="link">LINK</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed together.',
      },
    },
  },
}