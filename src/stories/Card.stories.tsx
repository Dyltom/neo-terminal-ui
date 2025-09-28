import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  TerminalCard,
} from '../components/Card';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'ghost', 'terminal', 'crt'],
    },
    hover: {
      control: 'boolean',
    },
    pulse: {
      control: 'boolean',
    },
    glitch: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-6 text-matrix-green-100">
        <h3 className="text-lg font-mono mb-2">SYSTEM STATUS</h3>
        <p className="text-sm opacity-80">All systems operational</p>
      </div>
    ),
  },
};

export const WithHeader: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>System Monitor</CardTitle>
        <CardDescription>Real-time system metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>CPU Usage:</span>
            <span className="text-matrix-green-100">42%</span>
          </div>
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className="text-matrix-green-100">2.4GB / 8GB</span>
          </div>
          <div className="flex justify-between">
            <span>Network:</span>
            <span className="text-matrix-amber">1.2Mbps</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Process Control</CardTitle>
        <CardDescription>Manage system processes</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">3 active processes</p>
        <div className="space-y-1 text-xs">
          <div>• node_process.js - PID: 1234</div>
          <div>• matrix_render.exe - PID: 5678</div>
          <div>• system_monitor.sh - PID: 9012</div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">TERMINATE ALL</Button>
        <Button size="sm" variant="ghost">REFRESH</Button>
      </CardFooter>
    </Card>
  ),
};

export const TerminalCardDefault: Story = {
  render: () => (
    <TerminalCard
      title="Network Monitor"
      system="MATRIX"
      status="online"
      className="w-96"
    >
      <div className="space-y-2 text-sm font-mono">
        <div>Packets sent: 42,156</div>
        <div>Packets received: 38,901</div>
        <div>Latency: 12ms</div>
        <div>Uptime: 99.98%</div>
      </div>
    </TerminalCard>
  ),
};

export const TerminalCardWarning: Story = {
  render: () => (
    <TerminalCard
      title="Security Alert"
      system="FIREWALL"
      status="warning"
      className="w-96"
    >
      <div className="space-y-2 text-sm">
        <p className="text-matrix-amber">⚠ Suspicious activity detected</p>
        <p>3 failed login attempts from IP: 192.168.1.42</p>
        <p>Recommend immediate security audit</p>
      </div>
    </TerminalCard>
  ),
};

export const TerminalCardError: Story = {
  render: () => (
    <TerminalCard
      title="System Failure"
      system="CORE"
      status="error"
      className="w-96"
    >
      <div className="space-y-2 text-sm">
        <p className="text-matrix-red">✕ Critical system failure</p>
        <p>Unable to connect to main database</p>
        <p>Error code: 0x00FF41</p>
        <Button variant="destructive" size="sm" className="mt-4">
          INITIATE RECOVERY
        </Button>
      </div>
    </TerminalCard>
  ),
};

export const CRTEffect: Story = {
  render: () => (
    <Card variant="crt" className="w-96">
      <CardHeader>
        <CardTitle>CRT Display</CardTitle>
        <CardDescription>With scanline effect</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          This card simulates an old CRT monitor with scanlines
          and subtle flicker effects for authentic retro feel.
        </p>
      </CardContent>
    </Card>
  ),
};

export const GhostVariant: Story = {
  render: () => (
    <Card variant="ghost" className="w-96">
      <CardHeader>
        <CardTitle>Ghost Card</CardTitle>
        <CardDescription>Minimal border styling</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm opacity-80">
          A more subtle card variant with reduced visual weight.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="grid gap-4">
      <Card variant="terminal" hover className="w-96 cursor-pointer">
        <CardContent className="p-6">
          <p className="text-sm">Hover over me for glow effect</p>
        </CardContent>
      </Card>
      <Card variant="default" pulse className="w-96">
        <CardContent className="p-6">
          <p className="text-sm">I have a pulsing animation</p>
        </CardContent>
      </Card>
      <Card variant="terminal" glitch className="w-96">
        <CardContent className="p-6">
          <p className="text-sm">I have a glitch effect</p>
        </CardContent>
      </Card>
    </div>
  ),
};