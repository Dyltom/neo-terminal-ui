import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Separator } from './separator'

describe('Separator', () => {
  it('renders with correct default classes', () => {
    const { container } = render(<Separator data-testid="separator" />)

    const separator = screen.getByTestId('separator')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveClass(
      'shrink-0',
      'bg-matrix-green-300',
      'h-[1px]',
      'w-full',
      'shadow-glow-green-soft'
    )
  })

  it('renders vertical separator', () => {
    const { container } = render(<Separator orientation="vertical" data-testid="separator" />)

    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass(
      'h-full',
      'w-[1px]'
    )
  })

  it('renders horizontal separator by default', () => {
    const { container } = render(<Separator data-testid="separator" />)

    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass(
      'h-[1px]',
      'w-full'
    )
  })

  it('supports terminal variant', () => {
    const { container } = render(<Separator variant="terminal" data-testid="separator" />)

    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass(
      'bg-matrix-green-100',
      'shadow-glow-green',
      'relative'
    )
  })

  it('supports dashed variant', () => {
    const { container } = render(<Separator variant="dashed" data-testid="separator" />)

    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass(
      'border-t',
      'border-dashed',
      'border-matrix-green-300',
      'bg-transparent'
    )
  })

  it('supports dotted variant', () => {
    const { container } = render(<Separator variant="dotted" data-testid="separator" />)

    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass(
      'border-t',
      'border-dotted',
      'border-matrix-green-300',
      'bg-transparent'
    )
  })

  it('supports glitch variant', () => {
    const { container } = render(<Separator variant="glitch" data-testid="separator" />)

    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass(
      'bg-matrix-green-100',
      'animate-pulse',
      'shadow-glow-green'
    )
  })

  it('accepts custom className', () => {
    const { container } = render(<Separator className="custom-class" data-testid="separator" />)

    const separator = screen.getByTestId('separator')
    expect(separator).toHaveClass('custom-class')
    expect(separator).toHaveClass('bg-matrix-green-300') // should still have base classes
  })

  it('supports decorative prop', () => {
    const { container } = render(<Separator decorative={false} data-testid="separator" />)

    const separator = screen.getByTestId('separator')
    expect(separator).toBeInTheDocument()
    expect(separator).toHaveAttribute('role', 'separator')
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Separator ref={ref} data-testid="separator" />)

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('passes through other props', () => {
    const { container } = render(
      <Separator data-testid="separator" aria-label="Content separator" />
    )

    const separator = screen.getByTestId('separator')
    expect(separator).toHaveAttribute('aria-label', 'Content separator')
  })
})