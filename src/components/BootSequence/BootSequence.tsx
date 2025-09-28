import * as React from 'react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export interface BootSequenceMessage {
  text: string;
  delay?: number;
  className?: string;
  isSystemReady?: boolean;
}

export interface BootSequenceProps {
  messages?: BootSequenceMessage[];
  onComplete?: () => void;
  className?: string;
  autoStart?: boolean;
  typingSpeed?: number;
}

const defaultMessages: BootSequenceMessage[] = [
  { text: '> INITIALISING MATRIX TERMINAL v2.0...', delay: 0 },
  { text: '> LOADING TEMPORAL DISPLACEMENT MODULE...', delay: 800 },
  { text: '> CALIBRATING DRIFT CORRECTION ALGORITHMS...', delay: 1400 },
  { text: '> SYNCHRONISING QUANTUM TIME MATRICES...', delay: 2000 },
  { text: '> ESTABLISHING SECURE CONNECTION...', delay: 2600 },
  { text: '> SYSTEM READY', delay: 3200, isSystemReady: true },
];

export function BootSequence({
  messages = defaultMessages,
  onComplete,
  className,
  autoStart = true,
  typingSpeed = 30,
}: BootSequenceProps) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [currentTypingIndex, setCurrentTypingIndex] = useState<number>(-1);
  const [typedChars, setTypedChars] = useState<number>(0);

  useEffect(() => {
    if (!autoStart) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    messages.forEach((message, index) => {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, index]);
        setCurrentTypingIndex(index);
        setTypedChars(0);
      }, message.delay || index * 600);

      timers.push(timer);
    });

    const completionTimer = setTimeout(() => {
      if (onComplete) {
        setTimeout(onComplete, 500);
      }
    }, (messages[messages.length - 1]?.delay || 3200) + 800);

    timers.push(completionTimer);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [messages, onComplete, autoStart]);

  useEffect(() => {
    if (currentTypingIndex === -1) return;

    const message = messages[currentTypingIndex];
    if (!message) return;

    if (typedChars < message.text.length) {
      const timer = setTimeout(() => {
        setTypedChars(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [currentTypingIndex, typedChars, messages, typingSpeed]);

  return (
    <div className={cn("boot-sequence-container flex items-center justify-center min-h-screen w-full", className)}>
      <div className="boot-sequence text-matrix-green-200 font-mono text-sm leading-8 uppercase tracking-wider p-8 max-w-4xl w-full">
        {messages.map((message, index) => {
          const isVisible = visibleMessages.includes(index);
          const isTyping = currentTypingIndex === index;
          const displayText = isTyping
            ? message.text.slice(0, typedChars)
            : isVisible
              ? message.text
              : '';

          return (
            <div
              key={index}
              className={cn(
                "terminal-text block my-2 opacity-0",
                isVisible && "animate-[fadeInText_0.6s_ease-in_forwards]",
                message.isSystemReady && "text-matrix-green-100 text-base mt-6 font-bold",
                isTyping && "typing-text opacity-100",
                message.className
              )}
              style={{
                animationDelay: `${(message.delay || index * 600)}ms`,
                textShadow: message.isSystemReady ? 'var(--glow-green)' : 'var(--glow-green-soft)'
              }}
            >
              {displayText}
              {isTyping && typedChars < message.text.length && (
                <span className="cursor inline-block w-3 h-5 bg-matrix-green-100 align-text-bottom ml-0.5 animate-blink" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}