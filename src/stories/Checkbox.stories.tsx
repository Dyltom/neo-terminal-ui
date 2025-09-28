import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../components/ui/checkbox'
import { Label } from '../components/ui/label'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A checkbox input component with Matrix terminal styling for boolean selections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'default-checkbox',
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label htmlFor="default-checkbox">Accept terms and conditions</Label>
    </div>
  ),
}

export const Checked: Story = {
  args: {
    id: 'checked-checkbox',
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label htmlFor="checked-checkbox">Already agreed</Label>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    id: 'disabled-checkbox',
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label htmlFor="disabled-checkbox" className="opacity-50">
        Disabled option
      </Label>
    </div>
  ),
}

export const DisabledChecked: Story = {
  args: {
    id: 'disabled-checked-checkbox',
    disabled: true,
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <Label htmlFor="disabled-checked-checkbox" className="opacity-50">
        Disabled and checked
      </Label>
    </div>
  ),
}

export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-matrix-green">SYSTEM PERMISSIONS</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="read-access" defaultChecked />
          <Label htmlFor="read-access">Read access to system files</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="write-access" />
          <Label htmlFor="write-access">Write access to user directory</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="admin-access" />
          <Label htmlFor="admin-access">Administrator privileges</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="network-access" defaultChecked />
          <Label htmlFor="network-access">Network connection access</Label>
        </div>
      </div>
    </div>
  ),
}

export const PreferencesForm: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <h3 className="text-lg font-semibold text-matrix-green">USER PREFERENCES</h3>

      <div className="space-y-4">
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-matrix-green/80">Notifications</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="email-notifications" defaultChecked />
              <Label htmlFor="email-notifications" className="text-sm">
                Email notifications
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="push-notifications" />
              <Label htmlFor="push-notifications" className="text-sm">
                Push notifications
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sms-notifications" />
              <Label htmlFor="sms-notifications" className="text-sm">
                SMS notifications
              </Label>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium text-matrix-green/80">Privacy</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="public-profile" />
              <Label htmlFor="public-profile" className="text-sm">
                Make profile public
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="data-collection" />
              <Label htmlFor="data-collection" className="text-sm">
                Allow data collection for analytics
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="marketing-emails" />
              <Label htmlFor="marketing-emails" className="text-sm">
                Receive marketing communications
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const MatrixProtocols: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <h3 className="text-lg font-semibold text-matrix-green">MATRIX PROTOCOLS</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="encryption" defaultChecked />
          <Label htmlFor="encryption">End-to-end encryption enabled</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="stealth-mode" />
          <Label htmlFor="stealth-mode">Stealth mode activation</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="auto-trace" defaultChecked />
          <Label htmlFor="auto-trace">Automatic trace detection</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="neural-link" disabled />
          <Label htmlFor="neural-link" className="opacity-50">
            Neural link interface (requires upgrade)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="reality-sync" />
          <Label htmlFor="reality-sync">Reality synchronization protocol</Label>
        </div>
      </div>
    </div>
  ),
}