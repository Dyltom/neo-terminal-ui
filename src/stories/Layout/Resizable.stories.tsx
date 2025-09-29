import type { Meta, StoryObj } from '@storybook/react';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';

const meta = {
  title: 'Layout/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Matrix-themed resizable panels for flexible layouts.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="min-h-64 w-full max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-mono text-matrix-green">Panel One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-mono text-matrix-green">Panel Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup direction="vertical" className="min-h-64 w-full max-w-md rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-mono text-matrix-green">Top Panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-mono text-matrix-green">Bottom Panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};

export const MatrixConsole: Story = {
  render: () => (
    <ResizablePanelGroup direction="horizontal" className="min-h-80 w-full max-w-4xl rounded-lg border border-matrix-green/30">
      <ResizablePanel defaultSize={25} minSize={20}>
        <div className="flex h-full flex-col bg-black/50 p-4">
          <h3 className="font-mono text-matrix-green mb-4">System Menu</h3>
          <div className="space-y-2 text-sm">
            <div className="p-2 border border-matrix-green/30 rounded cursor-pointer hover:bg-matrix-green/10">
              Navigation
            </div>
            <div className="p-2 border border-matrix-green/30 rounded cursor-pointer hover:bg-matrix-green/10">
              Diagnostics
            </div>
            <div className="p-2 border border-matrix-green/30 rounded cursor-pointer hover:bg-matrix-green/10">
              Communications
            </div>
            <div className="p-2 border border-matrix-green/30 rounded cursor-pointer hover:bg-matrix-green/10">
              Weapons
            </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full flex-col bg-black/30 p-4">
          <h3 className="font-mono text-matrix-green mb-4">Main Display</h3>
          <div className="flex-1 border border-matrix-green/30 rounded p-4 bg-black/50">
            <div className="space-y-2 font-mono text-sm">
              <div className="text-green-400">$ matrix --status</div>
              <div>System Status: ONLINE</div>
              <div>Power Level: 92%</div>
              <div>Connection: STABLE</div>
              <div className="text-green-400 animate-pulse">$ _</div>
            </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={25} minSize={20}>
        <div className="flex h-full flex-col bg-black/50 p-4">
          <h3 className="font-mono text-matrix-green mb-4">System Log</h3>
          <div className="flex-1 border border-matrix-green/30 rounded p-2 bg-black/50 overflow-auto">
            <div className="space-y-1 font-mono text-xs">
              <div className="text-green-400">[14:32:01] Connection established</div>
              <div className="text-green-400">[14:32:15] Neural interface online</div>
              <div className="text-yellow-400">[14:33:42] Warning: Agent proximity</div>
              <div className="text-green-400">[14:34:01] Stealth mode active</div>
              <div className="text-green-400">[14:34:12] Signal strength: 87%</div>
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
};