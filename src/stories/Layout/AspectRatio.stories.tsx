import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const meta = {
  title: 'Layout/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed aspect ratio component for maintaining proportional layouts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: { type: 'number', min: 0.1, max: 5, step: 0.1 },
    },
  },
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Square: Story = {
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args} ratio={1}>
        <div className="rounded-md bg-gradient-to-r from-matrix-green/20 to-green-500/20 border border-matrix-green/30 flex items-center justify-center">
          <span className="text-matrix-green font-mono">1:1 Square</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Video: Story = {
  render: (args) => (
    <div className="w-80">
      <AspectRatio {...args} ratio={16 / 9}>
        <div className="rounded-md bg-gradient-to-r from-matrix-green/20 to-green-500/20 border border-matrix-green/30 flex items-center justify-center">
          <span className="text-matrix-green font-mono">16:9 Video</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  render: (args) => (
    <div className="w-60">
      <AspectRatio {...args} ratio={3 / 4}>
        <div className="rounded-md bg-gradient-to-b from-matrix-green/20 to-green-500/20 border border-matrix-green/30 flex items-center justify-center">
          <span className="text-matrix-green font-mono">3:4 Portrait</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const MatrixScreen: Story = {
  render: () => (
    <div className="w-96">
      <AspectRatio ratio={4 / 3}>
        <div className="rounded-md bg-black border border-matrix-green/50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matrix-green/5 to-transparent animate-pulse" />
          <div className="text-matrix-green font-mono text-center space-y-2">
            <div className="text-lg">MATRIX TERMINAL</div>
            <div className="text-xs opacity-70">4:3 ASPECT RATIO</div>
            <div className="text-xs animate-pulse">_ READY FOR INPUT</div>
          </div>
        </div>
      </AspectRatio>
    </div>
  ),
};