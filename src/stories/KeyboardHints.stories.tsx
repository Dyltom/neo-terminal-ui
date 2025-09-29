import type { Meta, StoryObj } from '@storybook/react'
import { KeyboardHints } from '../components/matrix-effects/KeyboardHints'

const meta: Meta<typeof KeyboardHints> = {
  title: 'Matrix Effects/KeyboardHints',
  component: KeyboardHints,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display keyboard shortcuts in Matrix terminal style with kbd elements and labels in a dashed border container.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    hints: {
      control: 'object',
      description: 'Array of keyboard hints with key and label',
    },
    showIndicator: {
      control: 'boolean',
      description: 'Show animated indicator before each hint',
    },
  },
} satisfies Meta<typeof KeyboardHints>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    hints: [
      { key: 'SPACE', label: 'START/PAUSE' },
      { key: 'R', label: 'RESET' },
      { key: 'F', label: 'FAST FORWARD' },
    ],
    showIndicator: true,
  },
}

export const WithoutIndicators: Story = {
  args: {
    hints: [
      { key: 'SPACE', label: 'START/PAUSE' },
      { key: 'R', label: 'RESET' },
      { key: 'F', label: 'FAST FORWARD' },
    ],
    showIndicator: false,
  },
}

export const NavigationHints: Story = {
  args: {
    hints: [
      { key: '↑', label: 'UP' },
      { key: '↓', label: 'DOWN' },
      { key: '←', label: 'LEFT' },
      { key: '→', label: 'RIGHT' },
      { key: 'ENTER', label: 'SELECT' },
    ],
    showIndicator: true,
  },
}

export const ShortcutList: Story = {
  args: {
    hints: [
      { key: 'CTRL+S', label: 'SAVE' },
      { key: 'CTRL+Z', label: 'UNDO' },
      { key: 'CTRL+Y', label: 'REDO' },
    ],
    showIndicator: true,
  },
}

export const SingleHint: Story = {
  args: {
    hints: [
      { key: 'ESC', label: 'EXIT SYSTEM' },
    ],
    showIndicator: true,
  },
}

export const ManyHints: Story = {
  args: {
    hints: [
      { key: 'Q', label: 'QUIT' },
      { key: 'H', label: 'HELP' },
      { key: 'S', label: 'SETTINGS' },
      { key: 'I', label: 'INFO' },
      { key: 'D', label: 'DEBUG' },
      { key: 'L', label: 'LOGS' },
    ],
    showIndicator: true,
  },
  parameters: {
    layout: 'padded',
  },
}