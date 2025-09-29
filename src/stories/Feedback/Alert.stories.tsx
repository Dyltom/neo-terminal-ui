import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';

const meta = {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed alert component for displaying important information.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="w-96">
      <Info className="h-4 w-4" />
      <AlertTitle>Matrix Connection</AlertTitle>
      <AlertDescription>
        Neural interface is now online. You are connected to the Matrix.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive" className="w-96">
      <XCircle className="h-4 w-4" />
      <AlertTitle>Agent Detected</AlertTitle>
      <AlertDescription>
        Agent Smith has entered the area. Recommend immediate evacuation.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert className="w-96 border-green-500/50 bg-green-500/10">
      <CheckCircle className="h-4 w-4 text-green-500" />
      <AlertTitle className="text-green-400">Mission Complete</AlertTitle>
      <AlertDescription>
        Successfully extracted from the Matrix. All crew members accounted for.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert className="w-96 border-yellow-500/50 bg-yellow-500/10">
      <AlertTriangle className="h-4 w-4 text-yellow-500" />
      <AlertTitle className="text-yellow-400">System Warning</AlertTitle>
      <AlertDescription>
        Power levels at 23%. Consider switching to backup systems.
      </AlertDescription>
    </Alert>
  ),
};

export const MatrixAlerts: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert className="border-matrix-green/50 bg-matrix-green/10">
        <Info className="h-4 w-4 text-matrix-green" />
        <AlertTitle className="text-matrix-green">System Online</AlertTitle>
        <AlertDescription>
          All systems operational. Ready for Matrix entry.
        </AlertDescription>
      </Alert>

      <Alert className="border-blue-500/50 bg-blue-500/10">
        <Info className="h-4 w-4 text-blue-400" />
        <AlertTitle className="text-blue-400">Incoming Transmission</AlertTitle>
        <AlertDescription>
          Message from Morpheus: "The Oracle is waiting for you."
        </AlertDescription>
      </Alert>

      <Alert className="border-yellow-500/50 bg-yellow-500/10">
        <AlertTriangle className="h-4 w-4 text-yellow-500" />
        <AlertTitle className="text-yellow-400">Anomaly Detected</AlertTitle>
        <AlertDescription>
          Unusual activity in sector 7. Possible Agent presence.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="h-4 w-4" />
        <AlertTitle>Critical Error</AlertTitle>
        <AlertDescription>
          Neural pathway compromised. Initiating emergency jack-out procedure.
        </AlertDescription>
      </Alert>
    </div>
  ),
};