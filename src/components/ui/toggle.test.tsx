import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toggle, ToggleGroup, ToggleGroupItem } from './toggle'

describe('Toggle', () => {
  it('renders toggle button correctly', () => {
    render(<Toggle data-testid="toggle">Toggle me</Toggle>)

    const toggle = screen.getByTestId('toggle')
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveAttribute('type', 'button')
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
  })

  it('toggles on click', async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()

    render(
      <Toggle onPressedChange={onPressedChange} data-testid="toggle">
        Toggle me
      </Toggle>
    )

    const toggle = screen.getByTestId('toggle')

    // Initially not pressed
    expect(toggle).toHaveAttribute('aria-pressed', 'false')
    expect(toggle).toHaveAttribute('data-state', 'off')

    // Click to toggle on
    await user.click(toggle)

    expect(onPressedChange).toHaveBeenCalledWith(true)
    await waitFor(() => {
      expect(toggle).toHaveAttribute('aria-pressed', 'true')
      expect(toggle).toHaveAttribute('data-state', 'on')
    })

    // Click to toggle off
    await user.click(toggle)

    expect(onPressedChange).toHaveBeenCalledWith(false)
    await waitFor(() => {
      expect(toggle).toHaveAttribute('aria-pressed', 'false')
      expect(toggle).toHaveAttribute('data-state', 'off')
    })
  })

  it('supports controlled state', async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()

    const { rerender } = render(
      <Toggle pressed={false} onPressedChange={onPressedChange} data-testid="toggle">
        Toggle me
      </Toggle>
    )

    const toggle = screen.getByTestId('toggle')
    expect(toggle).toHaveAttribute('aria-pressed', 'false')

    // Click toggle
    await user.click(toggle)
    expect(onPressedChange).toHaveBeenCalledWith(true)

    // Update with new pressed state
    rerender(
      <Toggle pressed={true} onPressedChange={onPressedChange} data-testid="toggle">
        Toggle me
      </Toggle>
    )

    expect(toggle).toHaveAttribute('aria-pressed', 'true')
  })

  it('renders with correct default classes', () => {
    render(<Toggle data-testid="toggle">Toggle me</Toggle>)

    const toggle = screen.getByTestId('toggle')
    expect(toggle).toHaveClass(
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-md',
      'text-sm',
      'font-medium',
      'ring-offset-background',
      'transition-colors',
      'hover:bg-muted',
      'hover:text-muted-foreground',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2',
      'disabled:pointer-events-none',
      'disabled:opacity-50',
      'data-[state=on]:bg-accent',
      'data-[state=on]:text-accent-foreground'
    )
  })

  it('supports different variants', () => {
    const { rerender } = render(
      <Toggle variant="terminal" data-testid="toggle">
        Toggle me
      </Toggle>
    )

    const toggle = screen.getByTestId('toggle')
    expect(toggle).toHaveClass(
      'border-2',
      'border-matrix-green-100',
      'bg-matrix-black',
      'text-matrix-green-100',
      'hover:bg-matrix-green-100/10',
      'hover:shadow-glow-green-soft',
      'data-[state=on]:bg-matrix-green-100/20',
      'data-[state=on]:shadow-glow-green',
      'font-mono'
    )

    rerender(
      <Toggle variant="error" data-testid="toggle">
        Toggle me
      </Toggle>
    )

    expect(toggle).toHaveClass(
      'border-2',
      'border-red-500',
      'bg-red-950/50',
      'text-red-100',
      'hover:bg-red-500/10',
      'hover:shadow-glow-red',
      'data-[state=on]:bg-red-500/20',
      'data-[state=on]:shadow-glow-red'
    )
  })

  it('supports different sizes', () => {
    const { rerender } = render(
      <Toggle size="sm" data-testid="toggle">
        Toggle me
      </Toggle>
    )

    const toggle = screen.getByTestId('toggle')
    expect(toggle).toHaveClass('h-9', 'px-2.5')

    rerender(
      <Toggle size="lg" data-testid="toggle">
        Toggle me
      </Toggle>
    )

    expect(toggle).toHaveClass('h-11', 'px-5')
  })

  it('supports disabled state', async () => {
    const user = userEvent.setup()
    const onPressedChange = vi.fn()

    render(
      <Toggle disabled onPressedChange={onPressedChange} data-testid="toggle">
        Toggle me
      </Toggle>
    )

    const toggle = screen.getByTestId('toggle')
    expect(toggle).toBeDisabled()

    await user.click(toggle)
    expect(onPressedChange).not.toHaveBeenCalled()
  })

  it('accepts custom className', () => {
    render(
      <Toggle className="custom-toggle" data-testid="toggle">
        Toggle me
      </Toggle>
    )

    const toggle = screen.getByTestId('toggle')
    expect(toggle).toHaveClass('custom-toggle')
  })

  it('forwards ref correctly', () => {
    const toggleRef = { current: null }

    render(<Toggle ref={toggleRef}>Toggle me</Toggle>)

    expect(toggleRef.current).toBeInstanceOf(HTMLButtonElement)
  })
})

describe('ToggleGroup', () => {
  it('renders toggle group correctly', () => {
    render(
      <ToggleGroup type="single" data-testid="toggle-group">
        <ToggleGroupItem value="bold" data-testid="toggle-bold">
          Bold
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" data-testid="toggle-italic">
          Italic
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const group = screen.getByTestId('toggle-group')
    expect(group).toBeInTheDocument()
    expect(group).toHaveAttribute('role', 'group')

    expect(screen.getByTestId('toggle-bold')).toBeInTheDocument()
    expect(screen.getByTestId('toggle-italic')).toBeInTheDocument()
  })

  it('supports single selection', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <ToggleGroup type="single" onValueChange={onValueChange}>
        <ToggleGroupItem value="bold" data-testid="toggle-bold">
          Bold
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" data-testid="toggle-italic">
          Italic
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const boldToggle = screen.getByTestId('toggle-bold')
    const italicToggle = screen.getByTestId('toggle-italic')

    // Click bold
    await user.click(boldToggle)
    expect(onValueChange).toHaveBeenCalledWith('bold')

    await waitFor(() => {
      expect(boldToggle).toHaveAttribute('data-state', 'on')
      expect(italicToggle).toHaveAttribute('data-state', 'off')
    })

    // Click italic (should deselect bold)
    await user.click(italicToggle)
    expect(onValueChange).toHaveBeenCalledWith('italic')

    await waitFor(() => {
      expect(boldToggle).toHaveAttribute('data-state', 'off')
      expect(italicToggle).toHaveAttribute('data-state', 'on')
    })
  })

  it('supports multiple selection', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <ToggleGroup type="multiple" onValueChange={onValueChange}>
        <ToggleGroupItem value="bold" data-testid="toggle-bold">
          Bold
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" data-testid="toggle-italic">
          Italic
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const boldToggle = screen.getByTestId('toggle-bold')
    const italicToggle = screen.getByTestId('toggle-italic')

    // Click bold
    await user.click(boldToggle)
    expect(onValueChange).toHaveBeenCalledWith(['bold'])

    await waitFor(() => {
      expect(boldToggle).toHaveAttribute('data-state', 'on')
    })

    // Click italic (should keep bold selected)
    await user.click(italicToggle)
    expect(onValueChange).toHaveBeenCalledWith(['bold', 'italic'])

    await waitFor(() => {
      expect(boldToggle).toHaveAttribute('data-state', 'on')
      expect(italicToggle).toHaveAttribute('data-state', 'on')
    })
  })

  it('renders with correct default classes', () => {
    render(
      <ToggleGroup type="single" data-testid="toggle-group">
        <ToggleGroupItem value="bold" data-testid="toggle-item">
          Bold
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const group = screen.getByTestId('toggle-group')
    expect(group).toHaveClass(
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-md',
      'border-2'
    )

    const item = screen.getByTestId('toggle-item')
    expect(item).toHaveClass(
      'inline-flex',
      'items-center',
      'justify-center',
      'text-sm',
      'font-medium',
      'ring-offset-background',
      'transition-colors',
      'hover:bg-muted',
      'hover:text-muted-foreground',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2',
      'disabled:pointer-events-none',
      'disabled:opacity-50',
      'data-[state=on]:bg-accent',
      'data-[state=on]:text-accent-foreground'
    )
  })

  it('supports different variants', () => {
    render(
      <ToggleGroup type="single" variant="terminal" data-testid="toggle-group">
        <ToggleGroupItem value="bold" data-testid="toggle-item">
          Bold
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const group = screen.getByTestId('toggle-group')
    expect(group).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-black',
      'shadow-glow-green'
    )

    const item = screen.getByTestId('toggle-item')
    expect(item).toHaveClass(
      'text-matrix-green-100',
      'hover:bg-matrix-green-100/10',
      'hover:shadow-glow-green-soft',
      'data-[state=on]:bg-matrix-green-100/20',
      'data-[state=on]:shadow-glow-green',
      'font-mono'
    )
  })

  it('supports different sizes', () => {
    render(
      <ToggleGroup type="single" size="sm" data-testid="toggle-group">
        <ToggleGroupItem value="bold" data-testid="toggle-item">
          Bold
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const item = screen.getByTestId('toggle-item')
    expect(item).toHaveClass('h-9', 'px-2.5')
  })

  it('supports disabled items', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <ToggleGroup type="single" onValueChange={onValueChange}>
        <ToggleGroupItem value="bold" disabled data-testid="toggle-disabled">
          Bold
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" data-testid="toggle-enabled">
          Italic
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const disabledToggle = screen.getByTestId('toggle-disabled')
    const enabledToggle = screen.getByTestId('toggle-enabled')

    expect(disabledToggle).toBeDisabled()
    expect(enabledToggle).not.toBeDisabled()

    await user.click(disabledToggle)
    expect(onValueChange).not.toHaveBeenCalled()

    await user.click(enabledToggle)
    expect(onValueChange).toHaveBeenCalledWith('italic')
  })

  it('accepts custom className', () => {
    render(
      <ToggleGroup type="single" className="custom-group" data-testid="toggle-group">
        <ToggleGroupItem value="bold" className="custom-item" data-testid="toggle-item">
          Bold
        </ToggleGroupItem>
      </ToggleGroup>
    )

    expect(screen.getByTestId('toggle-group')).toHaveClass('custom-group')
    expect(screen.getByTestId('toggle-item')).toHaveClass('custom-item')
  })

  it('forwards ref correctly', () => {
    const groupRef = { current: null }
    const itemRef = { current: null }

    render(
      <ToggleGroup ref={groupRef} type="single">
        <ToggleGroupItem ref={itemRef} value="bold">
          Bold
        </ToggleGroupItem>
      </ToggleGroup>
    )

    expect(groupRef.current).toBeInstanceOf(HTMLDivElement)
    expect(itemRef.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('supports controlled state for single type', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    const { rerender } = render(
      <ToggleGroup type="single" value="" onValueChange={onValueChange}>
        <ToggleGroupItem value="bold" data-testid="toggle-bold">
          Bold
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const boldToggle = screen.getByTestId('toggle-bold')
    expect(boldToggle).toHaveAttribute('data-state', 'off')

    await user.click(boldToggle)
    expect(onValueChange).toHaveBeenCalledWith('bold')

    rerender(
      <ToggleGroup type="single" value="bold" onValueChange={onValueChange}>
        <ToggleGroupItem value="bold" data-testid="toggle-bold">
          Bold
        </ToggleGroupItem>
      </ToggleGroup>
    )

    expect(boldToggle).toHaveAttribute('data-state', 'on')
  })

  it('supports controlled state for multiple type', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    const { rerender } = render(
      <ToggleGroup type="multiple" value={[]} onValueChange={onValueChange}>
        <ToggleGroupItem value="bold" data-testid="toggle-bold">
          Bold
        </ToggleGroupItem>
      </ToggleGroup>
    )

    const boldToggle = screen.getByTestId('toggle-bold')
    expect(boldToggle).toHaveAttribute('data-state', 'off')

    await user.click(boldToggle)
    expect(onValueChange).toHaveBeenCalledWith(['bold'])

    rerender(
      <ToggleGroup type="multiple" value={['bold']} onValueChange={onValueChange}>
        <ToggleGroupItem value="bold" data-testid="toggle-bold">
          Bold
        </ToggleGroupItem>
      </ToggleGroup>
    )

    expect(boldToggle).toHaveAttribute('data-state', 'on')
  })
})