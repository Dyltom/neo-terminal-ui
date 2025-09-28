import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from './checkbox'

describe('Checkbox', () => {
  it('renders with correct classes', () => {
    render(<Checkbox data-testid="checkbox" />)

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).toHaveClass(
      'peer',
      'h-4',
      'w-4',
      'shrink-0',
      'rounded-sm',
      'border-2',
      'border-matrix-green-300',
      'bg-matrix-dark',
      'ring-offset-background',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
      'data-[state=checked]:bg-matrix-green-500',
      'data-[state=checked]:text-matrix-green-100',
      'data-[state=checked]:border-matrix-green-100'
    )
  })

  it('renders unchecked by default', () => {
    render(<Checkbox data-testid="checkbox" />)

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).not.toBeChecked()
  })

  it('can be checked and unchecked', async () => {
    const user = userEvent.setup()
    render(<Checkbox data-testid="checkbox" />)

    const checkbox = screen.getByTestId('checkbox')

    await user.click(checkbox)
    expect(checkbox).toBeChecked()

    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  it('supports controlled state', () => {
    const { rerender } = render(<Checkbox checked={false} data-testid="checkbox" />)

    let checkbox = screen.getByTestId('checkbox')
    expect(checkbox).not.toBeChecked()

    rerender(<Checkbox checked={true} data-testid="checkbox" />)

    checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toBeChecked()
  })

  it('calls onCheckedChange when clicked', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(
      <Checkbox
        onCheckedChange={onCheckedChange}
        data-testid="checkbox"
      />
    )

    const checkbox = screen.getByTestId('checkbox')
    await user.click(checkbox)

    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it('supports different variants', () => {
    const { rerender } = render(<Checkbox variant="terminal" data-testid="checkbox" />)

    let checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-black',
      'data-[state=checked]:bg-matrix-green-100',
      'data-[state=checked]:text-matrix-black'
    )

    rerender(<Checkbox variant="error" data-testid="checkbox" />)

    checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveClass(
      'border-red-500',
      'bg-red-950/50',
      'data-[state=checked]:bg-red-500',
      'data-[state=checked]:text-red-950'
    )

    rerender(<Checkbox variant="success" data-testid="checkbox" />)

    checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-dark',
      'data-[state=checked]:bg-matrix-green-100',
      'data-[state=checked]:text-matrix-dark',
      'shadow-glow-green-soft'
    )
  })

  it('supports different sizes', () => {
    const { rerender } = render(<Checkbox size="sm" data-testid="checkbox" />)

    let checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveClass('h-3', 'w-3')

    rerender(<Checkbox size="lg" data-testid="checkbox" />)

    checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveClass('h-5', 'w-5')
  })

  it('can be disabled', () => {
    render(<Checkbox disabled data-testid="checkbox" />)

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toBeDisabled()
    expect(checkbox).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50')
  })

  it('supports indeterminate state', () => {
    render(<Checkbox checked="indeterminate" data-testid="checkbox" />)

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toBeInTheDocument()
    // Indeterminate state is handled by Radix internally
  })

  it('accepts custom className', () => {
    render(<Checkbox className="custom-checkbox" data-testid="checkbox" />)

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveClass('custom-checkbox')
    expect(checkbox).toHaveClass('peer') // should still have base classes
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Checkbox ref={ref} data-testid="checkbox" />)

    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('supports accessibility attributes', () => {
    render(
      <Checkbox
        aria-label="Accept terms"
        aria-describedby="terms-description"
        data-testid="checkbox"
      />
    )

    const checkbox = screen.getByTestId('checkbox')
    expect(checkbox).toHaveAttribute('aria-label', 'Accept terms')
    expect(checkbox).toHaveAttribute('aria-describedby', 'terms-description')
  })

  it('works with form labels', async () => {
    const user = userEvent.setup()

    render(
      <div>
        <label htmlFor="terms-checkbox">
          Accept Terms and Conditions
        </label>
        <Checkbox id="terms-checkbox" data-testid="checkbox" />
      </div>
    )

    const label = screen.getByText('Accept Terms and Conditions')
    const checkbox = screen.getByTestId('checkbox')

    await user.click(label)
    expect(checkbox).toBeChecked()
  })
})