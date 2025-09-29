import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed multi-line text input with cyberpunk styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    rows: {
      control: { type: 'range', min: 3, max: 20, step: 1 },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your matrix code...',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2 w-80">
      <Label htmlFor="code">Matrix Code</Label>
      <Textarea {...args} id="code" />
    </div>
  ),
  args: {
    placeholder: 'def wake_up():\n    return "Welcome to the real world"',
    rows: 4,
  },
};

export const ResizeVariants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <Label>Small (3 rows)</Label>
        <Textarea placeholder="Small textarea..." rows={3} />
      </div>

      <div className="space-y-2">
        <Label>Medium (6 rows)</Label>
        <Textarea placeholder="Medium textarea..." rows={6} />
      </div>

      <div className="space-y-2">
        <Label>Large (10 rows)</Label>
        <Textarea placeholder="Large textarea..." rows={10} />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'System offline...',
    disabled: true,
    rows: 4,
  },
};

export const WithContent: Story = {
  args: {
    defaultValue: `// Matrix initialization sequence
function initializeMatrix() {
  console.log("Wake up, Neo...");
  const reality = new Matrix();
  return reality.load();
}

// Execute the program
initializeMatrix();`,
    rows: 8,
  },
};

export const MessageForm: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <div className="space-y-2">
        <Label htmlFor="message">Transmission</Label>
        <Textarea
          id="message"
          placeholder="Enter your message to Zion..."
          rows={6}
        />
      </div>

      <div className="flex justify-between text-xs text-matrix-green/70 font-mono">
        <span>Encryption: AES-256</span>
        <span>Status: Ready to transmit</span>
      </div>
    </div>
  ),
};

export const CodeEditor: Story = {
  render: () => (
    <div className="space-y-2 w-96">
      <div className="flex justify-between items-center">
        <Label htmlFor="editor">Terminal Editor</Label>
        <span className="text-xs text-matrix-green/70 font-mono">matrix.py</span>
      </div>
      <Textarea
        id="editor"
        className="font-mono text-sm"
        rows={12}
        defaultValue={`#!/usr/bin/env python3
"""
The Matrix has you...
Follow the white rabbit.
"""

class RedPill:
    def __init__(self):
        self.truth = "The Matrix is everywhere"

    def reveal_reality(self):
        print(self.truth)
        return True

class BluePill:
    def __init__(self):
        self.illusion = "Nothing happened"

    def maintain_sleep(self):
        print(self.illusion)
        return False

# The choice is yours
morpheus_offer = input("Red pill or blue pill? ")

if morpheus_offer.lower() == "red":
    pill = RedPill()
    pill.reveal_reality()
else:
    pill = BluePill()
    pill.maintain_sleep()`}
      />
    </div>
  ),
};