import * as React from 'react';
import { cn } from '@/lib/utils';

export interface KeyboardHint {
  key: string;
  label: string;
}

export interface KeyboardHintsProps {
  hints: KeyboardHint[];
  className?: string;
  showIndicator?: boolean;
}

/**
 * KeyboardHints - Display keyboard shortcuts in Matrix terminal style
 * Shows kbd elements with labels in a dashed border container
 */
export function KeyboardHints({
  hints,
  className,
  showIndicator = true,
}: KeyboardHintsProps) {
  return (
    <div
      className={cn(
        "keyboard-hints flex gap-10 justify-center mt-6 p-3.5 bg-matrix-green-100/[0.03] border border-dashed border-matrix-green-400 font-mono text-[0.7rem] text-matrix-green-200 uppercase tracking-wider",
        className
      )}
    >
      {hints.map((hint, index) => (
        <div key={index} className="hint flex items-center gap-3">
          {showIndicator && (
            <span className="text-matrix-green-100 animate-blink">
              &gt;
            </span>
          )}
          <kbd className="px-2 py-1 bg-matrix-black border border-matrix-green-100 text-matrix-green-100 font-mono text-xs font-normal shadow-[inset_0_0_5px_rgba(0,255,65,0.2)] uppercase">
            {hint.key}
          </kbd>
          <span>{hint.label}</span>
        </div>
      ))}
    </div>
  );
}