import type { Meta, StoryObj } from '@storybook/react';
import { Terminal, CRTScreen } from '../components/Terminal';
import { useState } from 'react';

const meta = {
  title: 'Components/Terminal',
  component: Terminal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    prompt: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    showCursor: {
      control: 'boolean',
    },
    crt: {
      control: 'boolean',
    },
    autoScroll: {
      control: 'boolean',
    },
    height: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Terminal>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultLines = [
  { type: 'system' as const, content: '> System initialized' },
  { type: 'output' as const, content: 'Welcome to Neo Terminal v2.0' },
  { type: 'input' as const, content: '$ ls -la' },
  { type: 'output' as const, content: 'drwxr-xr-x  5 user user 4096 Jan 1 00:00 .' },
  { type: 'output' as const, content: 'drwxr-xr-x  3 user user 4096 Jan 1 00:00 ..' },
  { type: 'output' as const, content: '-rw-r--r--  1 user user  220 Jan 1 00:00 .matrix' },
];

export const Default: Story = {
  args: {
    lines: defaultLines,
    prompt: '$',
    title: 'TERMINAL v2.0',
    showCursor: true,
  },
};

export const WithCRT: Story = {
  args: {
    lines: defaultLines,
    prompt: '$',
    title: 'CRT TERMINAL',
    crt: true,
    showCursor: true,
  },
};

export const CustomPrompt: Story = {
  args: {
    lines: [
      { type: 'system' as const, content: 'root@matrix:~#' },
      { type: 'input' as const, content: 'root@matrix:~# whoami' },
      { type: 'output' as const, content: 'root' },
    ],
    prompt: 'root@matrix:~#',
    title: 'ROOT ACCESS',
  },
};

export const ErrorMessages: Story = {
  args: {
    lines: [
      { type: 'input' as const, content: '$ rm -rf /' },
      { type: 'error' as const, content: 'ERROR: Permission denied' },
      { type: 'system' as const, content: 'WARNING: Attempted unauthorized action' },
      { type: 'error' as const, content: 'Access logged and reported' },
    ],
    prompt: '$',
    title: 'SECURITY TERMINAL',
  },
};

export const WithTimestamps: Story = {
  args: {
    lines: [
      { type: 'system' as const, content: 'System boot', timestamp: true },
      { type: 'output' as const, content: 'Loading kernel modules...', timestamp: true },
      { type: 'output' as const, content: 'Network interface up', timestamp: true },
      { type: 'system' as const, content: 'Ready', timestamp: true },
    ],
    prompt: '$',
    title: 'SYSTEM LOG',
  },
};

export const InteractiveTerminal: Story = {
  render: () => {
    const InteractiveExample = () => {
      const [lines, setLines] = useState([
        { type: 'system' as const, content: '> Interactive Terminal Ready' },
        { type: 'output' as const, content: 'Type "help" for available commands' },
      ]);

      const handleCommand = (cmd: string) => {
        const lowerCmd = cmd.toLowerCase();

        if (lowerCmd === 'help') {
          setLines(prev => [...prev,
            { type: 'output', content: 'Available commands:' },
            { type: 'output', content: '  help    - Show this message' },
            { type: 'output', content: '  clear   - Clear terminal' },
            { type: 'output', content: '  matrix  - Enter the Matrix' },
            { type: 'output', content: '  time    - Show current time' },
          ]);
        } else if (lowerCmd === 'clear') {
          setLines([]);
        } else if (lowerCmd === 'matrix') {
          setLines(prev => [...prev,
            { type: 'system', content: '> Entering the Matrix...' },
            { type: 'output', content: 'Follow the white rabbit.' },
          ]);
        } else if (lowerCmd === 'time') {
          setLines(prev => [...prev,
            { type: 'output', content: new Date().toLocaleString() },
          ]);
        } else {
          setLines(prev => [...prev,
            { type: 'error', content: `Command not found: ${cmd}` },
          ]);
        }
      };

      return (
        <Terminal
          lines={lines}
          onCommand={handleCommand}
          prompt="neo>"
          title="INTERACTIVE TERMINAL"
          className="w-[600px]"
        />
      );
    };

    return <InteractiveExample />;
  },
};

export const CRTScreenDefault: Story = {
  render: () => (
    <div style={{ height: '600px', width: '100%', position: 'relative' }}>
      <CRTScreen>
        <Terminal
          lines={defaultLines}
          prompt="$"
          title="MATRIX TERMINAL"
          showCursor
        />
      </CRTScreen>
    </div>
  ),
};

export const CRTScreenWithBoot: Story = {
  render: () => (
    <div style={{ height: '600px', width: '100%', position: 'relative' }}>
      <CRTScreen bootSequence>
        <Terminal
          lines={[
            { type: 'system' as const, content: '> System ready' },
          ]}
          prompt="$"
          title="BOOTING..."
          showCursor
        />
      </CRTScreen>
    </div>
  ),
};

export const MultipleTerminals: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Terminal
        lines={[
          { type: 'output' as const, content: 'Process Monitor' },
          { type: 'output' as const, content: 'CPU: 42%' },
          { type: 'output' as const, content: 'Memory: 2.4GB' },
        ]}
        prompt=">"
        title="MONITOR 1"
        height="200px"
      />
      <Terminal
        lines={[
          { type: 'output' as const, content: 'Network Status' },
          { type: 'output' as const, content: 'Connected: 192.168.1.1' },
          { type: 'output' as const, content: 'Latency: 12ms' },
        ]}
        prompt=">"
        title="MONITOR 2"
        height="200px"
      />
      <Terminal
        lines={[
          { type: 'system' as const, content: 'Security Log' },
          { type: 'output' as const, content: 'No threats detected' },
          { type: 'output' as const, content: 'Firewall: Active' },
        ]}
        prompt=">"
        title="MONITOR 3"
        height="200px"
      />
      <Terminal
        lines={[
          { type: 'output' as const, content: 'System Log' },
          { type: 'output' as const, content: 'Boot time: 2.3s' },
          { type: 'output' as const, content: 'Services: 12 active' },
        ]}
        prompt=">"
        title="MONITOR 4"
        height="200px"
      />
    </div>
  ),
};