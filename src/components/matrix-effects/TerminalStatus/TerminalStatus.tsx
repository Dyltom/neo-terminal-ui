import * as React from 'react';
import { cn } from '@/lib/utils';

export type StatusType = 'online' | 'offline' | 'warning' | 'error' | 'loading' | 'idle';

export interface StatusConfig {
  label: string;
  color: 'green-100' | 'green-300' | 'amber' | 'red' | 'green-400';
  animate?: boolean;
}

const defaultStatusConfigs: Record<StatusType, StatusConfig> = {
  online: { label: 'ONLINE', color: 'green-100', animate: true },
  offline: { label: 'OFFLINE', color: 'green-400' },
  warning: { label: 'WARNING', color: 'amber' },
  error: { label: 'ERROR', color: 'red', animate: true },
  loading: { label: 'LOADING', color: 'green-300', animate: true },
  idle: { label: 'IDLE', color: 'green-300' },
};

export interface TerminalStatusProps {
  status?: StatusType;
  customLabel?: string;
  showIndicator?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBrackets?: boolean;
  unstyled?: boolean; // Allow completely custom styling
}

const sizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const colorClasses = {
  'green-100': 'text-matrix-green-100',
  'green-300': 'text-matrix-green-300',
  'green-400': 'text-matrix-green-400',
  'amber': 'text-matrix-amber',
  'red': 'text-matrix-red',
};

const glowClasses = {
  'green-100': 'shadow-glow-green',
  'green-300': 'shadow-glow-green-soft',
  'green-400': '',
  'amber': 'shadow-glow-amber',
  'red': 'shadow-glow-red',
};

export function TerminalStatus({
  status = 'idle',
  customLabel,
  showIndicator = true,
  className,
  size = 'md',
  showBrackets = true,
  unstyled = false,
}: TerminalStatusProps) {
  const config = defaultStatusConfigs[status];
  const label = customLabel || config.label;
  const colorClass = colorClasses[config.color];
  const glowClass = glowClasses[config.color];

  // For unstyled mode, return minimal structure for maximum flexibility
  if (unstyled) {
    return (
      <>
        <span className={cn(
          status === 'online' ? 'status-online' : 'status-warning',
          className
        )}>
          {label}
        </span>
        {showIndicator && (
          <span className="status-indicator" />
        )}
      </>
    );
  }

  return (
    <div
      className={cn(
        "terminal-status inline-flex items-center gap-2 font-mono uppercase tracking-wider",
        sizeClasses[size],
        className
      )}
    >
      <span
        className={cn(
          "font-bold",
          colorClass,
          config.animate && "animate-pulse"
        )}
        style={{
          textShadow: config.animate ? `var(--glow-${config.color === 'green-100' ? 'green' : config.color === 'amber' ? 'amber' : 'red'})` : undefined
        }}
      >
        {showBrackets ? `[ ${label} ]` : label}
      </span>

      {showIndicator && (
        <span
          className={cn(
            "status-indicator rounded-full",
            size === 'sm' && "w-1.5 h-1.5",
            size === 'md' && "w-2 h-2",
            size === 'lg' && "w-2.5 h-2.5",
            config.color === 'green-100' && "bg-matrix-green-100",
            config.color === 'green-300' && "bg-matrix-green-300",
            config.color === 'green-400' && "bg-matrix-green-400",
            config.color === 'amber' && "bg-matrix-amber",
            config.color === 'red' && "bg-matrix-red",
            glowClass,
            config.animate && "animate-pulse"
          )}
        />
      )}
    </div>
  );
}

export interface SystemInfoProps {
  uptime?: number;
  cpu?: number;
  memory?: string;
  className?: string;
  showLabels?: boolean;
  separator?: string;
  showBrackets?: boolean; // Control bracket display
}

export function SystemInfo({
  uptime = Math.floor(Date.now() / 1000),
  cpu = 2.4,
  memory = '128KB',
  className,
  showLabels = true,
  separator = ' | ',
  showBrackets = true,
}: SystemInfoProps) {
  const items = [
    { label: 'SYSTEM UPTIME', value: uptime },
    { label: 'CPU', value: `${cpu}%` },
    { label: 'MEM', value: memory },
  ];

  const content = (
    <>
      {items.map((item, index) => (
        <span key={item.label}>
          {showLabels && `${item.label}: `}
          <span className="text-matrix-green-300">{item.value}</span>
          {index < items.length - 1 && separator}
        </span>
      ))}
    </>
  );

  return (
    <div
      className={cn(
        "system-info text-xs text-matrix-green-400 font-mono uppercase tracking-wider opacity-50",
        className
      )}
    >
      {showBrackets ? (
        <>
          {'[ '}
          {content}
          {' ]'}
        </>
      ) : content}
    </div>
  );
}