import * as React from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../Button';

const ASCII_HEADER = `
╔═══════════════════════════════════════════════════════════╗
║  ███╗   ███╗ █████╗ ████████╗██████╗ ██╗██╗  ██╗        ║
║  ████╗ ████║██╔══██╗╚══██╔══╝██╔══██╗██║╚██╗██╔╝        ║
║  ██╔████╔██║███████║   ██║   ██████╔╝██║ ╚███╔╝         ║
║  ██║╚██╔╝██║██╔══██║   ██║   ██╔══██╗██║ ██╔██╗         ║
║  ██║ ╚═╝ ██║██║  ██║   ██║   ██║  ██║██║██╔╝ ██╗        ║
║  ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝        ║
╠═══════════════════════════════════════════════════════════╣
║           TEMPORAL DISPLACEMENT MODULE v2.0              ║
╚═══════════════════════════════════════════════════════════╝`;

const ASCII_FRAME_TOP = `┌──────────────────────────────────────┐`;
const ASCII_FRAME_BOTTOM = `└──────────────────────────────────────┘`;

export interface TimerProps {
  className?: string;
  onTimeUpdate?: (time: number) => void;
  showKeyboardHints?: boolean;
  showStatus?: boolean;
  showSystemInfo?: boolean;
}

export function Timer({
  className,
  onTimeUpdate,
  showKeyboardHints = true,
  showStatus = true,
  showSystemInfo = true
}: TimerProps) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isFastForward, setIsFastForward] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const liveRegionRef = useRef<HTMLDivElement>(null);
  const previousAnnouncementRef = useRef<string>('');
  const fastForwardRef = useRef<boolean>(false);

  const formatTime = useCallback((milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((milliseconds % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  }, []);

  const togglePlayPause = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      setIsPaused(true);
      setAnnouncement('Timer paused');
    } else {
      setIsRunning(true);
      setIsPaused(false);
      setAnnouncement('Timer started');
    }
  }, [isRunning]);

  const reset = useCallback(() => {
    setTime(0);
    setIsRunning(false);
    setIsPaused(false);
    setAnnouncement('Timer reset');
    if (onTimeUpdate) onTimeUpdate(0);
  }, [onTimeUpdate]);

  const handleFastForwardDown = useCallback(() => {
    if (!fastForwardRef.current) {
      fastForwardRef.current = true;
      setIsFastForward(true);
      setAnnouncement('Fast forward activated');
    }
  }, []);

  const handleFastForwardUp = useCallback(() => {
    if (fastForwardRef.current) {
      fastForwardRef.current = false;
      setIsFastForward(false);
      setAnnouncement('Fast forward deactivated');
    }
  }, []);

  useEffect(() => {
    if (isRunning) {
      const increment = isFastForward ? 100 : 10;
      intervalRef.current = setInterval(() => {
        setTime(prev => {
          const newTime = prev + increment;
          if (onTimeUpdate) onTimeUpdate(newTime);
          return newTime;
        });
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isFastForward, onTimeUpdate]);

  useEffect(() => {
    if (announcement !== previousAnnouncementRef.current && liveRegionRef.current) {
      liveRegionRef.current.textContent = announcement;
      previousAnnouncementRef.current = announcement;
    }
  }, [announcement]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch(e.key) {
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'r':
          e.preventDefault();
          reset();
          break;
        case 'f':
          e.preventDefault();
          handleFastForwardDown();
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'f') {
        handleFastForwardUp();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [togglePlayPause, reset, handleFastForwardDown, handleFastForwardUp]);

  const formattedTime = formatTime(time);

  return (
    <div className={cn("timer-container space-y-4", className)}>
      <pre className="text-matrix-green-200 text-xs leading-none text-center whitespace-pre">
        {ASCII_HEADER}
      </pre>

      {showStatus && (
        <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
          <span className={cn(
            "font-bold",
            isRunning ? "text-matrix-green-100 animate-pulse" :
            isPaused ? "text-matrix-amber" : "text-matrix-green-300"
          )}>
            {isRunning ? 'ACTIVE' : isPaused ? 'SUSPENDED' : 'STANDBY'}
          </span>
          <span className={cn(
            "w-2 h-2 rounded-full",
            isRunning ? "bg-matrix-green-100 shadow-glow-green animate-pulse" :
            isPaused ? "bg-matrix-amber shadow-glow-amber" : "bg-matrix-green-400"
          )} />
        </div>
      )}

      <pre className="text-matrix-green-300 text-sm leading-none text-center whitespace-pre">
        {ASCII_FRAME_TOP}
      </pre>

      <div
        className="timer-display py-8 px-4"
        role="timer"
        aria-label={`Timer at ${formattedTime}`}
        aria-live="off"
      >
        <div className="text-6xl font-mono text-center text-matrix-green-100 tracking-wider tabular-nums"
             style={{ textShadow: 'var(--glow-green)' }}
             aria-hidden="true">
          {formattedTime}
        </div>
      </div>

      <pre className="text-matrix-green-300 text-sm leading-none text-center whitespace-pre">
        {ASCII_FRAME_BOTTOM}
      </pre>

      <div className="flex justify-center gap-4">
        <Button
          onClick={togglePlayPause}
          aria-label={isRunning ? 'Pause timer' : 'Start timer'}
          aria-pressed={isRunning}
          variant="default"
          className="border-matrix-green-100 text-matrix-green-100 hover:bg-matrix-green-100 hover:text-matrix-black uppercase tracking-wider"
        >
          <span className="flex items-center gap-2">
            {isRunning ? '■' : '▶'} {isRunning ? 'PAUSE' : 'START'}
          </span>
        </Button>

        <Button
          onClick={reset}
          aria-label="Reset timer"
          variant="default"
          className="border-matrix-green-100 text-matrix-green-100 hover:bg-matrix-green-100 hover:text-matrix-black uppercase tracking-wider"
        >
          <span className="flex items-center gap-2">↺ RESET</span>
        </Button>

        <Button
          onMouseDown={handleFastForwardDown}
          onMouseUp={handleFastForwardUp}
          onMouseLeave={handleFastForwardUp}
          onTouchStart={handleFastForwardDown}
          onTouchEnd={handleFastForwardUp}
          aria-label="Hold to fast forward"
          variant="default"
          className={cn(
            "border-matrix-green-100 text-matrix-green-100 hover:bg-matrix-green-100 hover:text-matrix-black uppercase tracking-wider",
            isFastForward && "bg-matrix-green-100 text-matrix-black"
          )}
        >
          <span className="flex items-center gap-2">≫ FAST [HOLD]</span>
        </Button>
      </div>

      {showKeyboardHints && (
        <div className="flex justify-center gap-6 text-xs text-matrix-green-300 uppercase">
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 border border-matrix-green-400 rounded">SPACE</kbd>
            <span>START/PAUSE</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 border border-matrix-green-400 rounded">R</kbd>
            <span>RESET</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 border border-matrix-green-400 rounded">F</kbd>
            <span>FAST FORWARD</span>
          </div>
        </div>
      )}

      {showSystemInfo && (
        <div className="text-xs text-matrix-green-400 text-center opacity-50">
          {`[ SYSTEM UPTIME: ${Math.floor(Date.now() / 1000)} ] [ CPU: 2.4% ] [ MEM: 128KB ]`}
        </div>
      )}

      <div
        ref={liveRegionRef}
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />
    </div>
  );
}