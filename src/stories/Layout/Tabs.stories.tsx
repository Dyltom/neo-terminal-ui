import type { Meta, StoryObj } from '@storybook/react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

const meta = {
  title: 'Layout/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed tabs component for organizing content into multiple sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="systems" className="w-96">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="systems">Systems</TabsTrigger>
        <TabsTrigger value="crew">Crew</TabsTrigger>
        <TabsTrigger value="missions">Missions</TabsTrigger>
      </TabsList>
      <TabsContent value="systems" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Ship Systems</CardTitle>
            <CardDescription>Nebuchadnezzar status overview</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Power Core</span>
              <span className="text-green-400">92%</span>
            </div>
            <Progress value={92} />
            <div className="flex justify-between">
              <span>Life Support</span>
              <span className="text-green-400">98%</span>
            </div>
            <Progress value={98} />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="crew" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Crew Members</CardTitle>
            <CardDescription>Active personnel on board</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Neo</span>
              <Badge>The One</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Morpheus</span>
              <Badge variant="secondary">Captain</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Trinity</span>
              <Badge variant="secondary">First Mate</Badge>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="missions" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Missions</CardTitle>
            <CardDescription>Current operations status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Rescue Mission Alpha</span>
              <Badge variant="destructive">Critical</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Data Extraction Beta</span>
              <Badge>In Progress</Badge>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="overview" orientation="vertical" className="flex w-96 h-64">
      <TabsList className="flex-col h-full w-32">
        <TabsTrigger value="overview" className="w-full">Overview</TabsTrigger>
        <TabsTrigger value="power" className="w-full">Power</TabsTrigger>
        <TabsTrigger value="security" className="w-full">Security</TabsTrigger>
        <TabsTrigger value="logs" className="w-full">Logs</TabsTrigger>
      </TabsList>
      <div className="flex-1 ml-4">
        <TabsContent value="overview" className="mt-0">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">All systems operational. No threats detected.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="power" className="mt-0">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Power Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Primary power at 92%. Backup systems ready.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-0">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Security Status</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-red-400">Agent proximity detected. Stealth mode active.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="logs" className="mt-0">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>System Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-mono">2024-01-15 14:32:01 - Connection established</p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const MatrixInterface: Story = {
  render: () => (
    <Tabs defaultValue="digital-self" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="digital-self">Digital Self</TabsTrigger>
        <TabsTrigger value="programs">Programs</TabsTrigger>
        <TabsTrigger value="network">Network</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="digital-self" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Digital Identity</CardTitle>
            <CardDescription>Your presence within the Matrix</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Residual Self Image</span>
                <Badge>Stable</Badge>
              </div>
              <div className="flex justify-between">
                <span>Neural Activity</span>
                <span className="text-green-400">Normal</span>
              </div>
              <div className="flex justify-between">
                <span>Mental Projection</span>
                <span className="text-green-400">Strong</span>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Mind State</span>
              <Progress value={87} />
              <p className="text-xs text-muted-foreground">
                Your mind is adapting well to the digital environment
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="programs" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Loaded Programs</CardTitle>
            <CardDescription>Currently running simulations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-2 border rounded">
              <div>
                <div className="font-medium">Combat Training</div>
                <div className="text-sm text-muted-foreground">Martial arts simulation</div>
              </div>
              <Badge>Active</Badge>
            </div>
            <div className="flex justify-between items-center p-2 border rounded">
              <div>
                <div className="font-medium">Weapons Training</div>
                <div className="text-sm text-muted-foreground">Firearms proficiency</div>
              </div>
              <Badge variant="secondary">Paused</Badge>
            </div>
            <div className="flex justify-between items-center p-2 border rounded">
              <div>
                <div className="font-medium">Agent Evasion</div>
                <div className="text-sm text-muted-foreground">Stealth protocols</div>
              </div>
              <Badge variant="outline">Available</Badge>
            </div>
            <Button className="w-full">Load New Program</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="network" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Network Status</CardTitle>
            <CardDescription>Connection to Matrix infrastructure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Connection Speed</span>
                <span className="text-green-400">Neural Rate</span>
              </div>
              <div className="flex justify-between">
                <span>Latency</span>
                <span className="text-green-400">0.1ms</span>
              </div>
              <div className="flex justify-between">
                <span>Security Level</span>
                <span className="text-yellow-400">Moderate</span>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Signal Strength</span>
              <Progress value={76} />
            </div>
            <div className="p-3 bg-yellow-400/10 border border-yellow-400/30 rounded">
              <p className="text-sm text-yellow-400">
                ⚠️ Agent activity detected in sector 7. Recommend stealth protocols.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="settings" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Matrix Settings</CardTitle>
            <CardDescription>Configure your Matrix experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Reality Filter</span>
                <Badge>Disabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Agent Detection</span>
                <Badge>Enabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Auto Jack-Out</span>
                <Badge>Enabled</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Enhanced Reflexes</span>
                <Badge variant="secondary">Training Mode</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Mental Fortification</span>
              <Progress value={45} />
              <p className="text-xs text-muted-foreground">
                Resistance to mental intrusion attempts
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Advanced Configuration
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ShipConsole: Story = {
  render: () => (
    <Tabs defaultValue="navigation" className="w-[600px]">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="navigation">Nav</TabsTrigger>
        <TabsTrigger value="systems">Systems</TabsTrigger>
        <TabsTrigger value="crew">Crew</TabsTrigger>
        <TabsTrigger value="comms">Comms</TabsTrigger>
        <TabsTrigger value="weapons">Weapons</TabsTrigger>
      </TabsList>

      <TabsContent value="navigation">
        <Card>
          <CardHeader>
            <CardTitle>Navigation Console</CardTitle>
            <CardDescription>Nebuchadnezzar flight control</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium">Current Position</span>
                <p className="font-mono text-matrix-green">41.8781° N, 87.6298° W</p>
              </div>
              <div>
                <span className="text-sm font-medium">Heading</span>
                <p className="font-mono text-matrix-green">270° (Due West)</p>
              </div>
              <div>
                <span className="text-sm font-medium">Speed</span>
                <p className="font-mono text-matrix-green">45 knots</p>
              </div>
              <div>
                <span className="text-sm font-medium">Depth</span>
                <p className="font-mono text-matrix-green">200 meters</p>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">Distance to Zion</span>
              <Progress value={67} />
              <p className="text-xs text-muted-foreground">1,247 km remaining</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="systems">
        <Card>
          <CardHeader>
            <CardTitle>Ship Systems</CardTitle>
            <CardDescription>All major system status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Power Core</span>
                <span className="text-green-400">92%</span>
              </div>
              <Progress value={92} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Life Support</span>
                <span className="text-green-400">98%</span>
              </div>
              <Progress value={98} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Engines</span>
                <span className="text-green-400">87%</span>
              </div>
              <Progress value={87} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Stealth Systems</span>
                <span className="text-yellow-400">45%</span>
              </div>
              <Progress value={45} />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="crew">
        <Card>
          <CardHeader>
            <CardTitle>Crew Status</CardTitle>
            <CardDescription>Personnel on board</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              {[
                { name: "Morpheus", role: "Captain", status: "Bridge" },
                { name: "Trinity", role: "First Mate", status: "Matrix" },
                { name: "Neo", role: "The One", status: "Training" },
                { name: "Tank", role: "Operator", status: "Engineering" },
                { name: "Dozer", role: "Operator", status: "Rest" },
              ].map((member) => (
                <div key={member.name} className="flex justify-between items-center p-2 border rounded">
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </div>
                  <Badge variant="outline">{member.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="comms">
        <Card>
          <CardHeader>
            <CardTitle>Communications</CardTitle>
            <CardDescription>Ship-to-ship and Matrix communications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="p-2 border rounded">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Zion Command</span>
                  <Badge>Connected</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Last contact: 14:32</p>
              </div>
              <div className="p-2 border rounded">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Osiris</span>
                  <Badge variant="secondary">Offline</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Last contact: 2 days ago</p>
              </div>
              <div className="p-2 border rounded">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Logos</span>
                  <Badge>Connected</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Last contact: 09:15</p>
              </div>
            </div>
            <Button className="w-full">Open Communication Channel</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="weapons">
        <Card>
          <CardHeader>
            <CardTitle>Weapons Systems</CardTitle>
            <CardDescription>Defensive capabilities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>EMP Charges</span>
                <span className="text-green-400">12/12</span>
              </div>
              <Progress value={100} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Defensive Grid</span>
                <span className="text-green-400">Online</span>
              </div>
              <Progress value={100} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Emergency Protocols</span>
                <span className="text-green-400">Armed</span>
              </div>
              <Progress value={100} />
            </div>
            <div className="p-3 bg-red-400/10 border border-red-400/30 rounded">
              <p className="text-sm text-red-400">
                ⚠️ Weapons are primarily defensive. Avoid direct confrontation with Sentinels.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};