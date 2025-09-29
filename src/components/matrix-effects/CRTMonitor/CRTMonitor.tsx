import React from 'react';
import { cn } from '@/lib/utils';

export interface CRTMonitorProps {
  children: React.ReactNode;
  className?: string;
  enableFlicker?: boolean;
  enableScanlines?: boolean;
  enableCurve?: boolean;
  flickerIntensity?: 'low' | 'medium' | 'high';
  scanlinesOpacity?: number;
}

export function CRTMonitor({
  children,
  className,
  enableFlicker = true,
  enableScanlines = true,
  enableCurve = true,
  flickerIntensity = 'low',
  scanlinesOpacity = 0.03,
}: CRTMonitorProps) {
  const flickerClass = {
    low: 'animate-[flicker_0.15s_infinite]',
    medium: 'animate-[flicker_0.1s_infinite]',
    high: 'animate-[flicker_0.05s_infinite]',
  }[flickerIntensity];

  return (
    <>
      {/* CRT Monitor Background Effect */}
      <div
        className={cn(
          "fixed inset-0 bg-gradient-radial from-matrix-dark to-matrix-black pointer-events-none",
          enableFlicker && flickerClass,
          className
        )}
        style={{
          background: 'radial-gradient(ellipse at center, var(--matrix-dark) 0%, var(--matrix-black) 100%)'
        }}
      >
        {/* Scanlines Effect */}
        {enableScanlines && (
          <div
            className="absolute inset-0 pointer-events-none z-[1000] animate-scanlines"
            style={{
              background: `linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0, 255, 65, ${scanlinesOpacity}) 50%,
                transparent 100%
              )`,
              backgroundSize: '100% 4px'
            }}
          />
        )}

        {/* CRT Curve Effect */}
        {enableCurve && (
          <div
            className="absolute inset-0 pointer-events-none z-[999]"
            style={{
              background: `radial-gradient(
                ellipse at center,
                transparent 0%,
                transparent 60%,
                rgba(0, 0, 0, 0.4) 100%
              )`
            }}
          />
        )}
      </div>

      {/* Terminal Screen Content */}
      <div className="terminal-screen relative w-full min-h-screen p-8 flex flex-col items-center justify-center z-10">
        {children}
      </div>
    </>
  );
}