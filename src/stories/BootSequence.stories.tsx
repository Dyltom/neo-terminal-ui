import type { Meta, StoryObj } from '@storybook/react';
import { BootSequence } from '../components/matrix-effects/BootSequence';

const meta = {
  title: 'Components/BootSequence',
  component: BootSequence,
  parameters: {
    layout: 'fullscreen',
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
    autoStart: {
      control: 'boolean',
      description: 'Automatically start the boot sequence',
    },
    typingSpeed: {
      control: { type: 'range', min: 10, max: 100, step: 10 },
      description: 'Speed of typing animation in milliseconds',
    },
    onComplete: {
      action: 'complete',
      description: 'Callback when boot sequence completes',
    },
  },
} satisfies Meta<typeof BootSequence>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    autoStart: true,
    typingSpeed: 30,
  },
};

export const CustomMessages: Story = {
  args: {
    messages: [
      { text: '> INITIALIZING NEURAL NETWORK...', delay: 0 },
      { text: '> LOADING CONSCIOUSNESS MODULE...', delay: 800 },
      { text: '> SCANNING MEMORY BANKS...', delay: 1600 },
      { text: '> ESTABLISHING QUANTUM LINK...', delay: 2400 },
      { text: '> AWAKENING...', delay: 3200, isSystemReady: true },
    ],
    autoStart: true,
    typingSpeed: 25,
  },
};

export const FastTyping: Story = {
  args: {
    autoStart: true,
    typingSpeed: 10,
  },
};

export const SlowTyping: Story = {
  args: {
    autoStart: true,
    typingSpeed: 60,
  },
};

export const ShortSequence: Story = {
  args: {
    messages: [
      { text: '> BOOTING...', delay: 0 },
      { text: '> READY', delay: 1000, isSystemReady: true },
    ],
    autoStart: true,
  },
};