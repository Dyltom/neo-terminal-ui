import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const meta = {
  title: 'Layout/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed collapsible component for expandable content sections.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-80 space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Matrix Protocols</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          Basic system information visible
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Extended protocol details...
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Security clearance requirements...
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">
            Agent evasion procedures...
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const SystemDiagnostics: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-96 space-y-2">
        <div className="flex items-center justify-between space-x-4 p-4 border border-matrix-green/30 rounded-lg bg-black/50">
          <div>
            <h4 className="text-lg font-mono text-matrix-green">Ship Diagnostics</h4>
            <p className="text-sm text-muted-foreground">Nebuchadnezzar status</p>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm">
              {isOpen ? 'Hide Details' : 'Show Details'}
            </Button>
          </CollapsibleTrigger>
        </div>

        <div className="rounded-md border border-matrix-green/30 px-4 py-3 bg-black/20">
          <div className="flex justify-between items-center">
            <span className="font-mono text-sm">Power Core Status</span>
            <span className="text-green-400 font-mono">ONLINE</span>
          </div>
        </div>

        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border border-matrix-green/30 px-4 py-3 bg-black/20">
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span>Core Temperature:</span>
                <span className="text-green-400">42°C</span>
              </div>
              <div className="flex justify-between">
                <span>Output Level:</span>
                <span className="text-green-400">92%</span>
              </div>
              <div className="flex justify-between">
                <span>Efficiency Rating:</span>
                <span className="text-green-400">Optimal</span>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-yellow-400/30 px-4 py-3 bg-yellow-400/5">
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span>Backup Systems:</span>
                <span className="text-yellow-400">STANDBY</span>
              </div>
              <div className="flex justify-between">
                <span>Emergency Power:</span>
                <span className="text-yellow-400">67%</span>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-red-400/30 px-4 py-3 bg-red-400/5">
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span>Warning:</span>
                <span className="text-red-400">Coolant Level Low</span>
              </div>
              <div className="text-xs text-red-400/70">
                Recommend maintenance within 24 hours
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};