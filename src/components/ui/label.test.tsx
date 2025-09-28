import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Label } from './label'

describe('Label', () => {
  it('renders with correct classes and content', () => {
    render(<Label>Test Label</Label>)

    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass(
      'text-sm',
      'font-terminal',
      'font-medium',
      'leading-none',
      'peer-disabled:cursor-not-allowed',
      'peer-disabled:opacity-70',
      'text-matrix-green-100',
      'tracking-wide',
      'uppercase'
    )
  })

  it('renders as label element by default', () => {
    render(<Label>Form Label</Label>)

    const label = screen.getByText('Form Label')
    expect(label.tagName).toBe('LABEL')
  })

  it('accepts htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Input Label</Label>)

    const label = screen.getByText('Input Label')
    expect(label).toHaveAttribute('for', 'test-input')
  })

  it('accepts custom className', () => {
    render(<Label className="custom-class">Custom Label</Label>)

    const label = screen.getByText('Custom Label')
    expect(label).toHaveClass('custom-class')
    expect(label).toHaveClass('text-matrix-green-100') // should still have base classes
  })

  it('supports terminal variant', () => {
    render(<Label variant="terminal">Terminal Label</Label>)

    const label = screen.getByText('Terminal Label')
    expect(label).toHaveClass(
      'font-mono',
      'text-matrix-green-100',
      'border-l-2',
      'border-matrix-green-300',
      'pl-2',
      'bg-matrix-black/50'
    )
  })

  it('supports error variant', () => {
    render(<Label variant="error">Error Label</Label>)

    const label = screen.getByText('Error Label')
    expect(label).toHaveClass(
      'text-red-400',
      'border-l-2',
      'border-red-500',
      'pl-2'
    )
  })

  it('supports success variant', () => {
    render(<Label variant="success">Success Label</Label>)

    const label = screen.getByText('Success Label')
    expect(label).toHaveClass(
      'text-matrix-green-100',
      'border-l-2',
      'border-matrix-green-100',
      'pl-2',
      'shadow-glow-green-soft'
    )
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Label ref={ref}>Ref Label</Label>)

    expect(ref.current).toBeInstanceOf(HTMLLabelElement)
  })

  it('passes through all other props', () => {
    render(
      <Label data-testid="test-label" aria-label="Accessible label">
        Props Label
      </Label>
    )

    const label = screen.getByTestId('test-label')
    expect(label).toHaveAttribute('aria-label', 'Accessible label')
  })
})