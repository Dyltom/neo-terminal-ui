import type { Meta, StoryObj } from '@storybook/react'
import { ASCIIHeader } from '../components/matrix-effects/ASCIIHeader'

const meta: Meta<typeof ASCIIHeader> = {
  title: 'Matrix Effects/ASCIIHeader',
  component: ASCIIHeader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display large ASCII art headers with Matrix terminal styling. Perfect for logos, titles, and decorative ASCII art.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['green-100', 'green-200', 'green-300', 'green-400', 'amber', 'red'],
      description: 'Color variant for the ASCII header',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof ASCIIHeader>

export default meta
type Story = StoryObj<typeof meta>

const MATRIX_LOGO = `
╔═══════════════════════════════════════════════════════════╗
║  ███╗   ███╗ █████╗ ████████╗██████╗ ██╗██╗  ██╗        ║
║  ████╗ ████║██╔══██╗╚══██╔══╝██╔══██╗██║╚██╗██╔╝        ║
║  ██╔████╔██║███████║   ██║   ██████╔╝██║ ╚███╔╝         ║
║  ██║╚██╔╝██║██╔══██║   ██║   ██╔══██╗██║ ██╔██╗         ║
║  ██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║██║██╔╝ ██╗        ║
║  ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝        ║
╠═══════════════════════════════════════════════════════════╣
║           TEMPORAL DISPLACEMENT MODULE v2.0              ║
╚═══════════════════════════════════════════════════════════╝`

const SIMPLE_BANNER = `
╔══════════════════════════╗
║   SYSTEM INITIALIZED    ║
╚══════════════════════════╝`

const ALERT_BANNER = `
⚠️  WARNING: HIGH PRIORITY  ⚠️
━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SECURITY PROTOCOL ACTIVE`

export const MatrixLogo: Story = {
  args: {
    children: MATRIX_LOGO,
    color: 'green-300',
  },
}

export const BrightGreen: Story = {
  args: {
    children: SIMPLE_BANNER,
    color: 'green-100',
  },
}

export const AmberWarning: Story = {
  args: {
    children: ALERT_BANNER,
    color: 'amber',
  },
}

export const RedError: Story = {
  args: {
    children: `
╔═══════════════════╗
║   SYSTEM ERROR   ║
║   CODE: 0xFF41   ║
╚═══════════════════╝`,
    color: 'red',
  },
}

export const CustomStyling: Story = {
  args: {
    children: MATRIX_LOGO,
    color: 'green-300',
    className: 'opacity-70 text-xs',
  },
}