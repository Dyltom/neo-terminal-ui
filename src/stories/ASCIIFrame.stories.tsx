import type { Meta, StoryObj } from '@storybook/react';
import { ASCIIFrame, ASCIIBox } from '../components/matrix-effects/ASCIIFrame';

const meta = {
  title: 'Components/ASCIIFrame',
  component: ASCIIFrame,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'matrix-dark',
      values: [
        { name: 'matrix-dark', value: '#0a0a0a' },
        { name: 'matrix-black', value: '#001100' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: 'select',
      options: ['single', 'double', 'rounded', 'heavy', 'dashed', 'custom'],
      description: 'Frame style',
    },
    color: {
      control: 'select',
      options: ['green-100', 'green-200', 'green-300', 'green-400', 'amber', 'red'],
      description: 'Frame color',
    },
    width: {
      control: { type: 'range', min: 20, max: 80, step: 5 },
      description: 'Frame width in characters',
    },
    animate: {
      control: 'boolean',
      description: 'Enable pulse animation',
    },
    padding: {
      control: 'boolean',
      description: 'Add padding inside frame',
    },
  },
} satisfies Meta<typeof ASCIIFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 40,
    style: 'single',
    color: 'green-300',
    children: 'HELLO WORLD',
  },
};

export const DoubleFrame: Story = {
  args: {
    width: 50,
    style: 'double',
    color: 'green-100',
    children: 'SYSTEM STATUS: ONLINE',
  },
};

export const WithTitle: Story = {
  args: {
    width: 45,
    style: 'double',
    color: 'green-200',
    title: 'TERMINAL',
    children: 'Ready for input...',
    padding: true,
  },
};

export const Animated: Story = {
  args: {
    width: 40,
    style: 'heavy',
    color: 'amber',
    animate: true,
    children: 'WARNING',
  },
};

export const RedAlert: Story = {
  args: {
    width: 35,
    style: 'double',
    color: 'red',
    animate: true,
    title: 'ERROR',
    children: 'System failure',
  },
};

export const AllStyles: Story = {
  render: () => (
    <div className="space-y-4">
      <ASCIIFrame style="single" color="green-200" width={40}>
        Single Frame
      </ASCIIFrame>
      <ASCIIFrame style="double" color="green-100" width={40}>
        Double Frame
      </ASCIIFrame>
      <ASCIIFrame style="rounded" color="green-300" width={40}>
        Rounded Frame
      </ASCIIFrame>
      <ASCIIFrame style="heavy" color="amber" width={40}>
        Heavy Frame
      </ASCIIFrame>
      <ASCIIFrame style="dashed" color="green-400" width={40}>
        Dashed Frame
      </ASCIIFrame>
      <ASCIIFrame style="custom" color="red" width={40}>
        Custom Frame
      </ASCIIFrame>
    </div>
  ),
};

export const BoxComponent: Story = {
  render: () => (
    <div className="space-y-4">
      <ASCIIBox
        title="SYSTEM INFO"
        style="double"
        color="green-200"
        width="400px"
        height="200px"
      >
        <div className="space-y-2">
          <p className="text-matrix-green-100">CPU: 2.4%</p>
          <p className="text-matrix-green-100">Memory: 128KB</p>
          <p className="text-matrix-green-100">Uptime: 3600s</p>
        </div>
      </ASCIIBox>
    </div>
  ),
};