import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';

const meta = {
  title: 'Data/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A matrix-themed calendar component for date selection.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border border-matrix-green/30"
      />
    );
  },
};

export const MatrixCalendar: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-mono text-matrix-green">Mission Schedule</h3>
          <p className="text-sm text-muted-foreground">
            Select mission date for Matrix operations
          </p>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border border-matrix-green/30 bg-black/50"
        />
        {date && (
          <div className="text-center text-sm">
            <span className="text-matrix-green">Selected: </span>
            {date.toDateString()}
          </div>
        )}
      </div>
    );
  },
};