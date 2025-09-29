import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const meta = {
  title: 'Data/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed avatar component for displaying user images.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/placeholder-avatar.jpg" />
      <AvatarFallback>N</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>NEO</AvatarFallback>
    </Avatar>
  ),
};

export const MatrixCrew: Story = {
  render: () => (
    <div className="flex space-x-4">
      <Avatar>
        <AvatarFallback className="bg-purple-500/20 text-purple-400">N</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-blue-500/20 text-blue-400">M</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-green-500/20 text-green-400">T</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-red-500/20 text-red-400">AS</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">S</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarFallback className="text-lg">L</AvatarFallback>
      </Avatar>
    </div>
  ),
};