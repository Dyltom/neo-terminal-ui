import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const meta = {
  title: 'Forms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed label component for form elements with cyberpunk styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Matrix Terminal',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="neo" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">I accept the terms of the Matrix</Label>
    </div>
  ),
};

export const WithRadioGroup: Story = {
  render: () => (
    <div className="space-y-3">
      <Label>Choose Your Reality</Label>
      <RadioGroup defaultValue="none">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="red" id="red" />
          <Label htmlFor="red">Red Pill</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="blue" id="blue" />
          <Label htmlFor="blue">Blue Pill</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="none" id="none" />
          <Label htmlFor="none">No Choice</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="required-field">
        Access Code <span className="text-red-400">*</span>
      </Label>
      <Input id="required-field" placeholder="Required field..." />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="security-key">Security Key</Label>
      <Input id="security-key" placeholder="Enter your neural interface key..." />
      <p className="text-xs text-muted-foreground">
        Your unique identifier for Matrix access protocols
      </p>
    </div>
  ),
};

export const FormLabels: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <Label htmlFor="codename" className="text-base font-medium">
          Agent Codename
        </Label>
        <Input id="codename" placeholder="Smith, Brown, Johnson..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="clearance" className="text-sm">
          Security Clearance
        </Label>
        <Input id="clearance" placeholder="Level 1-5" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio" className="text-lg">
          Background Information
        </Label>
        <Input id="bio" placeholder="Pre-awakening life details..." />
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="normal" className="text-matrix-green">
          Normal Label (Matrix Green)
        </Label>
        <Input id="normal" placeholder="Standard input..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="warning" className="text-yellow-400">
          Warning Label (Yellow)
        </Label>
        <Input id="warning" placeholder="Caution required..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="error" className="text-red-400">
          Error Label (Red)
        </Label>
        <Input id="error" placeholder="Invalid input..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="success" className="text-green-400">
          Success Label (Green)
        </Label>
        <Input id="success" placeholder="Validated input..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="disabled" className="opacity-50">
          Disabled Label
        </Label>
        <Input id="disabled" placeholder="Disabled input..." disabled />
      </div>
    </div>
  ),
};

export const FormSection: Story = {
  render: () => (
    <div className="space-y-6 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
      <div>
        <Label className="text-lg font-mono text-matrix-green">
          Matrix Authentication
        </Label>
        <p className="text-sm text-muted-foreground mt-1">
          Enter your credentials to access the Matrix interface
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="user-id">User ID</Label>
          <Input id="user-id" placeholder="neo@matrix.com" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="neural-key">Neural Interface Key</Label>
          <Input id="neural-key" type="password" placeholder="••••••••••••" />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember neural patterns</Label>
        </div>
      </div>
    </div>
  ),
};

export const LabelSizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="small" className="text-xs">
          Small Label (12px)
        </Label>
        <Input id="small" placeholder="Small label input..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="default" className="text-sm">
          Default Label (14px)
        </Label>
        <Input id="default" placeholder="Default label input..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="medium" className="text-base">
          Medium Label (16px)
        </Label>
        <Input id="medium" placeholder="Medium label input..." />
      </div>

      <div className="space-y-2">
        <Label htmlFor="large" className="text-lg">
          Large Label (18px)
        </Label>
        <Input id="large" placeholder="Large label input..." />
      </div>
    </div>
  ),
};