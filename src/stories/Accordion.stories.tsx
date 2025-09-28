import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A collapsible component for organizing content into sections with Matrix terminal styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether one or multiple items can be open at the same time',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether items can be collapsed',
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>SYSTEM REQUIREMENTS</AccordionTrigger>
          <AccordionContent>
            Neo Terminal UI requires Node.js 18+ and React 18+.
            Compatible with all modern browsers supporting ES2020.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>NETWORK CONFIGURATION</AccordionTrigger>
          <AccordionContent>
            Configure your network settings to access the Matrix terminal interface.
            Ensure ports 8080-8090 are available for the terminal connection.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>SECURITY PROTOCOLS</AccordionTrigger>
          <AccordionContent>
            All communications are encrypted using AES-256. Two-factor authentication
            is required for admin access. Session timeout is set to 30 minutes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <div className="w-96">
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger>USER INTERFACE</AccordionTrigger>
          <AccordionContent>
            The Matrix terminal interface provides a retro computing experience
            with green phosphor text and CRT monitor effects.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>COMPONENT LIBRARY</AccordionTrigger>
          <AccordionContent>
            Comprehensive set of React components styled with the Matrix theme.
            All components are fully accessible and keyboard navigable.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>CUSTOMIZATION</AccordionTrigger>
          <AccordionContent>
            Customize colors, animations, and effects through CSS variables.
            Support for custom themes and branding options.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const SingleItem: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>TERMINAL ACCESS</AccordionTrigger>
          <AccordionContent>
            Access the Matrix terminal interface with your authenticated credentials.
            Direct neural link connection available for advanced users.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const LongContent: Story = {
  render: () => (
    <div className="w-96">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>MATRIX PROTOCOL DOCUMENTATION</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 text-sm">
              <p>
                The Matrix Protocol is a sophisticated communication system designed
                for secure data transmission across virtual networks.
              </p>
              <p>
                Key features include:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>End-to-end encryption using quantum-resistant algorithms</li>
                <li>Real-time data synchronization across multiple nodes</li>
                <li>Automatic failover and redundancy mechanisms</li>
                <li>Support for both text and binary data transmission</li>
              </ul>
              <p>
                For advanced configuration options, refer to the technical manual
                or contact system administrators.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}