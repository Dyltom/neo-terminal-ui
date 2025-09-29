import type { Meta, StoryObj } from '@storybook/react';
import { TerminalStatus, SystemInfo } from '../components/matrix-effects/TerminalStatus';

const meta = {
  title: 'Components/TerminalStatus',
  component: TerminalStatus,
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
    status: {
      control: 'select',
      options: ['online', 'offline', 'warning', 'error', 'loading', 'idle'],
      description: 'Status type',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Status size',
    },
    showIndicator: {
      control: 'boolean',
      description: 'Show status indicator dot',
    },
    showBrackets: {
      control: 'boolean',
      description: 'Show brackets around status text',
    },
    customLabel: {
      control: 'text',
      description: 'Custom status label',
    },
  },
} satisfies Meta<typeof TerminalStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: 'online',
    size: 'md',
    showIndicator: true,
    showBrackets: true,
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="space-y-4">
      <TerminalStatus status="online" />
      <TerminalStatus status="offline" />
      <TerminalStatus status="warning" />
      <TerminalStatus status="error" />
      <TerminalStatus status="loading" />
      <TerminalStatus status="idle" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <TerminalStatus status="online" size="sm" />
      <TerminalStatus status="online" size="md" />
      <TerminalStatus status="online" size="lg" />
    </div>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <div className="space-y-4">
      <TerminalStatus status="online" customLabel="CONNECTED" />
      <TerminalStatus status="loading" customLabel="PROCESSING" />
      <TerminalStatus status="error" customLabel="CRITICAL" />
    </div>
  ),
};

export const WithoutIndicator: Story = {
  args: {
    status: 'online',
    showIndicator: false,
  },
};

export const WithoutBrackets: Story = {
  args: {
    status: 'warning',
    showBrackets: false,
  },
};

export const SystemInfoComponent: Story = {
  render: () => (
    <div className="space-y-4">
      <SystemInfo />
      <SystemInfo
        uptime={7200}
        cpu={15.3}
        memory="256KB"
        showLabels={true}
      />
      <SystemInfo
        uptime={3600}
        cpu={5.8}
        memory="512KB"
        showLabels={false}
        separator=" / "
      />
    </div>
  ),
};

export const Combined: Story = {
  render: () => (
    <div className="flex items-center justify-between w-full max-w-2xl">
      <TerminalStatus status="online" />
      <SystemInfo />
    </div>
  ),
};