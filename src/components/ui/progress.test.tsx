import * as React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Progress } from './progress'

describe('Progress', () => {
  it('renders progress bar correctly', () => {
    render(<Progress value={50} data-testid="progress" />)

    const progress = screen.getByTestId('progress')
    expect(progress).toBeInTheDocument()
    expect(progress).toHaveAttribute('data-value', '50')
    expect(progress).toHaveAttribute('data-max', '100')
  })

  it('renders with correct default classes', () => {
    render(<Progress value={30} data-testid="progress" />)

    const progress = screen.getByTestId('progress')
    expect(progress).toHaveClass(
      'relative',
      'h-4',
      'w-full',
      'overflow-hidden',
      'rounded-full',
      'border-2'
    )

    const indicator = progress.querySelector('[data-testid="progress-indicator"]')
    expect(indicator).toHaveClass(
      'h-full',
      'w-full',
      'flex-1',
      'transition-all',
      'duration-300',
      'ease-out'
    )
  })

  it('displays correct progress value', () => {
    render(<Progress value={75} data-testid="progress" />)

    const progress = screen.getByTestId('progress')
    const indicator = progress.querySelector('[data-testid="progress-indicator"]')

    expect(indicator).toHaveStyle('transform: translateX(-25%)')
  })

  it('supports different variants', () => {
    const { rerender } = render(
      <Progress value={50} variant="terminal" data-testid="progress" />
    )

    const progress = screen.getByTestId('progress')
    expect(progress).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-black',
      'shadow-glow-green'
    )

    const indicator = progress.querySelector('[data-testid="progress-indicator"]')
    expect(indicator).toHaveClass(
      'bg-gradient-to-r',
      'from-matrix-green-100',
      'to-matrix-green-300',
      'shadow-glow-green-soft'
    )

    rerender(<Progress value={50} variant="error" data-testid="progress" />)

    expect(progress).toHaveClass(
      'border-red-500',
      'bg-red-950/50',
      'shadow-glow-red'
    )

    expect(indicator).toHaveClass(
      'bg-gradient-to-r',
      'from-red-500',
      'to-red-300',
      'shadow-glow-red'
    )
  })

  it('supports different sizes', () => {
    const { rerender } = render(
      <Progress value={50} size="sm" data-testid="progress" />
    )

    const progress = screen.getByTestId('progress')
    expect(progress).toHaveClass('h-2')

    rerender(<Progress value={50} size="lg" data-testid="progress" />)
    expect(progress).toHaveClass('h-6')
  })

  it('handles zero value', () => {
    render(<Progress value={0} data-testid="progress" />)

    const progress = screen.getByTestId('progress')
    const indicator = progress.querySelector('[data-testid="progress-indicator"]')

    expect(indicator).toHaveStyle('transform: translateX(-100%)')
  })

  it('handles 100% value', () => {
    render(<Progress value={100} data-testid="progress" />)

    const progress = screen.getByTestId('progress')
    const indicator = progress.querySelector('[data-testid="progress-indicator"]')

    expect(indicator).toHaveStyle('transform: translateX(-0%)')
  })

  it('handles undefined value (indeterminate)', () => {
    render(<Progress data-testid="progress" />)

    const progress = screen.getByTestId('progress')
    expect(progress).toHaveAttribute('data-state', 'indeterminate')
  })

  it('accepts custom className', () => {
    render(
      <Progress
        value={50}
        className="custom-progress"
        data-testid="progress"
      />
    )

    const progress = screen.getByTestId('progress')
    expect(progress).toHaveClass('custom-progress')
  })

  it('forwards ref correctly', () => {
    const progressRef = { current: null }

    render(<Progress ref={progressRef} value={50} />)

    expect(progressRef.current).toBeInstanceOf(HTMLDivElement)
  })

  it('supports custom max value', () => {
    render(<Progress value={150} max={200} data-testid="progress" />)

    const progress = screen.getByTestId('progress')
    expect(progress).toHaveAttribute('data-max', '200')
    expect(progress).toHaveAttribute('data-value', '150')

    const indicator = progress.querySelector('[data-testid="progress-indicator"]')
    // 150/200 = 75%, so translateX should be -25%
    expect(indicator).toHaveStyle('transform: translateX(-25%)')
  })

  it('supports accessibility attributes', () => {
    render(
      <Progress
        value={60}
        aria-label="Loading progress"
        data-testid="progress"
      />
    )

    const progress = screen.getByTestId('progress')
    expect(progress).toHaveAttribute('aria-label', 'Loading progress')
    expect(progress).toHaveAttribute('role', 'progressbar')
    expect(progress).toHaveAttribute('aria-valuenow', '60')
    expect(progress).toHaveAttribute('aria-valuemin', '0')
    expect(progress).toHaveAttribute('aria-valuemax', '100')
  })

  it('supports terminal glow effect', () => {
    render(<Progress value={80} variant="terminal" data-testid="progress" />)

    const progress = screen.getByTestId('progress')
    expect(progress).toHaveClass('shadow-glow-green')

    const indicator = progress.querySelector('[data-testid="progress-indicator"]')
    expect(indicator).toHaveClass('shadow-glow-green-soft')
  })

  it('supports success variant with special styling', () => {
    render(<Progress value={100} variant="success" data-testid="progress" />)

    const progress = screen.getByTestId('progress')
    expect(progress).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-dark',
      'shadow-glow-green'
    )

    const indicator = progress.querySelector('[data-testid="progress-indicator"]')
    expect(indicator).toHaveClass(
      'bg-gradient-to-r',
      'from-matrix-green-100',
      'to-matrix-green-300',
      'shadow-glow-green'
    )
  })

  it('clamps value between 0 and max', () => {
    const { rerender } = render(
      <Progress value={-10} data-testid="progress" />
    )

    let progress = screen.getByTestId('progress')
    let indicator = progress.querySelector('[data-testid="progress-indicator"]')
    expect(indicator).toHaveStyle('transform: translateX(-100%)')

    rerender(<Progress value={150} max={100} data-testid="progress" />)

    progress = screen.getByTestId('progress')
    indicator = progress.querySelector('[data-testid="progress-indicator"]')
    expect(indicator).toHaveStyle('transform: translateX(-0%)')
  })

  it('renders with animated gradient for terminal variant', () => {
    render(<Progress value={50} variant="terminal" data-testid="progress" />)

    const indicator = screen.getByTestId('progress').querySelector('[data-testid="progress-indicator"]')
    expect(indicator).toHaveClass(
      'bg-gradient-to-r',
      'from-matrix-green-100',
      'to-matrix-green-300'
    )
  })
})