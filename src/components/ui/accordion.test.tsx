import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion'

describe('Accordion', () => {
  it('renders accordion items correctly', () => {
    render(
      <Accordion type="single" collapsible data-testid="accordion">
        <AccordionItem value="item-1" data-testid="accordion-item">
          <AccordionTrigger data-testid="accordion-trigger">
            Section 1
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByTestId('accordion')).toBeInTheDocument()
    expect(screen.getByTestId('accordion-item')).toBeInTheDocument()
    expect(screen.getByTestId('accordion-trigger')).toBeInTheDocument()
    expect(screen.queryByTestId('accordion-content')).not.toBeInTheDocument()
  })

  it('expands and collapses on trigger click', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="accordion-trigger">
            Section 1
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByTestId('accordion-trigger')

    // Initially content should be hidden
    expect(screen.queryByTestId('accordion-content')).not.toBeInTheDocument()

    // Click to expand
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('accordion-content')).toBeInTheDocument()
    })

    // Click to collapse
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.queryByTestId('accordion-content')).not.toBeInTheDocument()
    })
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="accordion-trigger-1">
            Section 1
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content-1">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger data-testid="accordion-trigger-2">
            Section 2
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content-2">
            Content for section 2
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger1 = screen.getByTestId('accordion-trigger-1')
    const trigger2 = screen.getByTestId('accordion-trigger-2')

    // Focus first trigger
    trigger1.focus()

    // Navigate with arrow keys
    await user.keyboard('{ArrowDown}')
    expect(trigger2).toHaveFocus()

    await user.keyboard('{ArrowUp}')
    expect(trigger1).toHaveFocus()

    // Expand with Enter
    await user.keyboard('{Enter}')

    await waitFor(() => {
      expect(screen.getByTestId('accordion-content-1')).toBeInTheDocument()
    })

    // Expand with Space
    trigger2.focus()
    await user.keyboard(' ')

    await waitFor(() => {
      expect(screen.getByTestId('accordion-content-2')).toBeInTheDocument()
    })
  })

  it('supports multiple type accordion', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="accordion-trigger-1">
            Section 1
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content-1">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger data-testid="accordion-trigger-2">
            Section 2
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content-2">
            Content for section 2
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    // Expand both items
    await user.click(screen.getByTestId('accordion-trigger-1'))
    await user.click(screen.getByTestId('accordion-trigger-2'))

    await waitFor(() => {
      expect(screen.getByTestId('accordion-content-1')).toBeInTheDocument()
      expect(screen.getByTestId('accordion-content-2')).toBeInTheDocument()
    })
  })

  it('renders with correct default classes', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" data-testid="accordion-item">
          <AccordionTrigger data-testid="accordion-trigger">
            Section 1
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content-hidden">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const item = screen.getByTestId('accordion-item')
    expect(item).toHaveClass(
      'border-b-2',
      'border-matrix-green-300/30'
    )

    const trigger = screen.getByTestId('accordion-trigger')
    expect(trigger).toHaveClass(
      'flex',
      'flex-1',
      'items-center',
      'justify-between',
      'py-4',
      'font-medium',
      'transition-all',
      'hover:underline'
    )
  })

  it('supports different variants', () => {
    const { rerender } = render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" variant="terminal" data-testid="accordion-item">
          <AccordionTrigger variant="terminal" data-testid="accordion-trigger">
            Section 1
          </AccordionTrigger>
          <AccordionContent variant="terminal" data-testid="accordion-content-hidden">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const item = screen.getByTestId('accordion-item')
    expect(item).toHaveClass(
      'border-matrix-green-100/30',
      'bg-matrix-black/50'
    )

    const trigger = screen.getByTestId('accordion-trigger')
    expect(trigger).toHaveClass(
      'text-matrix-green-100',
      'hover:text-matrix-green-100',
      'hover:shadow-glow-green-soft',
      'font-mono'
    )

    rerender(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" variant="error" data-testid="accordion-item">
          <AccordionTrigger variant="error" data-testid="accordion-trigger">
            Section 1
          </AccordionTrigger>
          <AccordionContent variant="error" data-testid="accordion-content-hidden">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(item).toHaveClass(
      'border-red-500/30',
      'bg-red-950/20'
    )

    expect(trigger).toHaveClass(
      'text-red-100',
      'hover:text-red-100',
      'hover:shadow-glow-red'
    )
  })

  it('supports controlled accordion', async () => {
    const onValueChange = vi.fn()

    const ControlledAccordion = () => {
      const [value, setValue] = React.useState<string | undefined>(undefined)

      const handleValueChange = (newValue: string | undefined) => {
        setValue(newValue)
        onValueChange(newValue)
      }

      return (
        <Accordion type="single" value={value} onValueChange={handleValueChange}>
          <AccordionItem value="item-1">
            <AccordionTrigger data-testid="accordion-trigger">
              Section 1
            </AccordionTrigger>
            <AccordionContent data-testid="accordion-content">
              Content for section 1
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )
    }

    const user = userEvent.setup()
    render(<ControlledAccordion />)

    await user.click(screen.getByTestId('accordion-trigger'))

    expect(onValueChange).toHaveBeenCalledWith('item-1')
    await waitFor(() => {
      expect(screen.getByTestId('accordion-content')).toBeInTheDocument()
    })
  })

  it('accepts custom className', () => {
    render(
      <Accordion type="single" collapsible className="custom-accordion">
        <AccordionItem value="item-1" className="custom-item" data-testid="accordion-item">
          <AccordionTrigger className="custom-trigger" data-testid="accordion-trigger">
            Section 1
          </AccordionTrigger>
          <AccordionContent className="custom-content" data-testid="accordion-content-hidden">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByTestId('accordion-item')).toHaveClass('custom-item')
    expect(screen.getByTestId('accordion-trigger')).toHaveClass('custom-trigger')
  })

  it('forwards ref correctly', () => {
    const accordionRef = { current: null }
    const itemRef = { current: null }
    const triggerRef = { current: null }
    const contentRef = { current: null }

    render(
      <Accordion ref={accordionRef} type="single" collapsible>
        <AccordionItem ref={itemRef} value="item-1">
          <AccordionTrigger ref={triggerRef}>
            Section 1
          </AccordionTrigger>
          <AccordionContent ref={contentRef}>
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(accordionRef.current).toBeInstanceOf(HTMLDivElement)
    expect(itemRef.current).toBeInstanceOf(HTMLDivElement)
    expect(triggerRef.current).toBeInstanceOf(HTMLButtonElement)
    expect(contentRef.current).toBeInstanceOf(HTMLDivElement)
  })

  it('supports disabled state', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger disabled data-testid="accordion-trigger">
            Section 1 (Disabled)
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByTestId('accordion-trigger')
    expect(trigger).toBeDisabled()

    // Try clicking disabled trigger
    await user.click(trigger)

    // Content should remain hidden
    expect(screen.queryByTestId('accordion-content')).not.toBeInTheDocument()
  })

  it('supports accessibility attributes', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            aria-label="Toggle section 1"
            data-testid="accordion-trigger"
          >
            Section 1
          </AccordionTrigger>
          <AccordionContent
            aria-label="Section 1 content"
            data-testid="accordion-content-hidden"
          >
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByTestId('accordion-trigger')
    expect(trigger).toHaveAttribute('aria-label', 'Toggle section 1')
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders chevron icon correctly', async () => {
    const user = userEvent.setup()

    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger data-testid="accordion-trigger">
            Section 1
          </AccordionTrigger>
          <AccordionContent data-testid="accordion-content">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByTestId('accordion-trigger')
    const chevron = trigger.querySelector('svg')

    expect(chevron).toBeInTheDocument()
    expect(chevron).toHaveClass('h-4', 'w-4', 'shrink-0', 'transition-transform', 'duration-200')

    // Click to expand
    await user.click(trigger)

    await waitFor(() => {
      expect(chevron).toHaveClass('rotate-180')
    })
  })

  it('supports default value', () => {
    render(
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent data-testid="accordion-content">
            Content for section 1
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    // Content should be visible by default
    expect(screen.getByTestId('accordion-content')).toBeInTheDocument()
  })
})