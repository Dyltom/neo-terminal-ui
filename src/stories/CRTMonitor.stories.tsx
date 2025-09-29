import type { Meta, StoryObj } from '@storybook/react';
import { CRTMonitor } from '../components/matrix-effects/CRTMonitor';
import { Timer } from '../components/matrix-effects/Timer';
import { TerminalStatus } from '../components/matrix-effects/TerminalStatus';

const meta = {
  title: 'Components/CRTMonitor',
  component: CRTMonitor,
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
    enableFlicker: {
      control: 'boolean',
      description: 'Enable CRT flicker effect',
    },
    enableScanlines: {
      control: 'boolean',
      description: 'Enable CRT scanlines effect',
    },
    enableCurve: {
      control: 'boolean',
      description: 'Enable CRT curve vignette effect',
    },
    flickerIntensity: {
      control: 'select',
      options: ['low', 'medium', 'high'],
      description: 'Intensity of flicker effect',
    },
    scanlinesOpacity: {
      control: { type: 'range', min: 0, max: 0.1, step: 0.01 },
      description: 'Opacity of scanlines',
    },
  },
} satisfies Meta<typeof CRTMonitor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="terminal-window max-w-4xl w-full">
        <Timer />
      </div>
    ),
    enableFlicker: true,
    enableScanlines: true,
    enableCurve: true,
    flickerIntensity: 'low',
    scanlinesOpacity: 0.03,
  },
};

export const NoEffects: Story = {
  args: {
    children: (
      <div className="terminal-window max-w-4xl w-full">
        <Timer />
      </div>
    ),
    enableFlicker: false,
    enableScanlines: false,
    enableCurve: false,
  },
};

export const IntenseFlicker: Story = {
  args: {
    children: (
      <div className="terminal-window max-w-4xl w-full">
        <Timer />
      </div>
    ),
    enableFlicker: true,
    enableScanlines: true,
    enableCurve: true,
    flickerIntensity: 'high',
    scanlinesOpacity: 0.05,
  },
};

export const OnlyScanlinesAndCurve: Story = {
  args: {
    children: (
      <div className="terminal-window max-w-4xl w-full">
        <div className="space-y-4 p-8">
          <TerminalStatus status="online" />
          <h1 className="text-2xl font-mono text-matrix-green-100">TERMINAL READY</h1>
          <p className="text-matrix-green-200">All systems operational.</p>
        </div>
      </div>
    ),
    enableFlicker: false,
    enableScanlines: true,
    enableCurve: true,
    scanlinesOpacity: 0.03,
  },
};