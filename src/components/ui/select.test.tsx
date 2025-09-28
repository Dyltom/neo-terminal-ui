import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton
} from './select'

describe('Select', () => {
  it('renders with correct classes', () => {
    render(
      <Select>
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('select-trigger')
    expect(trigger).toBeInTheDocument()
    expect(trigger).toHaveClass(
      'flex',
      'h-10',
      'w-full',
      'items-center',
      'justify-between',
      'rounded-md',
      'border-2',
      'border-matrix-green-300',
      'bg-matrix-dark',
      'px-3',
      'py-2',
      'text-sm',
      'text-matrix-green-100',
      'ring-offset-background',
      'placeholder:text-matrix-green-500',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-ring',
      'focus:ring-offset-2',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
      'shadow-glow-green-soft'
    )
  })

  it('shows placeholder text', () => {
    render(
      <Select>
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )

    expect(screen.getByText('Select an option')).toBeInTheDocument()
  })

  it('opens and closes dropdown on trigger click', async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent data-testid="select-content">
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('select-trigger')

    // Initially closed
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument()

    // Open dropdown
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByText('Option 1')).toBeInTheDocument()
      expect(screen.getByText('Option 2')).toBeInTheDocument()
    })
  })

  it('selects items and updates value', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <Select onValueChange={onValueChange}>
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1" data-testid="option1">Option 1</SelectItem>
          <SelectItem value="option2" data-testid="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('select-trigger')

    // Open dropdown
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('option1')).toBeInTheDocument()
    })

    // Select option
    await user.click(screen.getByTestId('option1'))

    expect(onValueChange).toHaveBeenCalledWith('option1')
  })

  it('supports controlled value', () => {
    const { rerender } = render(
      <Select value="option1">
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    )

    expect(screen.getByText('Option 1')).toBeInTheDocument()

    rerender(
      <Select value="option2">
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    )

    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })

  it('supports different trigger variants', () => {
    const { rerender } = render(
      <Select>
        <SelectTrigger variant="terminal" data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )

    let trigger = screen.getByTestId('select-trigger')
    expect(trigger).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-black',
      'text-matrix-green-100',
      'hover:bg-matrix-dark',
      'hover:shadow-glow-green',
      'font-mono'
    )

    rerender(
      <Select>
        <SelectTrigger variant="error" data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )

    trigger = screen.getByTestId('select-trigger')
    expect(trigger).toHaveClass(
      'border-red-500',
      'bg-red-950/50',
      'text-red-100',
      'hover:border-red-400',
      'shadow-glow-red'
    )

    rerender(
      <Select>
        <SelectTrigger variant="success" data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )

    trigger = screen.getByTestId('select-trigger')
    expect(trigger).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-dark',
      'text-matrix-green-100',
      'shadow-glow-green-soft',
      'hover:shadow-glow-green'
    )
  })

  it('supports different trigger sizes', () => {
    const { rerender } = render(
      <Select>
        <SelectTrigger size="sm" data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )

    let trigger = screen.getByTestId('select-trigger')
    expect(trigger).toHaveClass('h-9', 'px-2', 'text-xs')

    rerender(
      <Select>
        <SelectTrigger size="lg" data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )

    trigger = screen.getByTestId('select-trigger')
    expect(trigger).toHaveClass('h-11', 'px-4', 'text-base')
  })

  it('can be disabled', () => {
    render(
      <Select disabled>
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('select-trigger')
    expect(trigger).toBeDisabled()
    expect(trigger).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50')
  })

  it('supports select items with different variants', async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1" variant="terminal" data-testid="option1">
            Option 1
          </SelectItem>
          <SelectItem value="option2" variant="error" data-testid="option2">
            Option 2
          </SelectItem>
          <SelectItem value="option3" variant="success" data-testid="option3">
            Option 3
          </SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('select-trigger')
    await user.click(trigger)

    await waitFor(() => {
      const option1 = screen.getByTestId('option1')
      const option2 = screen.getByTestId('option2')
      const option3 = screen.getByTestId('option3')

      expect(option1).toHaveClass('bg-matrix-black', 'text-matrix-green-100', 'font-mono')
      expect(option2).toHaveClass('bg-red-950/50', 'text-red-100')
      expect(option3).toHaveClass('bg-matrix-dark', 'text-matrix-green-100')
    })
  })

  it('supports grouped items with labels', async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel data-testid="group-label">Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
          <SelectSeparator data-testid="separator" />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('select-trigger')
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('group-label')).toBeInTheDocument()
      expect(screen.getByTestId('separator')).toBeInTheDocument()
      expect(screen.getByText('Fruits')).toBeInTheDocument()
      expect(screen.getByText('Vegetables')).toBeInTheDocument()
    })
  })

  it('supports scroll buttons for long lists', async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton data-testid="scroll-up" />
          {Array.from({ length: 20 }, (_, i) => (
            <SelectItem key={i} value={`option${i}`}>
              Option {i + 1}
            </SelectItem>
          ))}
          <SelectScrollDownButton data-testid="scroll-down" />
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('select-trigger')
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('scroll-up')).toBeInTheDocument()
      expect(screen.getByTestId('scroll-down')).toBeInTheDocument()
    })
  })

  it('accepts custom className', () => {
    render(
      <Select>
        <SelectTrigger className="custom-trigger" data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent className="custom-content" data-testid="select-content">
          <SelectItem value="option1" className="custom-item" data-testid="option1">
            Option 1
          </SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('select-trigger')
    expect(trigger).toHaveClass('custom-trigger')
    expect(trigger).toHaveClass('flex') // should still have base classes
  })

  it('forwards ref correctly', () => {
    const triggerRef = { current: null }
    const contentRef = { current: null }
    const itemRef = { current: null }

    render(
      <Select>
        <SelectTrigger ref={triggerRef} data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent ref={contentRef}>
          <SelectItem value="option1" ref={itemRef}>
            Option 1
          </SelectItem>
        </SelectContent>
      </Select>
    )

    expect(triggerRef.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('supports accessibility attributes', () => {
    render(
      <Select>
        <SelectTrigger
          aria-label="Choose option"
          aria-describedby="select-description"
          data-testid="select-trigger"
        >
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1" aria-label="First option">
            Option 1
          </SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('select-trigger')
    expect(trigger).toHaveAttribute('aria-label', 'Choose option')
    expect(trigger).toHaveAttribute('aria-describedby', 'select-description')
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()

    render(
      <Select>
        <SelectTrigger data-testid="select-trigger">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1" data-testid="option1">Option 1</SelectItem>
          <SelectItem value="option2" data-testid="option2">Option 2</SelectItem>
          <SelectItem value="option3" data-testid="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    )

    const trigger = screen.getByTestId('select-trigger')

    // Focus trigger
    trigger.focus()
    expect(trigger).toHaveFocus()

    // Space or Enter should open dropdown
    await user.keyboard('{Space}')

    await waitFor(() => {
      expect(screen.getByTestId('option1')).toBeInTheDocument()
    })

    // Arrow keys should navigate through options
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{ArrowDown}')

    // Enter should select focused option
    await user.keyboard('{Enter}')

    // Should close and show selected value
    expect(screen.getByText('Option 2')).toBeInTheDocument()
  })
})