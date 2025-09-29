import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/components/ui/toggle';
import { Bold, Italic, Underline } from 'lucide-react';

const meta = {
  title: 'Buttons/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed toggle button component.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    pressed: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
    children: 'Pressed',
  },
};

export const WithIcon: Story = {
  render: () => (
    <Toggle>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const MatrixToggles: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle pressed>
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle>
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle>
        <Underline className="h-4 w-4" />
      </Toggle>
    </div>
  ),
};