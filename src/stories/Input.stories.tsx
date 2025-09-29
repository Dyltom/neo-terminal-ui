import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    success: {
      control: 'boolean',
    },
    withCursor: {
      control: 'boolean',
    },
    terminal: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter command...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
  },
};

export const TerminalStyle: Story = {
  args: {
    label: 'Command',
    terminal: true,
    placeholder: 'Type your command...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: 'Invalid password format',
    defaultValue: 'weak',
  },
};

export const Success: Story = {
  args: {
    label: 'Email',
    type: 'email',
    success: true,
    defaultValue: 'user@matrix.io',
  },
};

export const WithCursor: Story = {
  args: {
    label: 'Terminal Input',
    withCursor: true,
    terminal: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Locked Field',
    disabled: true,
    defaultValue: 'READ ONLY',
  },
};

export const TextareaDefault: Story = {
  render: () => (
    <Textarea
      label="Message"
      placeholder="Enter your message..."
      rows={5}
    />
  ),
};

export const TextareaTerminal: Story = {
  render: () => (
    <Textarea
      label="System Log"
      terminal
      defaultValue={`> System initialized
> Loading modules...
> Connection established
> Ready for input`}
      rows={6}
    />
  ),
};

export const TextareaWithError: Story = {
  render: () => (
    <Textarea
      label="Config"
      error="Invalid JSON format"
      defaultValue="{invalid json}"
      rows={4}
    />
  ),
};

export const InputTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Input label="Text" type="text" placeholder="Enter text..." />
      <Input label="Password" type="password" placeholder="Enter password..." />
      <Input label="Email" type="email" placeholder="user@example.com" />
      <Input label="Number" type="number" placeholder="42" />
      <Input label="Search" type="search" placeholder="Search..." terminal />
    </div>
  ),
};