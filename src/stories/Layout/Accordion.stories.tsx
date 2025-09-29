import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const meta = {
  title: 'Layout/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed accordion component for collapsible content sections.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args} type="single" collapsible className="w-96">
      <AccordionItem value="item-1">
        <AccordionTrigger>Matrix Protocols</AccordionTrigger>
        <AccordionContent>
          The Matrix is a system, Neo. That system is our enemy. When you're inside,
          you look around, what do you see? Businessmen, teachers, lawyers, carpenters.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Red Pill Effects</AccordionTrigger>
        <AccordionContent>
          This is your last chance. After this, there is no going back. You take the
          blue pill—the story ends, you wake up in your bed and believe whatever you want to believe.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Zion Defense Systems</AccordionTrigger>
        <AccordionContent>
          Zion! Hear me! It is true what many of you have heard. The machines have
          gathered an army, and as I speak that army is drawing nearer to our home.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: (args) => (
    <Accordion {...args} type="multiple" className="w-96">
      <AccordionItem value="power">
        <AccordionTrigger>Power Systems</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Primary power core operating at 92% efficiency.</p>
            <p>Backup generators on standby.</p>
            <p>Emergency power cells charged to 100%.</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="navigation">
        <AccordionTrigger>Navigation</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Current coordinates: 41.8781° N, 87.6298° W</p>
            <p>Heading: 270° (Due West)</p>
            <p>Speed: 45 knots</p>
            <p>Destination: Zion Dock 7</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="life-support">
        <AccordionTrigger>Life Support</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Oxygen levels: 98%</p>
            <p>Temperature: 22°C</p>
            <p>Pressure: 1 ATM</p>
            <p>Air recycling: Optimal</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MatrixManual: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-96">
      <AccordionItem value="getting-started">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-matrix-green">Welcome to the Matrix</h4>
            <p className="text-sm">
              Before you begin your journey, you must understand that the Matrix
              is a simulation. Everything you think you know about reality is a lie.
            </p>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li>Choose your pill wisely</li>
              <li>Trust Morpheus and his crew</li>
              <li>Train your mind to bend reality</li>
              <li>Remember: there is no spoon</li>
            </ol>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="rules">
        <AccordionTrigger>Matrix Rules</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-matrix-green">Basic Laws of the Simulation</h4>
            <ul className="text-sm space-y-2">
              <li>• Physics can be bent, not broken</li>
              <li>• Death in the Matrix means death in reality</li>
              <li>• Agents can take over any connected mind</li>
              <li>• The body cannot live without the mind</li>
              <li>• Free your mind and the body will follow</li>
            </ul>
            <div className="p-3 bg-red-500/10 border border-red-500/30 rounded">
              <p className="text-xs text-red-400">
                <strong>Warning:</strong> Never attempt to wake someone who isn't ready.
                The shock could kill them.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="programs">
        <AccordionTrigger>Training Programs</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-matrix-green">Available Simulations</h4>
            <div className="space-y-2">
              <div className="border border-matrix-green/30 rounded p-2">
                <h5 className="text-sm font-medium">Sparring Program</h5>
                <p className="text-xs text-muted-foreground">
                  Combat training with Morpheus. Level: Intermediate
                </p>
              </div>
              <div className="border border-matrix-green/30 rounded p-2">
                <h5 className="text-sm font-medium">Jump Program</h5>
                <p className="text-xs text-muted-foreground">
                  Learn to overcome mental limitations. Level: Advanced
                </p>
              </div>
              <div className="border border-red-500/30 rounded p-2">
                <h5 className="text-sm font-medium text-red-400">Agent Training</h5>
                <p className="text-xs text-red-400/70">
                  Lethal program. Only for The One. Level: Maximum
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="weapons">
        <AccordionTrigger>Weapons & Equipment</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-matrix-green">Arsenal</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <h5 className="font-medium">Firearms</h5>
                <ul className="space-y-1">
                  <li>• Desert Eagle .50</li>
                  <li>• MP5 Submachine Gun</li>
                  <li>• M16 Assault Rifle</li>
                  <li>• Shotgun (Various)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium">Equipment</h5>
                <ul className="space-y-1">
                  <li>• Cell Phone (Nokia)</li>
                  <li>• Sunglasses</li>
                  <li>• Black Clothing</li>
                  <li>• Combat Boots</li>
                </ul>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="philosophy">
        <AccordionTrigger>The Philosophy</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <blockquote className="border-l-2 border-matrix-green pl-4 italic text-sm">
              "What is real? How do you define 'real'? If you're talking about what
              you can feel, what you can smell, what you can taste and see, then
              'real' is simply electrical signals interpreted by your brain."
            </blockquote>
            <p className="text-sm">
              The Matrix challenges our perception of reality and forces us to question
              the nature of existence itself. Are we living in a simulation? How can
              we know what's real?
            </p>
            <div className="p-3 bg-matrix-green/5 border border-matrix-green/30 rounded">
              <p className="text-xs text-matrix-green">
                Remember: The mind makes it real. Your beliefs shape your reality
                within the Matrix.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const SystemDiagnostics: Story = {
  render: () => (
    <Accordion type="multiple" className="w-96">
      <AccordionItem value="cpu">
        <AccordionTrigger className="text-green-400">
          CPU Status: Optimal
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between">
              <span>Usage:</span>
              <span className="text-green-400">34%</span>
            </div>
            <div className="flex justify-between">
              <span>Temperature:</span>
              <span className="text-green-400">42°C</span>
            </div>
            <div className="flex justify-between">
              <span>Clock Speed:</span>
              <span className="text-green-400">3.2 GHz</span>
            </div>
            <div className="flex justify-between">
              <span>Cores Active:</span>
              <span className="text-green-400">8/8</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="memory">
        <AccordionTrigger className="text-yellow-400">
          Memory: Warning
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between">
              <span>Usage:</span>
              <span className="text-yellow-400">87%</span>
            </div>
            <div className="flex justify-between">
              <span>Available:</span>
              <span className="text-yellow-400">2.1 GB</span>
            </div>
            <div className="flex justify-between">
              <span>Total:</span>
              <span>16 GB</span>
            </div>
            <div className="p-2 bg-yellow-400/10 border border-yellow-400/30 rounded text-xs">
              High memory usage detected. Consider freeing some resources.
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="network">
        <AccordionTrigger className="text-red-400">
          Network: Critical
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex justify-between">
              <span>Connection:</span>
              <span className="text-red-400">Unstable</span>
            </div>
            <div className="flex justify-between">
              <span>Latency:</span>
              <span className="text-red-400">2,847ms</span>
            </div>
            <div className="flex justify-between">
              <span>Packet Loss:</span>
              <span className="text-red-400">23%</span>
            </div>
            <div className="p-2 bg-red-400/10 border border-red-400/30 rounded text-xs">
              Agent interference detected. Recommend immediate disconnection.
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};