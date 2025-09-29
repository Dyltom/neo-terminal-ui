import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TimerContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * TimerContainer - Layout wrapper for timer components
 * Provides consistent positioning and spacing
 */
export function TimerContainer({
  children,
  className,
}: TimerContainerProps) {
  return (
    <div
      className={cn(
        "timer-container relative z-[100]",
        className
      )}
    >
      {children}
    </div>
  );
}