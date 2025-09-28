import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Input } from '../components/ui/input'
import { HelpCircle, Info, AlertTriangle, Zap, Shield, Settings } from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tooltip component with Matrix terminal styling for providing contextual information.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip with helpful information</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex items-center space-x-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="ghost">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Get help and documentation</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="ghost">
              <Info className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>View system information</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon" variant="ghost">
              <Settings className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Open settings panel</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
}

export const OnInput: Story = {
  render: () => (
    <TooltipProvider>
      <div className="w-64 space-y-2">
        <label className="text-sm font-medium">Matrix Access Code</label>
        <Tooltip>
          <TooltipTrigger asChild>
            <Input placeholder="Enter access code..." />
          </TooltipTrigger>
          <TooltipContent>
            <p>Use your 12-digit Matrix access code to connect</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
}

export const OnBadge: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex items-center space-x-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="default">
              <Zap className="h-3 w-3 mr-1" />
              Active
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>System is currently active and processing requests</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="amber">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Warning
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>High CPU usage detected - monitoring closely</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Badge variant="destructive">
              <Shield className="h-3 w-3 mr-1" />
              Secure
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <p>Maximum security protocols are active</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
}

export const LongContent: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Matrix Protocol Info</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <div className="space-y-2">
            <p className="font-medium">Matrix Communication Protocol</p>
            <p className="text-sm">
              A secure, encrypted communication system designed for real-time data
              transmission across virtual networks. Features include end-to-end
              encryption, automatic failover, and quantum-resistant security.
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
}

export const MatrixSystemStatus: Story = {
  render: () => (
    <TooltipProvider>
      <div className="space-y-4 w-80">
        <h3 className="text-lg font-semibold text-matrix-green">MATRIX SYSTEM STATUS</h3>

        <div className="grid grid-cols-2 gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-3 border border-matrix-green/30 rounded cursor-help">
                <div className="text-sm text-matrix-green/60">CPU Usage</div>
                <div className="text-xl font-mono text-matrix-green">78%</div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="space-y-1">
                <p className="font-medium">CPU Performance</p>
                <p className="text-sm">Current: 78% (Normal operating range)</p>
                <p className="text-sm">Peak today: 94%</p>
                <p className="text-sm">Average: 65%</p>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-3 border border-matrix-green/30 rounded cursor-help">
                <div className="text-sm text-matrix-green/60">Memory</div>
                <div className="text-xl font-mono text-matrix-green">45%</div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="space-y-1">
                <p className="font-medium">Memory Usage</p>
                <p className="text-sm">Used: 7.2 GB / 16 GB</p>
                <p className="text-sm">Free: 8.8 GB</p>
                <p className="text-sm">Cached: 3.2 GB</p>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-3 border border-matrix-green/30 rounded cursor-help">
                <div className="text-sm text-matrix-green/60">Connections</div>
                <div className="text-xl font-mono text-matrix-green">1,247</div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="space-y-1">
                <p className="font-medium">Active Connections</p>
                <p className="text-sm">Direct neural links: 847</p>
                <p className="text-sm">Terminal interfaces: 324</p>
                <p className="text-sm">API connections: 76</p>
              </div>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <div className="p-3 border border-matrix-green/30 rounded cursor-help">
                <div className="text-sm text-matrix-green/60">Uptime</div>
                <div className="text-xl font-mono text-matrix-green">47d</div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="space-y-1">
                <p className="font-medium">System Uptime</p>
                <p className="text-sm">Current: 47 days, 12 hours, 34 minutes</p>
                <p className="text-sm">Last restart: System upgrade</p>
                <p className="text-sm">Next scheduled maintenance: 72 hours</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  ),
}

export const FormWithTooltips: Story = {
  render: () => (
    <TooltipProvider>
      <div className="w-80 space-y-4">
        <h3 className="text-lg font-semibold text-matrix-green">USER REGISTRATION</h3>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Username</label>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-matrix-green/60 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Username must be 3-20 characters, alphanumeric only</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Input placeholder="Enter username..." />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Access Level</label>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-matrix-green/60 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-1">
                  <p className="font-medium">Access Levels:</p>
                  <p className="text-sm">• Guest: Read-only access</p>
                  <p className="text-sm">• User: Standard operations</p>
                  <p className="text-sm">• Admin: Full system access</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex space-x-2">
            <Badge variant="outline">User</Badge>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Security Protocol</label>
            <Tooltip>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-matrix-green/60 cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Enhanced security includes 2FA, encryption, and audit logging</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Badge variant="destructive">Enhanced</Badge>
        </div>
      </div>
    </TooltipProvider>
  ),
}