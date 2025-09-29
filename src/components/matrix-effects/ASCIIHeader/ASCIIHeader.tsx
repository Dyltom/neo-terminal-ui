import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ASCIIHeaderProps {
  children: string | React.ReactNode;
  className?: string;
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
 * ASCIIHeader - Display large ASCII art headers
 * Perfect for logos, titles, and decorative ASCII art
 */
export function ASCIIHeader({
  children,
  className,
  color = 'green-300',
}: ASCIIHeaderProps) {
  const colorClass = colorClasses[color];

  return (
    <div
      className={cn(
        "ascii-header font-mono whitespace-pre text-center leading-tight select-none",
        colorClass,
        className
      )}
    >
      {children}
    </div>
  );
}