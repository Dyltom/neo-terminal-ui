import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const meta = {
  title: 'Layout/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed scroll area component for scrollable content.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border p-4">
      <div className="space-y-2">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className="text-sm">
            Matrix entry {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const MatrixCode: Story = {
  render: () => (
    <ScrollArea className="h-80 w-96 rounded-md border border-matrix-green/30 bg-black/50 p-4">
      <div className="font-mono text-sm space-y-1">
        <div className="text-matrix-green"># Matrix Source Code</div>
        <div className="text-matrix-green"># Digital rain simulation</div>
        <Separator className="my-2" />
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="text-green-400/70">
            {Math.random().toString(36).substring(2, 15)} {Math.random().toString(36).substring(2, 15)}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const SystemLog: Story = {
  render: () => {
    const logEntries = [
      { time: "14:32:01", level: "INFO", message: "System startup initiated" },
      { time: "14:32:15", level: "INFO", message: "Neural interface online" },
      { time: "14:32:23", level: "INFO", message: "Matrix connection established" },
      { time: "14:33:42", level: "WARN", message: "Agent proximity detected" },
      { time: "14:34:01", level: "INFO", message: "Stealth mode activated" },
      { time: "14:34:12", level: "INFO", message: "Signal strength: 87%" },
      { time: "14:35:23", level: "ERROR", message: "Connection timeout" },
      { time: "14:35:45", level: "INFO", message: "Reconnection successful" },
      { time: "14:36:12", level: "WARN", message: "High CPU usage detected" },
      { time: "14:37:01", level: "INFO", message: "Background process optimized" },
    ];

    // Repeat entries to create scrollable content
    const extendedLog = Array.from({ length: 10 }, () => logEntries).flat();

    return (
      <ScrollArea className="h-64 w-96 rounded-md border border-matrix-green/30 bg-black/50">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-mono text-matrix-green">System Log</h4>
          <div className="space-y-1">
            {extendedLog.map((entry, index) => (
              <div key={index} className="font-mono text-xs flex space-x-2">
                <span className="text-muted-foreground">[{entry.time}]</span>
                <span className={`
                  ${entry.level === 'ERROR' ? 'text-red-400' :
                    entry.level === 'WARN' ? 'text-yellow-400' :
                    'text-green-400'}
                `}>
                  {entry.level}
                </span>
                <span>{entry.message}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    );
  },
};

export const CrewRoster: Story = {
  render: () => {
    const crewMembers = [
      { name: "Morpheus", role: "Captain", status: "Active", clearance: "Alpha" },
      { name: "Trinity", role: "First Mate", status: "Matrix", clearance: "Alpha" },
      { name: "Neo", role: "The One", status: "Training", clearance: "Omega" },
      { name: "Tank", role: "Operator", status: "Active", clearance: "Beta" },
      { name: "Dozer", role: "Operator", status: "Rest", clearance: "Beta" },
      { name: "Mouse", role: "Programmer", status: "Inactive", clearance: "Gamma" },
      { name: "Switch", role: "Navigator", status: "Inactive", clearance: "Beta" },
      { name: "Apoc", role: "Engineer", status: "Inactive", clearance: "Beta" },
      { name: "Cypher", role: "Traitor", status: "Deceased", clearance: "Revoked" },
    ];

    return (
      <ScrollArea className="h-72 w-80 rounded-md border border-matrix-green/30 bg-black/50">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-mono text-matrix-green">Crew Roster - Nebuchadnezzar</h4>
          <div className="space-y-3">
            {crewMembers.map((member, index) => (
              <div key={index}>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{member.name}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      member.status === 'Active' ? 'bg-green-400/20 text-green-400' :
                      member.status === 'Matrix' ? 'bg-blue-400/20 text-blue-400' :
                      member.status === 'Training' ? 'bg-yellow-400/20 text-yellow-400' :
                      member.status === 'Rest' ? 'bg-gray-400/20 text-gray-400' :
                      member.status === 'Deceased' ? 'bg-red-400/20 text-red-400' :
                      'bg-gray-400/20 text-gray-400'
                    }`}>
                      {member.status}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">{member.role}</div>
                  <div className="text-xs">Clearance: {member.clearance}</div>
                </div>
                {index < crewMembers.length - 1 && <Separator className="mt-3" />}
              </div>
            ))}
          </div>
        </div>
      </ScrollArea>
    );
  },
};

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="shrink-0 rounded-md border border-matrix-green/30 bg-black/50 p-4 w-32 h-24 flex items-center justify-center"
          >
            <span className="font-mono text-matrix-green">Node {i + 1}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};