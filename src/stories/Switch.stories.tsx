import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '../components/ui/switch'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toggle switch component with Matrix terminal styling for boolean settings.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="default-switch" />
      <Label htmlFor="default-switch">Enable notifications</Label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="checked-switch" defaultChecked />
      <Label htmlFor="checked-switch">Already enabled</Label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-switch" disabled />
      <Label htmlFor="disabled-switch" className="opacity-50">
        Disabled option
      </Label>
    </div>
  ),
}

export const DisabledChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="disabled-checked-switch" disabled defaultChecked />
      <Label htmlFor="disabled-checked-switch" className="opacity-50">
        Disabled and checked
      </Label>
    </div>
  ),
}

export const SettingsPanel: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Matrix Settings</CardTitle>
        <CardDescription>Configure your Matrix terminal preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="sound-effects">Sound Effects</Label>
            <p className="text-sm text-matrix-green/60">
              Play audio feedback for terminal actions
            </p>
          </div>
          <Switch id="sound-effects" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="animations">Matrix Animations</Label>
            <p className="text-sm text-matrix-green/60">
              Enable falling code animation effects
            </p>
          </div>
          <Switch id="animations" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="auto-save">Auto Save</Label>
            <p className="text-sm text-matrix-green/60">
              Automatically save your work every 30 seconds
            </p>
          </div>
          <Switch id="auto-save" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <p className="text-sm text-matrix-green/60">
              Use dark theme for the interface
            </p>
          </div>
          <Switch id="dark-mode" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="developer-mode">Developer Mode</Label>
            <p className="text-sm text-matrix-green/60">
              Enable advanced debugging features
            </p>
          </div>
          <Switch id="developer-mode" />
        </div>
      </CardContent>
    </Card>
  ),
}

export const SecuritySettings: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Security Configuration</CardTitle>
        <CardDescription>Manage your Matrix security settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="two-factor">Two-Factor Authentication</Label>
            <p className="text-sm text-matrix-green/60">
              Require additional verification for login
            </p>
          </div>
          <Switch id="two-factor" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="encryption">End-to-End Encryption</Label>
            <p className="text-sm text-matrix-green/60">
              Encrypt all data transmissions
            </p>
          </div>
          <Switch id="encryption" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="stealth">Stealth Mode</Label>
            <p className="text-sm text-matrix-green/60">
              Hide your online status from other users
            </p>
          </div>
          <Switch id="stealth" />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="auto-logout">Auto Logout</Label>
            <p className="text-sm text-matrix-green/60">
              Automatically logout after 30 minutes of inactivity
            </p>
          </div>
          <Switch id="auto-logout" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="audit-log">Security Audit Log</Label>
            <p className="text-sm text-matrix-green/60">
              Log all security-related events
            </p>
          </div>
          <Switch id="audit-log" defaultChecked />
        </div>
      </CardContent>
    </Card>
  ),
}

export const SystemControls: Story = {
  render: () => (
    <div className="space-y-4 w-72">
      <h3 className="text-lg font-semibold text-matrix-green">SYSTEM CONTROLS</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="power">Main Power</Label>
          <Switch id="power" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="network">Network Interface</Label>
          <Switch id="network" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="firewall">Firewall Protection</Label>
          <Switch id="firewall" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="monitoring">System Monitoring</Label>
          <Switch id="monitoring" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="backup">Automated Backup</Label>
          <Switch id="backup" />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="maintenance">Maintenance Mode</Label>
          <Switch id="maintenance" />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="emergency">Emergency Protocols</Label>
          <Switch id="emergency" disabled />
        </div>
      </div>
    </div>
  ),
}