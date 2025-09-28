import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Badge } from '../components/ui/badge'
import { Progress } from '../components/ui/progress'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A tabbed interface component for organizing content with Matrix terminal styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab that should be active by default',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 'account',
  },
  render: (args) => (
    <div className="w-96">
      <Tabs {...args}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" className="space-y-2">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Neo Anderson" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@neo" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password" className="space-y-2">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const ThreeTabs: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>
                Current system status and key metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Active Sessions</span>
                  <Badge>247</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Server Status</span>
                  <Badge variant="default">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Security Level</span>
                  <Badge variant="destructive">High</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>
                Performance metrics and usage statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>CPU Usage</span>
                    <span>72%</span>
                  </div>
                  <Progress value={72} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Memory Usage</span>
                    <span>58%</span>
                  </div>
                  <Progress value={58} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Network Load</span>
                    <span>23%</span>
                  </div>
                  <Progress value={23} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>
                Generate and download system reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button className="w-full justify-start">
                  Download Security Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  Download Performance Report
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  Download User Activity Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const MatrixTerminal: Story = {
  render: () => (
    <div className="w-[600px]">
      <Tabs defaultValue="terminal">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="terminal">Terminal</TabsTrigger>
          <TabsTrigger value="processes">Processes</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="terminal">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>Matrix Terminal</span>
                <Badge variant="default">Active</Badge>
              </CardTitle>
              <CardDescription>
                Direct access to the Matrix command interface
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-matrix-black border border-matrix-green/30 rounded p-4 font-mono text-sm space-y-1">
                <div className="text-matrix-green">$ matrix --status</div>
                <div className="text-matrix-green/80">System: Online</div>
                <div className="text-matrix-green/80">Users: 1,247 connected</div>
                <div className="text-matrix-green/80">Uptime: 47d 12h 34m</div>
                <div className="text-matrix-green">$ _</div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="processes">
          <Card>
            <CardHeader>
              <CardTitle>Active Processes</CardTitle>
              <CardDescription>
                Currently running system processes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: 'matrix-core.exe', cpu: '12.3%', memory: '256MB', status: 'running' },
                  { name: 'agent-smith.exe', cpu: '45.7%', memory: '512MB', status: 'running' },
                  { name: 'neo-protocol.exe', cpu: '8.1%', memory: '128MB', status: 'running' },
                  { name: 'cipher-decrypt.exe', cpu: '67.2%', memory: '1.2GB', status: 'running' },
                ].map((process, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="font-mono">{process.name}</span>
                    <div className="flex space-x-4">
                      <span>{process.cpu}</span>
                      <span>{process.memory}</span>
                      <Badge variant={process.status === 'running' ? 'default' : 'secondary'}>
                        {process.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="network">
          <Card>
            <CardHeader>
              <CardTitle>Network Status</CardTitle>
              <CardDescription>
                Network connections and traffic monitoring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Incoming Traffic</Label>
                    <div className="text-2xl font-mono text-matrix-green">1.24 GB/s</div>
                  </div>
                  <div className="space-y-2">
                    <Label>Outgoing Traffic</Label>
                    <div className="text-2xl font-mono text-matrix-green">847 MB/s</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Active Connections</Label>
                  <div className="text-2xl font-mono text-matrix-green">2,847</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Status</CardTitle>
              <CardDescription>
                System security monitoring and alerts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Firewall Status</span>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Intrusion Detection</span>
                  <Badge variant="default">Monitoring</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Encryption Level</span>
                  <Badge variant="destructive">Maximum</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Threat Level</span>
                  <Badge variant="amber">Elevated</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const VerticalTabs: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="dashboard" orientation="vertical" className="flex space-x-4">
        <TabsList className="flex flex-col h-fit space-y-1">
          <TabsTrigger value="dashboard" className="w-full justify-start">Dashboard</TabsTrigger>
          <TabsTrigger value="users" className="w-full justify-start">Users</TabsTrigger>
          <TabsTrigger value="settings" className="w-full justify-start">Settings</TabsTrigger>
        </TabsList>
        <div className="flex-1">
          <TabsContent value="dashboard">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-matrix-green/80">
                  System dashboard with key metrics and status indicators.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-matrix-green/80">
                  Manage user accounts, permissions, and access levels.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-matrix-green/80">
                  Configure system preferences and security settings.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  ),
}