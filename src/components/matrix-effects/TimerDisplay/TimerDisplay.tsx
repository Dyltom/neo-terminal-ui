import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TimerDisplayProps {
  time: string;
  className?: string;
  showBrackets?: boolean;
  ariaLabel?: string;
  color?: 'green-100' | 'green-200' | 'green-300' | 'green-400' | 'amber' | 'red';
}

const colorClasses = {
  'green-100': 'text-matrix-green-100',
  'green-200': 'text-matrix-green-200',
  'green-300': 'text-matrix-green-300',
  'green-400': 'text-matrix-green-400',
  'amber': 'text-matrix-amber',
  'red': 'text-matrix-red',
};

/**
 * TimerDisplay - Display formatted time with optional brackets
 * Designed for countdown/countup timers with Matrix terminal styling
 */
export function TimerDisplay({
  time,
  className,
  showBrackets = true,
  ariaLabel,
  color = 'green-100',
}: TimerDisplayProps) {
  const colorClass = colorClasses[color];

  return (
    <div
      className={cn(
        "timer-display text-center font-mono select-none",
        colorClass,
        className
      )}
      role="timer"
      aria-label={ariaLabel || `Timer at ${time}`}
      aria-live="off"
    >
      <div className="time-text inline-block" aria-hidden="true">
        {showBrackets && (
          <span className="text-matrix-green-300 text-[0.8em] mr-2">
            [
          </span>
        )}
        {time}
        {showBrackets && (
          <span className="text-matrix-green-300 text-[0.8em] ml-2">
            ]
          </span>
        )}
      </div>
    </div>
  );
}