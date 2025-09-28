import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from './switch'

describe('Switch', () => {
  it('renders with correct classes', () => {
    render(<Switch data-testid="switch" />)

    const switchElement = screen.getByTestId('switch')
    expect(switchElement).toBeInTheDocument()
    expect(switchElement).toHaveClass(
      'peer',
      'inline-flex',
      'h-6',
      'w-11',
      'shrink-0',
      'cursor-pointer',
      'items-center',
      'rounded-full',
      'border-2',
      'border-transparent',
      'transition-colors',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2',
      'focus-visible:ring-offset-background',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
      'data-[state=checked]:bg-matrix-green-500',
      'data-[state=unchecked]:bg-matrix-green-300/30',
      'shadow-glow-green-soft'
    )
  })

  it('renders unchecked by default', () => {
    render(<Switch data-testid="switch" />)

    const switchElement = screen.getByTestId('switch')
    expect(switchElement).not.toBeChecked()
  })

  it('can be toggled on and off', async () => {
    const user = userEvent.setup()
    render(<Switch data-testid="switch" />)

    const switchElement = screen.getByTestId('switch')

    // Initially unchecked
    expect(switchElement).not.toBeChecked()

    // Click to turn on
    await user.click(switchElement)
    expect(switchElement).toBeChecked()

    // Click again to turn off
    await user.click(switchElement)
    expect(switchElement).not.toBeChecked()
  })

  it('supports controlled state', () => {
    const { rerender } = render(<Switch checked={false} data-testid="switch" />)

    let switchElement = screen.getByTestId('switch')
    expect(switchElement).not.toBeChecked()

    rerender(<Switch checked={true} data-testid="switch" />)

    switchElement = screen.getByTestId('switch')
    expect(switchElement).toBeChecked()
  })

  it('calls onCheckedChange when toggled', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(
      <Switch
        onCheckedChange={onCheckedChange}
        data-testid="switch"
      />
    )

    const switchElement = screen.getByTestId('switch')
    await user.click(switchElement)

    expect(onCheckedChange).toHaveBeenCalledWith(true)

    await user.click(switchElement)
    expect(onCheckedChange).toHaveBeenCalledWith(false)
  })

  it('supports different variants', () => {
    const { rerender } = render(<Switch variant="terminal" data-testid="switch" />)

    let switchElement = screen.getByTestId('switch')
    expect(switchElement).toHaveClass(
      'data-[state=checked]:bg-matrix-green-100',
      'data-[state=unchecked]:bg-matrix-green-100/20',
      'hover:shadow-glow-green',
      'border-matrix-green-100/30'
    )

    rerender(<Switch variant="error" data-testid="switch" />)

    switchElement = screen.getByTestId('switch')
    expect(switchElement).toHaveClass(
      'data-[state=checked]:bg-red-500',
      'data-[state=unchecked]:bg-red-500/30',
      'shadow-glow-red',
      'border-red-500/50'
    )

    rerender(<Switch variant="success" data-testid="switch" />)

    switchElement = screen.getByTestId('switch')
    expect(switchElement).toHaveClass(
      'data-[state=checked]:bg-matrix-green-100',
      'data-[state=unchecked]:bg-matrix-green-100/30',
      'shadow-glow-green-soft',
      'hover:shadow-glow-green',
      'border-matrix-green-100/30'
    )
  })

  it('supports different sizes', () => {
    const { rerender } = render(<Switch size="sm" data-testid="switch" />)

    let switchElement = screen.getByTestId('switch')
    expect(switchElement).toHaveClass('h-5', 'w-9')

    rerender(<Switch size="lg" data-testid="switch" />)

    switchElement = screen.getByTestId('switch')
    expect(switchElement).toHaveClass('h-7', 'w-12')
  })

  it('renders thumb with correct classes', () => {
    render(<Switch data-testid="switch" />)

    const switchElement = screen.getByTestId('switch')
    const thumb = switchElement.querySelector('[data-state]')

    expect(thumb).toBeInTheDocument()
    expect(thumb).toHaveClass(
      'pointer-events-none',
      'block',
      'h-5',
      'w-5',
      'rounded-full',
      'shadow-lg',
      'ring-0',
      'transition-transform',
      'data-[state=checked]:translate-x-5',
      'data-[state=unchecked]:translate-x-0'
    )
  })

  it('thumb has different sizes based on switch size', () => {
    const { rerender } = render(<Switch size="sm" data-testid="switch" />)

    let switchElement = screen.getByTestId('switch')
    let thumb = switchElement.querySelector('[data-state]')
    expect(thumb).toHaveClass(
      'h-4',
      'w-4',
      'data-[state=checked]:translate-x-4'
    )

    rerender(<Switch size="lg" data-testid="switch" />)

    switchElement = screen.getByTestId('switch')
    thumb = switchElement.querySelector('[data-state]')
    expect(thumb).toHaveClass(
      'h-6',
      'w-6',
      'data-[state=checked]:translate-x-5'
    )
  })

  it('can be disabled', () => {
    render(<Switch disabled data-testid="switch" />)

    const switchElement = screen.getByTestId('switch')
    expect(switchElement).toBeDisabled()
    expect(switchElement).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50')
  })

  it('cannot be toggled when disabled', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(
      <Switch
        disabled
        onCheckedChange={onCheckedChange}
        data-testid="switch"
      />
    )

    const switchElement = screen.getByTestId('switch')
    await user.click(switchElement)

    expect(onCheckedChange).not.toHaveBeenCalled()
    expect(switchElement).not.toBeChecked()
  })

  it('accepts custom className', () => {
    render(<Switch className="custom-switch" data-testid="switch" />)

    const switchElement = screen.getByTestId('switch')
    expect(switchElement).toHaveClass('custom-switch')
    expect(switchElement).toHaveClass('peer') // should still have base classes
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(<Switch ref={ref} data-testid="switch" />)

    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('supports accessibility attributes', () => {
    render(
      <Switch
        aria-label="Toggle notifications"
        aria-describedby="switch-description"
        data-testid="switch"
      />
    )

    const switchElement = screen.getByTestId('switch')
    expect(switchElement).toHaveAttribute('aria-label', 'Toggle notifications')
    expect(switchElement).toHaveAttribute('aria-describedby', 'switch-description')
  })

  it('works with form labels', async () => {
    const user = userEvent.setup()

    render(
      <div>
        <label htmlFor="notifications-switch">
          Enable Notifications
        </label>
        <Switch id="notifications-switch" data-testid="switch" />
      </div>
    )

    const label = screen.getByText('Enable Notifications')
    const switchElement = screen.getByTestId('switch')

    await user.click(label)
    expect(switchElement).toBeChecked()
  })

  it('supports keyboard interaction', async () => {
    const user = userEvent.setup()

    render(<Switch data-testid="switch" />)

    const switchElement = screen.getByTestId('switch')

    // Focus the switch
    switchElement.focus()
    expect(switchElement).toHaveFocus()

    // Test that keyboard navigation doesn't cause errors
    // Note: Radix Switch handles keyboard interaction internally
    // so we mainly test that focus works and no errors occur
    await user.keyboard('{Tab}')

    // The switch should be focusable and accessible via keyboard
    expect(switchElement).toHaveAttribute('role', 'switch')
    expect(switchElement).toHaveAttribute('type', 'button')
  })

  it('maintains state correctly during rapid clicking', async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()

    render(
      <Switch
        onCheckedChange={onCheckedChange}
        data-testid="switch"
      />
    )

    const switchElement = screen.getByTestId('switch')

    // Rapid clicks
    await user.click(switchElement)
    await user.click(switchElement)
    await user.click(switchElement)

    expect(onCheckedChange).toHaveBeenCalledTimes(3)
    expect(onCheckedChange).toHaveBeenNthCalledWith(1, true)
    expect(onCheckedChange).toHaveBeenNthCalledWith(2, false)
    expect(onCheckedChange).toHaveBeenNthCalledWith(3, true)
    expect(switchElement).toBeChecked()
  })

  it('has proper role and aria attributes', () => {
    render(<Switch data-testid="switch" />)

    const switchElement = screen.getByTestId('switch')
    expect(switchElement).toHaveAttribute('role', 'switch')
    expect(switchElement).toHaveAttribute('type', 'button')
  })
})