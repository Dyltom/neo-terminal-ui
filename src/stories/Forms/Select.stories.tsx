import type { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const meta = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed select dropdown component with cyberpunk styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select option..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Label htmlFor="matrix-select">Choose Your Reality</Label>
      <Select {...args}>
        <SelectTrigger id="matrix-select" className="w-[200px]">
          <SelectValue placeholder="Select reality..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="matrix">The Matrix</SelectItem>
          <SelectItem value="real-world">Real World</SelectItem>
          <SelectItem value="simulation">Simulation</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Select {...args} disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Access denied..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const MatrixPrograms: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="program-select">Load Matrix Program</Label>
      <Select>
        <SelectTrigger id="program-select" className="w-[250px]">
          <SelectValue placeholder="Select program..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="training">Training Simulation</SelectItem>
          <SelectItem value="construct">Construct Loading</SelectItem>
          <SelectItem value="jump">Jump Program</SelectItem>
          <SelectItem value="woman-in-red">Woman in Red</SelectItem>
          <SelectItem value="agents" className="text-red-400">
            Agent Training (Dangerous)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const SecurityClearance: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="clearance-select">Security Clearance</Label>
      <Select defaultValue="level2">
        <SelectTrigger id="clearance-select" className="w-[200px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="level1">
            <span className="text-green-400">Level 1</span> - Basic
          </SelectItem>
          <SelectItem value="level2">
            <span className="text-yellow-400">Level 2</span> - Standard
          </SelectItem>
          <SelectItem value="level3">
            <span className="text-orange-400">Level 3</span> - Advanced
          </SelectItem>
          <SelectItem value="level4">
            <span className="text-red-400">Level 4</span> - Admin
          </SelectItem>
          <SelectItem value="level5" disabled>
            <span className="text-purple-400">Level 5</span> - Architect
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const MatrixCharacters: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="character-select">Choose Your Avatar</Label>
      <Select>
        <SelectTrigger id="character-select" className="w-[220px]">
          <SelectValue placeholder="Select character..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="neo">
            <div className="flex flex-col">
              <span className="font-medium">Neo</span>
              <span className="text-xs text-muted-foreground">The One</span>
            </div>
          </SelectItem>
          <SelectItem value="morpheus">
            <div className="flex flex-col">
              <span className="font-medium">Morpheus</span>
              <span className="text-xs text-muted-foreground">Captain of Nebuchadnezzar</span>
            </div>
          </SelectItem>
          <SelectItem value="trinity">
            <div className="flex flex-col">
              <span className="font-medium">Trinity</span>
              <span className="text-xs text-muted-foreground">First Mate</span>
            </div>
          </SelectItem>
          <SelectItem value="agent-smith">
            <div className="flex flex-col">
              <span className="font-medium text-red-400">Agent Smith</span>
              <span className="text-xs text-red-400/70">System Security</span>
            </div>
          </SelectItem>
          <SelectItem value="oracle">
            <div className="flex flex-col">
              <span className="font-medium">The Oracle</span>
              <span className="text-xs text-muted-foreground">Intuitive Program</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const MatrixLocations: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="location-select">Jack In Location</Label>
      <Select>
        <SelectTrigger id="location-select" className="w-[240px]">
          <SelectValue placeholder="Choose location..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="zion">
            <div className="flex justify-between items-center w-full">
              <span>Zion</span>
              <span className="text-green-400 text-xs">●</span>
            </div>
          </SelectItem>
          <SelectItem value="nebuchadnezzar">
            <div className="flex justify-between items-center w-full">
              <span>Nebuchadnezzar</span>
              <span className="text-green-400 text-xs">●</span>
            </div>
          </SelectItem>
          <SelectItem value="matrix-city">
            <div className="flex justify-between items-center w-full">
              <span>Matrix City</span>
              <span className="text-yellow-400 text-xs">●</span>
            </div>
          </SelectItem>
          <SelectItem value="construct">
            <div className="flex justify-between items-center w-full">
              <span>Construct</span>
              <span className="text-blue-400 text-xs">●</span>
            </div>
          </SelectItem>
          <SelectItem value="agent-facility" disabled>
            <div className="flex justify-between items-center w-full">
              <span>Agent Facility</span>
              <span className="text-red-400 text-xs">●</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="space-y-6 p-6 border border-matrix-green/30 rounded-lg bg-black/50 w-80">
      <h3 className="text-lg font-mono text-matrix-green">Matrix Connection Setup</h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="server-select">Server Location</Label>
          <Select>
            <SelectTrigger id="server-select">
              <SelectValue placeholder="Select server..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us-east">US East Coast</SelectItem>
              <SelectItem value="us-west">US West Coast</SelectItem>
              <SelectItem value="europe">European Node</SelectItem>
              <SelectItem value="asia">Asian Gateway</SelectItem>
              <SelectItem value="australia">Australian Hub</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="protocol-select">Connection Protocol</Label>
          <Select defaultValue="encrypted">
            <SelectTrigger id="protocol-select">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="encrypted">Encrypted</SelectItem>
              <SelectItem value="stealth">Stealth Mode</SelectItem>
              <SelectItem value="agent-proof">Agent-Proof</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="bandwidth-select">Bandwidth</Label>
          <Select>
            <SelectTrigger id="bandwidth-select">
              <SelectValue placeholder="Select bandwidth..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low (56k)</SelectItem>
              <SelectItem value="medium">Medium (Broadband)</SelectItem>
              <SelectItem value="high">High (Fiber)</SelectItem>
              <SelectItem value="maximum">Maximum (Direct Neural)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  ),
};