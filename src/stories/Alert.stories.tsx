import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription } from '../components/ui/alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Matrix-themed alert component for displaying important messages and notifications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'warning', 'info'],
      description: 'Visual style variant of the alert',
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <AlertTitle>System Notification</AlertTitle>
      <AlertDescription>
        Connection to the mainframe has been established successfully. All systems are operational.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} variant="destructive" className="max-w-md">
      <AlertTitle>Critical Error</AlertTitle>
      <AlertDescription>
        Firewall breach detected in sector 7. Immediate action required to secure the perimeter.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: (args) => (
    <Alert {...args} variant="warning" className="max-w-md">
      <AlertTitle>Security Warning</AlertTitle>
      <AlertDescription>
        Unusual network activity detected. System scan in progress. Please standby.
      </AlertDescription>
    </Alert>
  ),
}

export const Info: Story = {
  render: (args) => (
    <Alert {...args} variant="info" className="max-w-md">
      <AlertTitle>System Update</AlertTitle>
      <AlertDescription>
        New security patches are available. Schedule maintenance window for installation.
      </AlertDescription>
    </Alert>
  ),
}

export const WithIcon: Story = {
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This alert includes an icon to enhance visual communication.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert with an accompanying icon for better visual hierarchy.',
      },
    },
  },
}

export const TitleOnly: Story = {
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <AlertTitle>Quick System Status: All systems operational</AlertTitle>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert with only a title, useful for brief notifications.',
      },
    },
  },
}

export const DescriptionOnly: Story = {
  render: (args) => (
    <Alert {...args} className="max-w-md">
      <AlertDescription>
        Network latency increased by 15ms. Monitoring system performance for anomalies.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert with only a description, useful for detailed information.',
      },
    },
  },
}

export const SystemMonitoring: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <Alert variant="info">
        <AlertTitle>System Scan Complete</AlertTitle>
        <AlertDescription>
          Network perimeter scan completed successfully. No threats detected.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Memory Usage High</AlertTitle>
        <AlertDescription>
          System memory usage at 87%. Consider terminating non-essential processes.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Intrusion Detected</AlertTitle>
        <AlertDescription>
          Unauthorized access attempt from IP 192.168.1.254. Security protocols activated.
        </AlertDescription>
      </Alert>

      <Alert variant="default">
        <AlertTitle>Backup Complete</AlertTitle>
        <AlertDescription>
          Daily system backup completed at 03:00. All data secured successfully.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of alerts used in a system monitoring dashboard.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Alert variant="default">
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>This is a destructive alert message.</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>This is a warning alert message.</AlertDescription>
      </Alert>

      <Alert variant="info">
        <AlertTitle>Info Alert</AlertTitle>
        <AlertDescription>This is an info alert message.</AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All alert variants displayed together.',
      },
    },
  },
}