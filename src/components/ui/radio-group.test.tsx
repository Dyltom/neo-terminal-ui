import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RadioGroup, RadioGroupItem } from './radio-group'

describe('RadioGroup', () => {
  it('renders with correct classes', () => {
    render(
      <RadioGroup data-testid="radio-group">
        <RadioGroupItem value="option1" data-testid="radio-item-1" />
        <RadioGroupItem value="option2" data-testid="radio-item-2" />
      </RadioGroup>
    )

    const radioGroup = screen.getByTestId('radio-group')
    expect(radioGroup).toBeInTheDocument()
    expect(radioGroup).toHaveClass('grid', 'gap-2')
  })

  it('renders radio items with correct default classes', () => {
    render(
      <RadioGroup data-testid="radio-group">
        <RadioGroupItem value="option1" data-testid="radio-item" />
      </RadioGroup>
    )

    const radioItem = screen.getByTestId('radio-item')
    expect(radioItem).toBeInTheDocument()
    expect(radioItem).toHaveClass(
      'aspect-square',
      'h-4',
      'w-4',
      'rounded-full',
      'border-2',
      'border-matrix-green-300',
      'bg-matrix-dark',
      'text-matrix-green-100',
      'ring-offset-background',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50',
      'data-[state=checked]:bg-matrix-green-500',
      'data-[state=checked]:border-matrix-green-100',
      'shadow-glow-green-soft'
    )
  })

  it('allows selecting radio items', async () => {
    const user = userEvent.setup()
    const onValueChange = vi.fn()

    render(
      <RadioGroup onValueChange={onValueChange} data-testid="radio-group">
        <RadioGroupItem value="option1" data-testid="radio-item-1" />
        <RadioGroupItem value="option2" data-testid="radio-item-2" />
      </RadioGroup>
    )

    const radioItem1 = screen.getByTestId('radio-item-1')
    const radioItem2 = screen.getByTestId('radio-item-2')

    await user.click(radioItem1)
    expect(onValueChange).toHaveBeenCalledWith('option1')

    await user.click(radioItem2)
    expect(onValueChange).toHaveBeenCalledWith('option2')
  })

  it('supports controlled value', () => {
    const { rerender } = render(
      <RadioGroup value="option1" data-testid="radio-group">
        <RadioGroupItem value="option1" data-testid="radio-item-1" />
        <RadioGroupItem value="option2" data-testid="radio-item-2" />
      </RadioGroup>
    )

    let radioItem1 = screen.getByTestId('radio-item-1')
    let radioItem2 = screen.getByTestId('radio-item-2')

    expect(radioItem1).toBeChecked()
    expect(radioItem2).not.toBeChecked()

    rerender(
      <RadioGroup value="option2" data-testid="radio-group">
        <RadioGroupItem value="option1" data-testid="radio-item-1" />
        <RadioGroupItem value="option2" data-testid="radio-item-2" />
      </RadioGroup>
    )

    radioItem1 = screen.getByTestId('radio-item-1')
    radioItem2 = screen.getByTestId('radio-item-2')

    expect(radioItem1).not.toBeChecked()
    expect(radioItem2).toBeChecked()
  })

  it('supports different variants', () => {
    const { rerender } = render(
      <RadioGroup data-testid="radio-group">
        <RadioGroupItem value="option1" variant="terminal" data-testid="radio-item" />
      </RadioGroup>
    )

    let radioItem = screen.getByTestId('radio-item')
    expect(radioItem).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-black',
      'data-[state=checked]:bg-matrix-green-100',
      'data-[state=checked]:text-matrix-black',
      'hover:shadow-glow-green',
      'font-mono'
    )

    rerender(
      <RadioGroup data-testid="radio-group">
        <RadioGroupItem value="option1" variant="error" data-testid="radio-item" />
      </RadioGroup>
    )

    radioItem = screen.getByTestId('radio-item')
    expect(radioItem).toHaveClass(
      'border-red-500',
      'bg-red-950/50',
      'data-[state=checked]:bg-red-500',
      'data-[state=checked]:text-red-950',
      'shadow-glow-red'
    )

    rerender(
      <RadioGroup data-testid="radio-group">
        <RadioGroupItem value="option1" variant="success" data-testid="radio-item" />
      </RadioGroup>
    )

    radioItem = screen.getByTestId('radio-item')
    expect(radioItem).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-dark',
      'data-[state=checked]:bg-matrix-green-100',
      'data-[state=checked]:text-matrix-dark',
      'shadow-glow-green-soft',
      'hover:shadow-glow-green'
    )
  })

  it('supports different sizes', () => {
    const { rerender } = render(
      <RadioGroup data-testid="radio-group">
        <RadioGroupItem value="option1" size="sm" data-testid="radio-item" />
      </RadioGroup>
    )

    let radioItem = screen.getByTestId('radio-item')
    expect(radioItem).toHaveClass('h-3', 'w-3')

    rerender(
      <RadioGroup data-testid="radio-group">
        <RadioGroupItem value="option1" size="lg" data-testid="radio-item" />
      </RadioGroup>
    )

    radioItem = screen.getByTestId('radio-item')
    expect(radioItem).toHaveClass('h-5', 'w-5')
  })

  it('can be disabled', () => {
    render(
      <RadioGroup disabled data-testid="radio-group">
        <RadioGroupItem value="option1" data-testid="radio-item" />
      </RadioGroup>
    )

    const radioItem = screen.getByTestId('radio-item')
    expect(radioItem).toBeDisabled()
    expect(radioItem).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50')
  })

  it('individual items can be disabled', () => {
    render(
      <RadioGroup data-testid="radio-group">
        <RadioGroupItem value="option1" disabled data-testid="radio-item-1" />
        <RadioGroupItem value="option2" data-testid="radio-item-2" />
      </RadioGroup>
    )

    const radioItem1 = screen.getByTestId('radio-item-1')
    const radioItem2 = screen.getByTestId('radio-item-2')

    expect(radioItem1).toBeDisabled()
    expect(radioItem2).not.toBeDisabled()
  })

  it('supports different orientations', () => {
    const { rerender } = render(
      <RadioGroup orientation="horizontal" data-testid="radio-group">
        <RadioGroupItem value="option1" data-testid="radio-item" />
      </RadioGroup>
    )

    let radioGroup = screen.getByTestId('radio-group')
    expect(radioGroup).toHaveClass('flex', 'gap-2')

    rerender(
      <RadioGroup orientation="vertical" data-testid="radio-group">
        <RadioGroupItem value="option1" data-testid="radio-item" />
      </RadioGroup>
    )

    radioGroup = screen.getByTestId('radio-group')
    expect(radioGroup).toHaveClass('grid', 'gap-2')
  })

  it('accepts custom className', () => {
    render(
      <RadioGroup className="custom-radio-group" data-testid="radio-group">
        <RadioGroupItem value="option1" className="custom-radio-item" data-testid="radio-item" />
      </RadioGroup>
    )

    const radioGroup = screen.getByTestId('radio-group')
    const radioItem = screen.getByTestId('radio-item')

    expect(radioGroup).toHaveClass('custom-radio-group')
    expect(radioGroup).toHaveClass('grid') // should still have base classes

    expect(radioItem).toHaveClass('custom-radio-item')
    expect(radioItem).toHaveClass('aspect-square') // should still have base classes
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    const itemRef = { current: null }

    render(
      <RadioGroup ref={ref} data-testid="radio-group">
        <RadioGroupItem value="option1" ref={itemRef} data-testid="radio-item" />
      </RadioGroup>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(itemRef.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('supports accessibility attributes', () => {
    render(
      <RadioGroup
        aria-label="Choose an option"
        aria-describedby="radio-description"
        data-testid="radio-group"
      >
        <RadioGroupItem
          value="option1"
          aria-label="Option 1"
          aria-describedby="option1-description"
          data-testid="radio-item"
        />
      </RadioGroup>
    )

    const radioGroup = screen.getByTestId('radio-group')
    const radioItem = screen.getByTestId('radio-item')

    expect(radioGroup).toHaveAttribute('aria-label', 'Choose an option')
    expect(radioGroup).toHaveAttribute('aria-describedby', 'radio-description')
    expect(radioItem).toHaveAttribute('aria-label', 'Option 1')
    expect(radioItem).toHaveAttribute('aria-describedby', 'option1-description')
  })

  it('works with form labels', async () => {
    const user = userEvent.setup()

    render(
      <div>
        <RadioGroup data-testid="radio-group">
          <div>
            <RadioGroupItem value="option1" id="option1" data-testid="radio-item-1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div>
            <RadioGroupItem value="option2" id="option2" data-testid="radio-item-2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </RadioGroup>
      </div>
    )

    const label1 = screen.getByText('Option 1')
    const label2 = screen.getByText('Option 2')
    const radioItem1 = screen.getByTestId('radio-item-1')
    const radioItem2 = screen.getByTestId('radio-item-2')

    await user.click(label1)
    expect(radioItem1).toBeChecked()
    expect(radioItem2).not.toBeChecked()

    await user.click(label2)
    expect(radioItem1).not.toBeChecked()
    expect(radioItem2).toBeChecked()
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()

    render(
      <RadioGroup data-testid="radio-group">
        <RadioGroupItem value="option1" data-testid="radio-item-1" />
        <RadioGroupItem value="option2" data-testid="radio-item-2" />
        <RadioGroupItem value="option3" data-testid="radio-item-3" />
      </RadioGroup>
    )

    const radioItem1 = screen.getByTestId('radio-item-1')
    const radioItem2 = screen.getByTestId('radio-item-2')
    const radioItem3 = screen.getByTestId('radio-item-3')

    // Focus first item
    radioItem1.focus()
    expect(radioItem1).toHaveFocus()

    // Arrow down should move to next item
    await user.keyboard('{ArrowDown}')
    expect(radioItem2).toHaveFocus()

    // Arrow down again should move to third item
    await user.keyboard('{ArrowDown}')
    expect(radioItem3).toHaveFocus()

    // Arrow down should wrap to first item
    await user.keyboard('{ArrowDown}')
    expect(radioItem1).toHaveFocus()

    // Arrow up should move to last item
    await user.keyboard('{ArrowUp}')
    expect(radioItem3).toHaveFocus()
  })

  it('only allows one selection at a time', async () => {
    const user = userEvent.setup()

    render(
      <RadioGroup data-testid="radio-group">
        <RadioGroupItem value="option1" data-testid="radio-item-1" />
        <RadioGroupItem value="option2" data-testid="radio-item-2" />
        <RadioGroupItem value="option3" data-testid="radio-item-3" />
      </RadioGroup>
    )

    const radioItem1 = screen.getByTestId('radio-item-1')
    const radioItem2 = screen.getByTestId('radio-item-2')
    const radioItem3 = screen.getByTestId('radio-item-3')

    // Select first option
    await user.click(radioItem1)
    expect(radioItem1).toBeChecked()
    expect(radioItem2).not.toBeChecked()
    expect(radioItem3).not.toBeChecked()

    // Select second option
    await user.click(radioItem2)
    expect(radioItem1).not.toBeChecked()
    expect(radioItem2).toBeChecked()
    expect(radioItem3).not.toBeChecked()

    // Select third option
    await user.click(radioItem3)
    expect(radioItem1).not.toBeChecked()
    expect(radioItem2).not.toBeChecked()
    expect(radioItem3).toBeChecked()
  })
})