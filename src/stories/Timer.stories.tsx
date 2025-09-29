import type { Meta, StoryObj } from '@storybook/react';
import { Timer } from '../components/matrix-effects/Timer';

const meta = {
  title: 'Components/Timer',
  component: Timer,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'matrix-dark',
      values: [
        { name: 'matrix-dark', value: '#0a0a0a' },
        { name: 'matrix-black', value: '#001100' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showKeyboardHints: {
      control: 'boolean',
      description: 'Show keyboard shortcut hints',
    },
    showStatus: {
      control: 'boolean',
      description: 'Show status indicator (ACTIVE/SUSPENDED/STANDBY)',
    },
    showSystemInfo: {
      control: 'boolean',
      description: 'Show system information footer',
    },
    onTimeUpdate: {
      action: 'timeUpdate',
      description: 'Callback when time updates',
    },
  },
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showKeyboardHints: true,
    showStatus: true,
    showSystemInfo: true,
  },
};

export const Minimal: Story = {
  args: {
    showKeyboardHints: false,
    showStatus: false,
    showSystemInfo: false,
  },
};

export const WithoutKeyboardHints: Story = {
  args: {
    showKeyboardHints: false,
    showStatus: true,
    showSystemInfo: true,
  },
};

export const WithoutSystemInfo: Story = {
  args: {
    showKeyboardHints: true,
    showStatus: true,
    showSystemInfo: false,
  },
};