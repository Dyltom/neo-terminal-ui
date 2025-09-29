import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed radio group component for exclusive selections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDefaultValue: Story = {
  render: (args) => (
    <RadioGroup {...args} defaultValue="red">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="red" id="red" />
        <Label htmlFor="red">Red Pill</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="blue" id="blue" />
        <Label htmlFor="blue">Blue Pill</Label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup {...args} orientation="horizontal" className="flex space-x-6">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="neo" id="neo" />
        <Label htmlFor="neo">Neo</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="morpheus" id="morpheus" />
        <Label htmlFor="morpheus">Morpheus</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="trinity" id="trinity" />
        <Label htmlFor="trinity">Trinity</Label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="disabled1" />
        <Label htmlFor="disabled1">Disabled Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="disabled2" />
        <Label htmlFor="disabled2">Disabled Option 2</Label>
      </div>
    </RadioGroup>
  ),
};

export const PillChoice: Story = {
  render: () => (
    <div className="space-y-4 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
      <h3 className="text-lg font-mono text-matrix-green">Choose Your Path</h3>
      <p className="text-sm text-matrix-green/70">
        This is your last chance. After this, there is no going back.
      </p>

      <RadioGroup defaultValue="none" className="space-y-3">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="red" id="red-pill" />
          <Label htmlFor="red-pill" className="cursor-pointer">
            <span className="text-red-400">Red Pill</span> - You stay in Wonderland and see how deep the rabbit hole goes
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="blue" id="blue-pill" />
          <Label htmlFor="blue-pill" className="cursor-pointer">
            <span className="text-blue-400">Blue Pill</span> - The story ends, you wake up and believe whatever you want
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="none" id="no-choice" />
          <Label htmlFor="no-choice" className="cursor-pointer opacity-70">
            No choice - Remain in the simulation
          </Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const SecurityLevel: Story = {
  render: () => (
    <div className="space-y-4 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
      <h3 className="text-lg font-mono text-matrix-green">Security Clearance Level</h3>

      <RadioGroup defaultValue="level2">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="level1" id="level1" />
          <Label htmlFor="level1" className="cursor-pointer">
            <span className="text-green-400">Level 1</span> - Basic access
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="level2" id="level2" />
          <Label htmlFor="level2" className="cursor-pointer">
            <span className="text-yellow-400">Level 2</span> - Standard operations
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="level3" id="level3" />
          <Label htmlFor="level3" className="cursor-pointer">
            <span className="text-orange-400">Level 3</span> - Advanced protocols
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="level4" id="level4" />
          <Label htmlFor="level4" className="cursor-pointer">
            <span className="text-red-400">Level 4</span> - Administrator privileges
          </Label>
        </div>
        <div className="flex items-center space-x-2 opacity-50">
          <RadioGroupItem value="level5" id="level5" disabled />
          <Label htmlFor="level5" className="cursor-not-allowed">
            <span className="text-purple-400">Level 5</span> - The Architect (Access Denied)
          </Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const MatrixPrograms: Story = {
  render: () => (
    <div className="space-y-4 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
      <h3 className="text-lg font-mono text-matrix-green">Load Matrix Program</h3>

      <RadioGroup defaultValue="training">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="training" id="training" />
          <Label htmlFor="training" className="cursor-pointer">
            Training Simulation - Sparring program
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="construct" id="construct" />
          <Label htmlFor="construct" className="cursor-pointer">
            Construct - Loading environment
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="jump" id="jump" />
          <Label htmlFor="jump" className="cursor-pointer">
            Jump Program - There is no spoon
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="woman-in-red" id="woman-in-red" />
          <Label htmlFor="woman-in-red" className="cursor-pointer">
            Woman in Red - Distraction protocol
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="agents" id="agents" />
          <Label htmlFor="agents" className="cursor-pointer text-red-400">
            Agent Training - Warning: Lethal program
          </Label>
        </div>
      </RadioGroup>
    </div>
  ),
};