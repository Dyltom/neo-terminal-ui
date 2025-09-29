import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@/components/ui/separator';

const meta = {
  title: 'Layout/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed separator component for dividing content sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    decorative: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-80 space-y-4">
      <p>Matrix connection established</p>
      <Separator {...args} />
      <p>Ready to begin transmission</p>
    </div>
  ),
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-20 items-center space-x-4">
      <span>Neo</span>
      <Separator {...args} />
      <span>The One</span>
      <Separator {...args} />
      <span>Zion</span>
    </div>
  ),
  args: {
    orientation: 'vertical',
  },
};

export const InCard: Story = {
  render: () => (
    <div className="p-6 border border-matrix-green/30 rounded-lg bg-black/50 w-80">
      <h3 className="text-lg font-mono text-matrix-green">System Status</h3>
      <p className="text-sm text-muted-foreground">Nebuchadnezzar Ship Systems</p>

      <Separator className="my-4" />

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Power Core</span>
          <span className="text-green-400">92%</span>
        </div>
        <div className="flex justify-between">
          <span>Life Support</span>
          <span className="text-green-400">98%</span>
        </div>
      </div>

      <Separator className="my-4" />

      <p className="text-xs text-muted-foreground">Last updated: 14:32:01</p>
    </div>
  ),
};

export const WithContent: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div>
        <h2 className="text-xl font-bold text-matrix-green">Matrix Protocols</h2>
        <p className="text-muted-foreground">Essential rules for survival</p>
      </div>

      <Separator />

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Rule #1</h3>
          <p className="text-sm">Never trust a man in a black suit</p>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold">Rule #2</h3>
          <p className="text-sm">The body cannot live without the mind</p>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold">Rule #3</h3>
          <p className="text-sm">There is no spoon</p>
        </div>
      </div>
    </div>
  ),
};