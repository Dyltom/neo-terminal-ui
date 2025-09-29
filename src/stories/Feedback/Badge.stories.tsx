import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@/components/ui/badge';

const meta = {
  title: 'Feedback/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed badge component for displaying status and labels.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The One',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Captain',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Agent',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Crew Member',
  },
};

export const MatrixRoles: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>The One</Badge>
      <Badge variant="secondary">Captain</Badge>
      <Badge variant="secondary">First Mate</Badge>
      <Badge variant="outline">Operator</Badge>
      <Badge variant="outline">Navigator</Badge>
      <Badge variant="destructive">Agent</Badge>
      <Badge variant="destructive">Traitor</Badge>
    </div>
  ),
};

export const SystemStatus: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <span>Power Core:</span>
        <Badge className="bg-green-500 hover:bg-green-600">Online</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Navigation:</span>
        <Badge className="bg-yellow-500 hover:bg-yellow-600">Warning</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Stealth Systems:</span>
        <Badge variant="destructive">Offline</Badge>
      </div>
      <div className="flex items-center space-x-2">
        <span>Life Support:</span>
        <Badge className="bg-green-500 hover:bg-green-600">Optimal</Badge>
      </div>
    </div>
  ),
};

export const SecurityClearance: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span>Neo</span>
        <Badge className="bg-purple-500 hover:bg-purple-600">Omega</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span>Morpheus</span>
        <Badge className="bg-red-500 hover:bg-red-600">Alpha</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span>Trinity</span>
        <Badge className="bg-red-500 hover:bg-red-600">Alpha</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span>Tank</span>
        <Badge className="bg-orange-500 hover:bg-orange-600">Beta</Badge>
      </div>
      <div className="flex items-center justify-between">
        <span>Mouse</span>
        <Badge variant="outline">Gamma</Badge>
      </div>
    </div>
  ),
};