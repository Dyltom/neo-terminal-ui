import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed checkbox component with neon glow effects.',
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
} satisfies Meta<typeof Checkbox>;

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

export const Indeterminate: Story = {
  args: {
    checked: 'indeterminate',
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
      <Checkbox {...args} id="terms" />
      <Label htmlFor="terms">Accept the terms of the Matrix</Label>
    </div>
  ),
};

export const FormGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="redpill" />
        <Label htmlFor="redpill">Take the red pill</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="bluepill" />
        <Label htmlFor="bluepill">Take the blue pill</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="awakened" checked />
        <Label htmlFor="awakened">Already awakened</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="agent" disabled />
        <Label htmlFor="agent" className="opacity-50">Be an Agent (disabled)</Label>
      </div>
    </div>
  ),
};

export const MatrixOptions: Story = {
  render: () => (
    <div className="space-y-6 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
      <h3 className="text-lg font-mono text-matrix-green">System Preferences</h3>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="digital-rain" defaultChecked />
          <Label htmlFor="digital-rain">Enable digital rain</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="green-tint" defaultChecked />
          <Label htmlFor="green-tint">Green tint display</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="enhanced-vision" />
          <Label htmlFor="enhanced-vision">Enhanced reality vision</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="bullet-time" />
          <Label htmlFor="bullet-time">Bullet-time capability</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="agent-detection" defaultChecked />
          <Label htmlFor="agent-detection">Agent detection system</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="zion-network" checked="indeterminate" />
          <Label htmlFor="zion-network">Zion network connection</Label>
        </div>
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="space-y-3">
        <h4 className="font-mono text-matrix-green text-sm">Normal States</h4>

        <div className="flex items-center space-x-2">
          <Checkbox id="unchecked" />
          <Label htmlFor="unchecked" className="text-sm">Unchecked</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="checked" checked />
          <Label htmlFor="checked" className="text-sm">Checked</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="indeterminate" checked="indeterminate" />
          <Label htmlFor="indeterminate" className="text-sm">Indeterminate</Label>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-mono text-matrix-green text-sm">Disabled States</h4>

        <div className="flex items-center space-x-2">
          <Checkbox id="disabled-unchecked" disabled />
          <Label htmlFor="disabled-unchecked" className="text-sm opacity-50">Disabled</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="disabled-checked" disabled checked />
          <Label htmlFor="disabled-checked" className="text-sm opacity-50">Disabled Checked</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="disabled-indeterminate" disabled checked="indeterminate" />
          <Label htmlFor="disabled-indeterminate" className="text-sm opacity-50">Disabled Indeterminate</Label>
        </div>
      </div>
    </div>
  ),
};