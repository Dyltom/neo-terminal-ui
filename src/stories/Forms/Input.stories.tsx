import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Search, User, Mail, Lock } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed input component with cyberpunk styling and neon effects.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'search', 'number', 'tel', 'url'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your command...',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Label htmlFor="username">Username</Label>
      <Input {...args} id="username" />
    </div>
  ),
  args: {
    placeholder: 'neo',
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-matrix-green opacity-70" />
      <Input {...args} className="pl-10" />
    </div>
  ),
  args: {
    placeholder: 'Search the Matrix...',
  },
};

export const PasswordInput: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-2">
        <Label htmlFor="password">Access Code</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-matrix-green opacity-70" />
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter access code..."
            className="pl-10 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-matrix-green opacity-70 hover:opacity-100 transition-opacity"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Connection terminated...',
    disabled: true,
  },
};

export const FormGroup: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="user">User ID</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-matrix-green opacity-70" />
          <Input id="user" placeholder="neo" className="pl-10" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Terminal</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-matrix-green opacity-70" />
          <Input id="email" type="email" placeholder="neo@matrix.com" className="pl-10" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pass">Security Key</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-matrix-green opacity-70" />
          <Input id="pass" type="password" placeholder="•••••••••" className="pl-10" />
        </div>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div>
        <h3 className="text-lg font-mono text-matrix-green mb-2">Default</h3>
        <Input placeholder="Standard input..." />
      </div>

      <div>
        <h3 className="text-lg font-mono text-matrix-green mb-2">With Icon</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-matrix-green opacity-70" />
          <Input placeholder="Search..." className="pl-10" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-mono text-matrix-green mb-2">Password</h3>
        <Input type="password" placeholder="•••••••••" />
      </div>

      <div>
        <h3 className="text-lg font-mono text-matrix-green mb-2">Disabled</h3>
        <Input placeholder="Disabled..." disabled />
      </div>
    </div>
  ),
};