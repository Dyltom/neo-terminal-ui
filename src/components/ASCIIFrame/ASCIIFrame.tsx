import * as React from 'react';
import { cn } from '@/lib/utils';

export type FrameStyle = 'single' | 'double' | 'rounded' | 'heavy' | 'dashed' | 'custom';

export interface ASCIIFrameProps {
  children?: React.ReactNode;
  className?: string;
  width?: number;
  title?: string;
  style?: FrameStyle;
  customChars?: {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
    horizontal?: string;
    vertical?: string;
  };
  color?: 'green-100' | 'green-200' | 'green-300' | 'green-400' | 'amber' | 'red';
  padding?: boolean;
  animate?: boolean;
}

const frameStyles = {
  single: {
    topLeft: '┌',
    topRight: '┐',
    bottomLeft: '└',
    bottomRight: '┘',
    horizontal: '─',
    vertical: '│',
  },
  double: {
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝',
    horizontal: '═',
    vertical: '║',
  },
  rounded: {
    topLeft: '╭',
    topRight: '╮',
    bottomLeft: '╰',
    bottomRight: '╯',
    horizontal: '─',
    vertical: '│',
  },
  heavy: {
    topLeft: '┏',
    topRight: '┓',
    bottomLeft: '┗',
    bottomRight: '┛',
    horizontal: '━',
    vertical: '┃',
  },
  dashed: {
    topLeft: '┌',
    topRight: '┐',
    bottomLeft: '└',
    bottomRight: '┘',
    horizontal: '╌',
    vertical: '╎',
  },
  custom: {
    topLeft: '+',
    topRight: '+',
    bottomLeft: '+',
    bottomRight: '+',
    horizontal: '-',
    vertical: '|',
  },
};

const colorClasses = {
  'green-100': 'text-matrix-green-100',
  'green-200': 'text-matrix-green-200',
  'green-300': 'text-matrix-green-300',
  'green-400': 'text-matrix-green-400',
  'amber': 'text-matrix-amber',
  'red': 'text-matrix-red',
};

export function ASCIIFrame({
  children,
  className,
  width = 40,
  title,
  style = 'single',
  customChars,
  color = 'green-300',
  padding = false,
  animate = false,
}: ASCIIFrameProps) {
  const chars = customChars || frameStyles[style];
  if (!chars || !chars.horizontal) return null;
  const colorClass = colorClasses[color];

  const horizontalLine = chars.horizontal.repeat(width - 2);
  const topLine = `${chars.topLeft}${horizontalLine}${chars.topRight}`;
  const bottomLine = `${chars.bottomLeft}${horizontalLine}${chars.bottomRight}`;

  const titleLine = title
    ? `${chars.topLeft}${chars.horizontal}${chars.horizontal} ${title} ${chars.horizontal.repeat(
        Math.max(0, width - title.length - 6)
      )}${chars.topRight}`
    : topLine;

  return (
    <div
      className={cn(
        "ascii-frame font-mono whitespace-pre",
        colorClass,
        animate && "animate-pulse",
        className
      )}
    >
      <div className="leading-none">{title ? titleLine : topLine}</div>
      {padding && <div className="leading-none">{`${chars.vertical}${' '.repeat(width - 2)}${chars.vertical}`}</div>}
      {children && (
        <div className="leading-none">
          {`${chars.vertical} `}
          <span className="inline-block" style={{ width: `${(width - 4) * 0.6}rem` }}>
            {children}
          </span>
          {` ${chars.vertical}`}
        </div>
      )}
      {padding && <div className="leading-none">{`${chars.vertical}${' '.repeat(width - 2)}${chars.vertical}`}</div>}
      <div className="leading-none">{bottomLine}</div>
    </div>
  );
}

export interface ASCIIBoxProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  width?: string;
  height?: string;
  color?: 'green-100' | 'green-200' | 'green-300' | 'green-400' | 'amber' | 'red';
}

export function ASCIIBox({
  children,
  className,
  title,
  width = 'auto',
  height = 'auto',
  color = 'green-200',
}: ASCIIBoxProps) {
  const colorClass = colorClasses[color];

  return (
    <div
      className={cn(
        "ascii-box border-2 p-4 font-mono",
        colorClass,
        className
      )}
      style={{
        width,
        height,
        borderStyle: 'solid',
        borderImage: `repeating-linear-gradient(
          90deg,
          currentColor,
          currentColor 2px,
          transparent 2px,
          transparent 4px
        ) 1`,
      }}
    >
      {title && (
        <div className="ascii-box-title -mt-6 -ml-2 px-2 bg-matrix-black inline-block">
          <span className="text-sm uppercase tracking-wider">{title}</span>
        </div>
      )}
      <div className="ascii-box-content">{children}</div>
    </div>
  );
}