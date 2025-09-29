import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/ui/button';
import { Download, Upload, Play, Pause, Settings } from 'lucide-react';

const meta = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed button component with cyberpunk styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Jack In',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button>
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button variant="outline">
        <Upload className="mr-2 h-4 w-4" />
        Upload
      </Button>
      <Button size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  ),
};

export const MatrixActions: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button className="bg-green-600 hover:bg-green-700">
          <Play className="mr-2 h-4 w-4" />
          Enter Matrix
        </Button>
        <Button variant="destructive">
          <Pause className="mr-2 h-4 w-4" />
          Emergency Jack Out
        </Button>
      </div>

      <div className="flex gap-2">
        <Button variant="outline">Load Training Program</Button>
        <Button variant="outline">Contact Zion</Button>
      </div>

      <div className="flex gap-2">
        <Button variant="ghost" size="sm">View Logs</Button>
        <Button variant="ghost" size="sm">System Status</Button>
        <Button variant="ghost" size="sm">Crew Roster</Button>
      </div>
    </div>
  ),
};