import type { Meta, StoryObj } from '@storybook/react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel, SelectSeparator } from '../components/ui/select'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A dropdown select component with Matrix terminal styling for choosing from a list of options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the select is disabled',
    },
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-64 space-y-2">
      <Label htmlFor="select-with-label">Choose your preference</Label>
      <Select>
        <SelectTrigger id="select-with-label">
          <SelectValue placeholder="Select preference" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="red-pill">Red Pill</SelectItem>
          <SelectItem value="blue-pill">Blue Pill</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-64 space-y-2">
      <Label>Disabled Select</Label>
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Cannot select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <div className="w-64">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select access level" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>User Levels</SelectLabel>
            <SelectItem value="guest">Guest</SelectItem>
            <SelectItem value="user">Standard User</SelectItem>
            <SelectItem value="premium">Premium User</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Admin Levels</SelectLabel>
            <SelectItem value="moderator">Moderator</SelectItem>
            <SelectItem value="admin">Administrator</SelectItem>
            <SelectItem value="super-admin">Super Administrator</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const MatrixCharacters: Story = {
  render: () => (
    <div className="w-64 space-y-2">
      <Label>Select Character</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose your character" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>The Resistance</SelectLabel>
            <SelectItem value="neo">Neo - The One</SelectItem>
            <SelectItem value="morpheus">Morpheus - The Mentor</SelectItem>
            <SelectItem value="trinity">Trinity - The Hacker</SelectItem>
            <SelectItem value="link">Link - The Operator</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>The Machines</SelectLabel>
            <SelectItem value="agent-smith">Agent Smith</SelectItem>
            <SelectItem value="agent-brown">Agent Brown</SelectItem>
            <SelectItem value="agent-jones">Agent Jones</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Zion</SelectLabel>
            <SelectItem value="commander-locke">Commander Locke</SelectItem>
            <SelectItem value="niobe">Captain Niobe</SelectItem>
            <SelectItem value="zee">Zee - Engineer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
}

export const SystemConfiguration: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>System Configuration</CardTitle>
        <CardDescription>Configure Matrix terminal settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Terminal Theme</Label>
          <Select defaultValue="matrix-green">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="matrix-green">Matrix Green</SelectItem>
              <SelectItem value="amber">Amber Monochrome</SelectItem>
              <SelectItem value="cyan">Cyan Blue</SelectItem>
              <SelectItem value="red">Red Alert</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Security Level</Label>
          <Select defaultValue="high">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low - Basic Protection</SelectItem>
              <SelectItem value="medium">Medium - Standard Security</SelectItem>
              <SelectItem value="high">High - Enhanced Security</SelectItem>
              <SelectItem value="maximum">Maximum - Military Grade</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Connection Type</Label>
          <Select defaultValue="neural">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Standard Connections</SelectLabel>
                <SelectItem value="terminal">Terminal Interface</SelectItem>
                <SelectItem value="graphical">Graphical Interface</SelectItem>
                <SelectItem value="mobile">Mobile Interface</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Advanced Connections</SelectLabel>
                <SelectItem value="neural">Neural Link (Direct)</SelectItem>
                <SelectItem value="quantum">Quantum Entanglement</SelectItem>
                <SelectItem value="temporal">Temporal Interface</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Data Processing Mode</Label>
          <Select defaultValue="real-time">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="batch">Batch Processing</SelectItem>
              <SelectItem value="real-time">Real-time Processing</SelectItem>
              <SelectItem value="predictive">Predictive Analysis</SelectItem>
              <SelectItem value="quantum">Quantum Computing</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  ),
}

export const MultipleSelects: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
      <div className="space-y-2">
        <Label className="text-sm">Region</Label>
        <Select defaultValue="zion">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="zion">Zion</SelectItem>
            <SelectItem value="matrix">The Matrix</SelectItem>
            <SelectItem value="construct">The Construct</SelectItem>
            <SelectItem value="real-world">Real World</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm">Language</Label>
        <Select defaultValue="en">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="binary">Binary</SelectItem>
            <SelectItem value="matrix">Matrix Code</SelectItem>
            <SelectItem value="machine">Machine Language</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm">Time Zone</Label>
        <Select defaultValue="zion-time">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="zion-time">Zion Standard Time</SelectItem>
            <SelectItem value="matrix-time">Matrix Simulation Time</SelectItem>
            <SelectItem value="real-time">Real World Time</SelectItem>
            <SelectItem value="server-time">Server Time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-sm">Notification Level</Label>
        <Select defaultValue="critical">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="silent">Silent</SelectItem>
            <SelectItem value="critical">Critical Only</SelectItem>
            <SelectItem value="important">Important</SelectItem>
            <SelectItem value="all">All Notifications</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}