import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const meta = {
  title: 'Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed slider component for numeric input with cyberpunk styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-4 w-80">
      <Label htmlFor="power-level">Power Level</Label>
      <Slider
        {...args}
        id="power-level"
        defaultValue={[75]}
        max={100}
        step={1}
      />
      <div className="text-sm text-muted-foreground">
        Current level: 75%
      </div>
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Label>Neural Interface Range</Label>
      <Slider
        defaultValue={[25, 75]}
        max={100}
        step={1}
      />
      <div className="text-sm text-muted-foreground">
        Range: 25% - 75%
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: [40],
    max: 100,
    step: 1,
    disabled: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState([50]);

    return (
      <div className="space-y-4 w-80">
        <Label>Matrix Power Level: {value[0]}%</Label>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
        />
        <div className="text-sm text-muted-foreground">
          {value[0] < 25 && "Low power - Stealth mode active"}
          {value[0] >= 25 && value[0] < 75 && "Normal operations"}
          {value[0] >= 75 && "High power - Enhanced abilities"}
        </div>
      </div>
    );
  },
};

export const StepVariants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <Label>Fine Control (Step: 1)</Label>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>

      <div className="space-y-2">
        <Label>Medium Control (Step: 5)</Label>
        <Slider defaultValue={[35]} max={100} step={5} />
      </div>

      <div className="space-y-2">
        <Label>Coarse Control (Step: 10)</Label>
        <Slider defaultValue={[30]} max={100} step={10} />
      </div>

      <div className="space-y-2">
        <Label>Preset Levels (Step: 25)</Label>
        <Slider defaultValue={[25]} max={100} step={25} />
      </div>
    </div>
  ),
};

export const MatrixControls: Story = {
  render: () => {
    const [power, setPower] = useState([80]);
    const [speed, setSpeed] = useState([60]);
    const [stealth, setStealth] = useState([30]);
    const [awareness, setAwareness] = useState([90]);

    return (
      <div className="space-y-6 p-6 border border-matrix-green/30 rounded-lg bg-black/50 w-96">
        <h3 className="text-lg font-mono text-matrix-green">Neural Interface Controls</h3>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Power Level</Label>
              <span className="text-sm text-matrix-green">{power[0]}%</span>
            </div>
            <Slider
              value={power}
              onValueChange={setPower}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Processing Speed</Label>
              <span className="text-sm text-matrix-green">{speed[0]}%</span>
            </div>
            <Slider
              value={speed}
              onValueChange={setSpeed}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Stealth Mode</Label>
              <span className="text-sm text-matrix-green">{stealth[0]}%</span>
            </div>
            <Slider
              value={stealth}
              onValueChange={setStealth}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Agent Awareness</Label>
              <span className="text-sm text-red-400">{awareness[0]}%</span>
            </div>
            <Slider
              value={awareness}
              onValueChange={setAwareness}
              max={100}
              step={1}
              disabled
            />
            <div className="text-xs text-muted-foreground">
              Read-only system parameter
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-matrix-green/20">
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span>System Status:</span>
              <span className={`${
                power[0] > 50 && speed[0] > 50
                  ? "text-green-400"
                  : "text-yellow-400"
              }`}>
                {power[0] > 50 && speed[0] > 50 ? "Optimal" : "Reduced Performance"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Stealth Rating:</span>
              <span className={`${
                stealth[0] > 70
                  ? "text-green-400"
                  : stealth[0] > 30
                    ? "text-yellow-400"
                    : "text-red-400"
              }`}>
                {stealth[0] > 70 ? "Hidden" : stealth[0] > 30 ? "Partially Visible" : "Exposed"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = useState([65]);

    return (
      <div className="space-y-4 w-80 p-4 border border-matrix-green/30 rounded-lg bg-black/50">
        <div className="flex items-center justify-between">
          <Label>Audio Level</Label>
          <span className="text-matrix-green font-mono">{volume[0]}dB</span>
        </div>
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
        />
        <div className="text-xs text-muted-foreground">
          {volume[0] === 0 && "🔇 Muted"}
          {volume[0] > 0 && volume[0] <= 30 && "🔈 Low"}
          {volume[0] > 30 && volume[0] <= 70 && "🔉 Medium"}
          {volume[0] > 70 && "🔊 High"}
        </div>
      </div>
    );
  },
};

export const TemperatureRange: Story = {
  render: () => {
    const [range, setRange] = useState([15, 85]);

    return (
      <div className="space-y-4 w-80 p-4 border border-matrix-green/30 rounded-lg bg-black/50">
        <Label>Temperature Range (°C)</Label>
        <Slider
          value={range}
          onValueChange={setRange}
          min={-20}
          max={120}
          step={1}
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Min: {range[0]}°C</span>
          <span>Max: {range[1]}°C</span>
        </div>
        <div className="text-xs text-center text-muted-foreground">
          Operating range for Matrix servers
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <Label>Default Slider</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>

      <div className="space-y-2">
        <Label>Range Slider</Label>
        <Slider defaultValue={[20, 80]} max={100} step={1} />
      </div>

      <div className="space-y-2">
        <Label>Large Steps</Label>
        <Slider defaultValue={[50]} max={100} step={10} />
      </div>

      <div className="space-y-2">
        <Label>Custom Range</Label>
        <Slider defaultValue={[0]} min={-50} max={50} step={5} />
      </div>

      <div className="space-y-2">
        <Label>Disabled</Label>
        <Slider defaultValue={[30]} max={100} step={1} disabled />
      </div>
    </div>
  ),
};