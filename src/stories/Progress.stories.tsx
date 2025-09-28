import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from '../components/ui/progress'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import React from 'react'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A progress indicator component with Matrix terminal styling for showing completion status.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'The progress value (0-100)',
    },
    max: {
      control: 'number',
      description: 'The maximum value',
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-64">
      <Progress {...args} />
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-64 space-y-2">
      <div className="flex justify-between text-sm">
        <Label>Upload Progress</Label>
        <span className="text-matrix-green">75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
}

export const DifferentValues: Story = {
  render: () => (
    <div className="w-64 space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <Label>Starting</Label>
          <span className="text-matrix-green">0%</span>
        </div>
        <Progress value={0} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <Label>In Progress</Label>
          <span className="text-matrix-green">25%</span>
        </div>
        <Progress value={25} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <Label>Half Way</Label>
          <span className="text-matrix-green">50%</span>
        </div>
        <Progress value={50} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <Label>Almost Done</Label>
          <span className="text-matrix-green">90%</span>
        </div>
        <Progress value={90} />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <Label>Complete</Label>
          <span className="text-matrix-green">100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
}

export const SystemMetrics: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>System Performance</CardTitle>
        <CardDescription>Current resource utilization</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-medium">CPU Usage</Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-matrix-green">78%</span>
              <Badge variant={78 > 80 ? 'destructive' : 78 > 60 ? 'amber' : 'default'}>
                {78 > 80 ? 'High' : 78 > 60 ? 'Medium' : 'Normal'}
              </Badge>
            </div>
          </div>
          <Progress value={78} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-medium">Memory Usage</Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-matrix-green">45%</span>
              <Badge variant={45 > 80 ? 'destructive' : 45 > 60 ? 'amber' : 'default'}>
                {45 > 80 ? 'High' : 45 > 60 ? 'Medium' : 'Normal'}
              </Badge>
            </div>
          </div>
          <Progress value={45} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-medium">Disk Usage</Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-matrix-green">67%</span>
              <Badge variant={67 > 80 ? 'destructive' : 67 > 60 ? 'amber' : 'default'}>
                {67 > 80 ? 'High' : 67 > 60 ? 'Medium' : 'Normal'}
              </Badge>
            </div>
          </div>
          <Progress value={67} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-medium">Network Load</Label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-matrix-green">23%</span>
              <Badge variant={23 > 80 ? 'destructive' : 23 > 60 ? 'amber' : 'default'}>
                {23 > 80 ? 'High' : 23 > 60 ? 'Medium' : 'Normal'}
              </Badge>
            </div>
          </div>
          <Progress value={23} />
        </div>
      </CardContent>
    </Card>
  ),
}

export const MatrixDataTransfer: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
      const timer = setTimeout(() => {
        if (progress < 100) {
          setProgress(progress + Math.random() * 10)
        }
      }, 500)

      return () => clearTimeout(timer)
    }, [progress])

    return (
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Matrix Data Transfer</CardTitle>
          <CardDescription>Uploading consciousness to the Matrix...</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Neo.consciousness.dat</span>
              <span className="font-mono">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
            <div className="flex justify-between text-xs text-matrix-green/60">
              <span>{Math.round((progress / 100) * 2.4 * 100) / 100} GB / 2.4 GB</span>
              <span>{progress >= 100 ? 'Complete' : 'Transferring...'}</span>
            </div>
          </div>

          <div className="text-xs font-mono text-matrix-green/80 space-y-1">
            <div>Status: {progress >= 100 ? 'Transfer Complete' : 'Uploading Neural Patterns'}</div>
            <div>ETA: {progress >= 100 ? '00:00:00' : '00:02:47'}</div>
            <div>Speed: {progress >= 100 ? '0 MB/s' : '847 MB/s'}</div>
          </div>
        </CardContent>
      </Card>
    )
  },
}

export const MultipleTransfers: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Active Downloads</CardTitle>
        <CardDescription>Multiple file transfers in progress</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          { name: 'matrix-core.zip', progress: 85, size: '1.2 GB' },
          { name: 'agent-protocols.dat', progress: 42, size: '847 MB' },
          { name: 'neo-training.sim', progress: 67, size: '2.1 GB' },
          { name: 'zion-coordinates.enc', progress: 15, size: '45 MB' },
        ].map((file, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-mono truncate">{file.name}</span>
              <span className="text-matrix-green">{file.progress}%</span>
            </div>
            <Progress value={file.progress} className="h-2" />
            <div className="flex justify-between text-xs text-matrix-green/60">
              <span>{file.size}</span>
              <span>{file.progress >= 100 ? 'Complete' : 'Downloading...'}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  ),
}

export const CustomSizes: Story = {
  render: () => (
    <div className="w-64 space-y-6">
      <div className="space-y-2">
        <Label className="text-sm">Thin Progress (h-1)</Label>
        <Progress value={60} className="h-1" />
      </div>

      <div className="space-y-2">
        <Label className="text-sm">Default Progress (h-2)</Label>
        <Progress value={60} className="h-2" />
      </div>

      <div className="space-y-2">
        <Label className="text-sm">Medium Progress (h-3)</Label>
        <Progress value={60} className="h-3" />
      </div>

      <div className="space-y-2">
        <Label className="text-sm">Thick Progress (h-4)</Label>
        <Progress value={60} className="h-4" />
      </div>

      <div className="space-y-2">
        <Label className="text-sm">Extra Thick Progress (h-6)</Label>
        <Progress value={60} className="h-6" />
      </div>
    </div>
  ),
}