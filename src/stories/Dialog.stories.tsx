import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Alert, AlertDescription } from '../components/ui/alert'
import { Badge } from '../components/ui/badge'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A modal dialog overlay with Matrix terminal styling for important interactions.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Matrix System Alert</DialogTitle>
          <DialogDescription>
            This is a dialog with important information that requires your attention.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-matrix-green/80">
            The system has detected an anomaly in the data stream. Please review
            the following information and take appropriate action.
          </p>
        </div>
        <DialogFooter>
          <Button variant="ghost">Cancel</Button>
          <Button>Acknowledge</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const FormDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create New User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create User Account</DialogTitle>
          <DialogDescription>
            Set up a new user account for Matrix access. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" placeholder="neo" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" placeholder="neo@matrix.net" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="access-level" className="text-right">
              Access Level
            </Label>
            <div className="col-span-3">
              <Badge variant="outline">User</Badge>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="ghost">Cancel</Button>
          <Button type="submit">Create Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const ConfirmationDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Data</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the selected
            data from the Matrix.
          </DialogDescription>
        </DialogHeader>
        <Alert variant="destructive" className="my-4">
          <AlertDescription>
            Warning: This will permanently remove 1,247 files and
            all associated metadata from the system.
          </AlertDescription>
        </Alert>
        <DialogFooter>
          <Button variant="ghost">Cancel</Button>
          <Button variant="destructive">Delete Forever</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const SystemStatusDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="amber">System Status</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Matrix System Status</DialogTitle>
          <DialogDescription>
            Current system status and operational parameters
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium">CPU Usage</Label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-matrix-dark rounded-full h-2">
                  <div className="bg-matrix-green h-2 rounded-full" style={{ width: '78%' }} />
                </div>
                <span className="text-sm text-matrix-green">78%</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium">Memory</Label>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-matrix-dark rounded-full h-2">
                  <div className="bg-matrix-green h-2 rounded-full" style={{ width: '45%' }} />
                </div>
                <span className="text-sm text-matrix-green">45%</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Active Connections</Label>
            <div className="text-2xl font-mono text-matrix-green">1,247</div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">System Uptime</Label>
            <div className="text-lg font-mono text-matrix-green">47d 12h 34m</div>
          </div>

          <div className="flex space-x-2">
            <Badge variant="default">Online</Badge>
            <Badge variant="outline">Secure</Badge>
            <Badge variant="secondary">Optimized</Badge>
          </div>
        </div>
        <DialogFooter>
          <Button>Refresh Status</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const LongContentDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>View Documentation</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Matrix Protocol Documentation</DialogTitle>
          <DialogDescription>
            Comprehensive guide to Matrix terminal interface protocols
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 text-sm">
          <section>
            <h3 className="font-semibold text-matrix-green mb-2">Connection Protocol</h3>
            <p className="text-matrix-green/80 mb-2">
              The Matrix connection protocol establishes a secure tunnel between
              the user terminal and the central processing unit.
            </p>
            <ul className="list-disc list-inside space-y-1 text-matrix-green/70 ml-4">
              <li>Handshake initialization with 256-bit encryption</li>
              <li>Authentication via biometric or credential verification</li>
              <li>Session token generation and validation</li>
              <li>Continuous connection monitoring</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-matrix-green mb-2">Data Transmission</h3>
            <p className="text-matrix-green/80 mb-2">
              All data packets are encrypted and transmitted using quantum-safe
              protocols to ensure maximum security.
            </p>
            <ul className="list-disc list-inside space-y-1 text-matrix-green/70 ml-4">
              <li>Packet-level encryption with rotating keys</li>
              <li>Error detection and automatic retry mechanisms</li>
              <li>Bandwidth optimization and compression</li>
              <li>Real-time integrity verification</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-matrix-green mb-2">Security Features</h3>
            <p className="text-matrix-green/80 mb-2">
              Multiple layers of security protect against unauthorized access
              and data breaches.
            </p>
            <ul className="list-disc list-inside space-y-1 text-matrix-green/70 ml-4">
              <li>Multi-factor authentication requirements</li>
              <li>Intrusion detection and prevention systems</li>
              <li>Automated security auditing and logging</li>
              <li>Emergency disconnection protocols</li>
            </ul>
          </section>
        </div>
        <DialogFooter>
          <Button variant="ghost">Print Documentation</Button>
          <Button>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}