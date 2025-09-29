import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

const meta = {
  title: 'Layout/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed card component for displaying content with cyberpunk styling.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Matrix Interface</CardTitle>
        <CardDescription>Connect to the simulation</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Welcome to the Matrix. This is your reality now.</p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Neural Connection</CardTitle>
        <CardDescription>Establish link to Zion mainframe</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Ready to jack in. All systems are green and connections are stable.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Jack In</Button>
      </CardFooter>
    </Card>
  ),
};

export const AgentProfile: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-red-500/20 text-red-400">AS</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-red-400">Agent Smith</CardTitle>
            <CardDescription>System Security Program</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Threat Level</span>
            <span className="text-red-400">MAXIMUM</span>
          </div>
          <Progress value={100} className="bg-red-500/20" />
        </div>
        <div className="space-y-2">
          <p className="text-sm">
            A sentient program designed to eliminate threats to the Matrix.
            Approach with extreme caution.
          </p>
          <div className="flex space-x-2">
            <Badge variant="destructive">Hostile</Badge>
            <Badge variant="outline">Replicates</Badge>
            <Badge variant="outline">Adaptive</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="destructive" className="w-full">
          Initiate Evasion Protocol
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const SystemStatus: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          System Status
          <Badge variant="default">Online</Badge>
        </CardTitle>
        <CardDescription>Nebuchadnezzar Ship Systems</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
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
            <span>Navigation</span>
            <span className="text-yellow-400">67%</span>
          </div>
          <Progress value={67} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Stealth Systems</span>
            <span className="text-red-400">23%</span>
          </div>
          <Progress value={23} />
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button variant="outline" className="flex-1">Diagnostics</Button>
        <Button className="flex-1">Repair</Button>
      </CardFooter>
    </Card>
  ),
};

export const MatrixProgram: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Training Program</CardTitle>
        <CardDescription>Sparring Simulation v2.1</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm space-y-2">
          <div className="flex justify-between">
            <span>Difficulty:</span>
            <span className="text-orange-400">Advanced</span>
          </div>
          <div className="flex justify-between">
            <span>Duration:</span>
            <span>45 minutes</span>
          </div>
          <div className="flex justify-between">
            <span>Participants:</span>
            <span>1-4 users</span>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm">
            Combat training program designed to test reflexes and martial arts skills.
            Warning: Injuries sustained in training may feel real.
          </p>
          <div className="flex space-x-2">
            <Badge>Combat</Badge>
            <Badge>Martial Arts</Badge>
            <Badge variant="outline">Non-lethal</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Load Program</Button>
      </CardFooter>
    </Card>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="text-lg">N</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>Neo</CardTitle>
            <CardDescription>The One</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Real Name:</span>
            <p>Thomas Anderson</p>
          </div>
          <div>
            <span className="text-muted-foreground">Status:</span>
            <p className="text-green-400">Awakened</p>
          </div>
          <div>
            <span className="text-muted-foreground">Ship:</span>
            <p>Nebuchadnezzar</p>
          </div>
          <div>
            <span className="text-muted-foreground">Rank:</span>
            <p>The One</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Power Level</span>
            <span className="text-green-400">∞</span>
          </div>
          <Progress value={100} />
        </div>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button variant="outline" className="flex-1">View Profile</Button>
        <Button className="flex-1">Send Message</Button>
      </CardFooter>
    </Card>
  ),
};

export const MessageCard: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base">Incoming Transmission</CardTitle>
            <CardDescription>From: Morpheus</CardDescription>
          </div>
          <Badge variant="secondary">Priority</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          "Neo, you need to get to the safe house immediately. Agents have found our location.
          Trust no one until you reach the extraction point."
        </p>
      </CardContent>
      <CardFooter className="space-x-2">
        <Button variant="outline" size="sm">Decrypt</Button>
        <Button variant="outline" size="sm">Reply</Button>
        <Button size="sm">Acknowledge</Button>
      </CardFooter>
    </Card>
  ),
};

export const GridLayout: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Power Core</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={85} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Life Support</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={92} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Navigation</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={67} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weapons</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={45} />
        </CardContent>
      </Card>
    </div>
  ),
};