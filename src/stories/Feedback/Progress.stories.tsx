import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

const meta = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed progress component for showing completion status.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 65,
  },
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return <Progress value={progress} className="w-80" />;
  },
};

export const MatrixLoading: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 100);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-80 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Loading Matrix...</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    );
  },
};

export const SystemStatus: Story = {
  render: () => (
    <div className="w-80 space-y-6 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
      <h3 className="text-lg font-mono text-matrix-green">Ship Systems Status</h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Power Core</span>
            <span className="text-green-400">92%</span>
          </div>
          <Progress value={92} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Life Support</span>
            <span className="text-green-400">98%</span>
          </div>
          <Progress value={98} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Navigation</span>
            <span className="text-yellow-400">67%</span>
          </div>
          <Progress value={67} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Stealth Systems</span>
            <span className="text-red-400">23%</span>
          </div>
          <Progress value={23} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Weapons</span>
            <span className="text-orange-400">45%</span>
          </div>
          <Progress value={45} />
        </div>
      </div>
    </div>
  ),
};

export const NeuralTraining: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 0.5;
        });
      }, 50);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="w-80 space-y-4 p-6 border border-matrix-green/30 rounded-lg bg-black/50">
        <h3 className="text-lg font-mono text-matrix-green">Neural Training Progress</h3>

        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Combat Training</span>
              <span className="text-green-400">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} />
          </div>

          <div className="text-xs text-muted-foreground">
            {progress < 25 && "Initializing neural pathways..."}
            {progress >= 25 && progress < 50 && "Loading combat protocols..."}
            {progress >= 50 && progress < 75 && "Calibrating reflexes..."}
            {progress >= 75 && progress < 100 && "Finalizing training matrix..."}
            {progress >= 100 && "Training complete. You know kung fu."}
          </div>
        </div>
      </div>
    );
  },
};

export const MultipleProgress: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <div className="text-sm font-medium">Upload Progress</div>
        <Progress value={33} />
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Download Progress</div>
        <Progress value={67} />
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Installation Progress</div>
        <Progress value={89} />
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Complete</div>
        <Progress value={100} />
      </div>
    </div>
  ),
};