import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed switch component for binary state control.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Switch {...args} id="mode" />
      <Label htmlFor="mode">Matrix Mode</Label>
    </div>
  ),
};

export const MatrixSettings: Story = {
  render: () => (
    <div className="space-y-6 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
      <h3 className="text-lg font-mono text-matrix-green">System Configuration</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="digital-rain" className="font-medium">Digital Rain Effect</Label>
          <Switch id="digital-rain" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="green-tint" className="font-medium">Green Tint Display</Label>
          <Switch id="green-tint" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="enhanced-vision" className="font-medium">Enhanced Vision</Label>
          <Switch id="enhanced-vision" />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="bullet-time" className="font-medium">Bullet Time Capability</Label>
          <Switch id="bullet-time" />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="agent-detection" className="font-medium">Agent Detection System</Label>
          <Switch id="agent-detection" defaultChecked />
        </div>

        <div className="flex items-center justify-between opacity-50">
          <Label htmlFor="god-mode" className="font-medium">God Mode</Label>
          <Switch id="god-mode" disabled />
        </div>
      </div>
    </div>
  ),
};

export const SecurityToggles: Story = {
  render: () => (
    <div className="space-y-6 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
      <h3 className="text-lg font-mono text-matrix-green">Security Protocols</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="encryption" className="font-medium">Data Encryption</Label>
            <p className="text-xs text-muted-foreground">Encrypt all data transmissions</p>
          </div>
          <Switch id="encryption" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="stealth-mode" className="font-medium">Stealth Mode</Label>
            <p className="text-xs text-muted-foreground">Hide from Agent detection</p>
          </div>
          <Switch id="stealth-mode" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="auto-jack-out" className="font-medium">Auto Jack Out</Label>
            <p className="text-xs text-muted-foreground">Automatically disconnect on Agent proximity</p>
          </div>
          <Switch id="auto-jack-out" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <Label htmlFor="trace-protection" className="font-medium">Trace Protection</Label>
            <p className="text-xs text-muted-foreground">Prevent location tracking</p>
          </div>
          <Switch id="trace-protection" defaultChecked />
        </div>

        <div className="flex items-center justify-between opacity-50">
          <div className="space-y-1">
            <Label htmlFor="architect-access" className="font-medium">Architect Access</Label>
            <p className="text-xs text-muted-foreground">Access to core Matrix functions</p>
          </div>
          <Switch id="architect-access" disabled />
        </div>
      </div>
    </div>
  ),
};

export const PowerManagement: Story = {
  render: () => (
    <div className="space-y-6 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
      <h3 className="text-lg font-mono text-matrix-green">Power Management</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="low-power" className="font-medium">Low Power Mode</Label>
          <Switch id="low-power" />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="battery-saver" className="font-medium">Battery Saver</Label>
          <Switch id="battery-saver" />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="performance-mode" className="font-medium">Performance Mode</Label>
          <Switch id="performance-mode" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="overclock" className="font-medium text-orange-400">Overclock Neural Interface</Label>
          <Switch id="overclock" />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="emergency-power" className="font-medium text-red-400">Emergency Power Reserve</Label>
          <Switch id="emergency-power" defaultChecked />
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 p-4">
      <div className="space-y-4">
        <h4 className="font-mono text-matrix-green text-sm">Normal States</h4>

        <div className="flex items-center justify-between">
          <Label htmlFor="off" className="text-sm">Off</Label>
          <Switch id="off" />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="on" className="text-sm">On</Label>
          <Switch id="on" checked />
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-mono text-matrix-green text-sm">Disabled States</h4>

        <div className="flex items-center justify-between">
          <Label htmlFor="disabled-off" className="text-sm opacity-50">Disabled Off</Label>
          <Switch id="disabled-off" disabled />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="disabled-on" className="text-sm opacity-50">Disabled On</Label>
          <Switch id="disabled-on" disabled checked />
        </div>
      </div>
    </div>
  ),
};

export const QuickToggle: Story = {
  render: () => (
    <div className="flex items-center space-x-3 p-4 border border-matrix-green/30 rounded-lg bg-black/20">
      <Switch id="quick" defaultChecked />
      <div>
        <Label htmlFor="quick" className="font-medium">Quick Jack-In</Label>
        <p className="text-xs text-muted-foreground">Skip authentication protocols</p>
      </div>
    </div>
  ),
};