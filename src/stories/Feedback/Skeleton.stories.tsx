import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@/components/ui/skeleton';

const meta = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed skeleton component for loading states.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Skeleton className="w-80 h-4" />,
};

export const Circle: Story = {
  render: () => <Skeleton className="h-12 w-12 rounded-full" />,
};

export const Card: Story = {
  render: () => (
    <div className="flex items-center space-x-4 w-80">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  ),
};

export const MatrixLoading: Story = {
  render: () => (
    <div className="w-80 space-y-4 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
      <div className="space-y-2">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  ),
};

export const SystemDashboard: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-48" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2 p-4 border border-matrix-green/30 rounded">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-4 w-16" />
        </div>

        <div className="space-y-2 p-4 border border-matrix-green/30 rounded">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-4 w-12" />
        </div>

        <div className="space-y-2 p-4 border border-matrix-green/30 rounded">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-4 w-20" />
        </div>

        <div className="space-y-2 p-4 border border-matrix-green/30 rounded">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-4 w-14" />
        </div>
      </div>

      <div className="space-y-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-40 w-full" />
      </div>
    </div>
  ),
};