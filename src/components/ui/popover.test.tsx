import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
  PopoverClose,
} from './popover'

describe('Popover', () => {
  it('renders trigger and shows content on click', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    const trigger = screen.getByTestId('popover-trigger')
    expect(trigger).toBeInTheDocument()

    // Content should not be visible initially
    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument()

    // Click trigger to show popover
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('popover-content')).toBeInTheDocument()
      expect(screen.getByText('Popover content')).toBeInTheDocument()
    })
  })

  it('hides content when trigger is clicked again', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    const trigger = screen.getByTestId('popover-trigger')

    // Open popover
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('popover-content')).toBeInTheDocument()
    })

    // Click trigger again to close
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument()
    })
  })

  it('closes when clicking outside', async () => {
    const user = userEvent.setup()

    render(
      <div>
        <button data-testid="outside-button">Outside</button>
        <Popover>
          <PopoverTrigger data-testid="popover-trigger">
            Open Popover
          </PopoverTrigger>
          <PopoverContent data-testid="popover-content">
            <p>Popover content</p>
          </PopoverContent>
        </Popover>
      </div>
    )

    const trigger = screen.getByTestId('popover-trigger')
    const outsideButton = screen.getByTestId('outside-button')

    // Open popover
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('popover-content')).toBeInTheDocument()
    })

    // Click outside to close
    await user.click(outsideButton)

    await waitFor(() => {
      expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument()
    })
  })

  it('closes when escape key is pressed', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    const trigger = screen.getByTestId('popover-trigger')

    // Open popover
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('popover-content')).toBeInTheDocument()
    })

    // Press escape to close
    await user.keyboard('{Escape}')

    await waitFor(() => {
      expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument()
    })
  })

  it('supports controlled open state', async () => {
    const onOpenChange = vi.fn()

    const { rerender } = render(
      <Popover open={false} onOpenChange={onOpenChange}>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    // Should be closed initially
    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument()

    // Open popover programmatically
    rerender(
      <Popover open={true} onOpenChange={onOpenChange}>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    await waitFor(() => {
      expect(screen.getByTestId('popover-content')).toBeInTheDocument()
    })
  })

  it('renders content with correct default classes', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    await user.click(screen.getByTestId('popover-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('popover-content')
      expect(content).toHaveClass(
        'z-50',
        'w-72',
        'rounded-md',
        'border-2',
        'p-4',
        'shadow-md',
        'outline-none',
        'data-[state=open]:animate-in',
        'data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0',
        'data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95',
        'data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2',
        'data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2',
        'data-[side=top]:slide-in-from-bottom-2'
      )
    })
  })

  it('supports different variants', async () => {
    const user = userEvent.setup()

    const { rerender } = render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent variant="terminal" data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    await user.click(screen.getByTestId('popover-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('popover-content')
      expect(content).toHaveClass(
        'border-matrix-green-100',
        'bg-matrix-black',
        'text-matrix-green-100',
        'shadow-glow-green',
        'font-mono'
      )
    })

    // Close and test error variant
    await user.keyboard('{Escape}')

    rerender(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent variant="error" data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    await user.click(screen.getByTestId('popover-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('popover-content')
      expect(content).toHaveClass(
        'border-red-500',
        'bg-red-950/50',
        'text-red-100',
        'shadow-glow-red'
      )
    })

    // Close and test success variant
    await user.keyboard('{Escape}')

    rerender(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent variant="success" data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    await user.click(screen.getByTestId('popover-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('popover-content')
      expect(content).toHaveClass(
        'border-matrix-green-100',
        'bg-matrix-dark',
        'text-matrix-green-100',
        'shadow-glow-green'
      )
    })
  })

  it('supports different sizes', async () => {
    const user = userEvent.setup()

    const { rerender } = render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent size="sm" data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    await user.click(screen.getByTestId('popover-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('popover-content')
      expect(content).toHaveClass('w-56', 'p-3')
    })

    await user.keyboard('{Escape}')

    rerender(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent size="lg" data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    await user.click(screen.getByTestId('popover-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('popover-content')
      expect(content).toHaveClass('w-96', 'p-6')
    })
  })

  it('supports close button functionality', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <p>Popover content</p>
          <PopoverClose data-testid="popover-close">
            Close
          </PopoverClose>
        </PopoverContent>
      </Popover>
    )

    const trigger = screen.getByTestId('popover-trigger')

    // Open popover
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('popover-content')).toBeInTheDocument()
    })

    // Click close button
    await user.click(screen.getByTestId('popover-close'))

    await waitFor(() => {
      expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument()
    })
  })

  it('supports anchor positioning', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverAnchor data-testid="popover-anchor">
          <div>Anchor element</div>
        </PopoverAnchor>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    const anchor = screen.getByTestId('popover-anchor')
    const trigger = screen.getByTestId('popover-trigger')

    expect(anchor).toBeInTheDocument()

    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('popover-content')).toBeInTheDocument()
    })
  })

  it('accepts custom className', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger className="custom-trigger" data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent className="custom-content" data-testid="popover-content">
          <p>Popover content</p>
          <PopoverClose className="custom-close" data-testid="popover-close">
            Close
          </PopoverClose>
        </PopoverContent>
      </Popover>
    )

    const trigger = screen.getByTestId('popover-trigger')
    expect(trigger).toHaveClass('custom-trigger')

    await user.click(trigger)

    await waitFor(() => {
      const content = screen.getByTestId('popover-content')
      const close = screen.getByTestId('popover-close')

      expect(content).toHaveClass('custom-content')
      expect(content).toHaveClass('z-50') // should still have base classes
      expect(close).toHaveClass('custom-close')
    })
  })

  it('forwards ref correctly', () => {
    const triggerRef = { current: null }
    const contentRef = { current: null }
    const anchorRef = { current: null }

    render(
      <Popover>
        <PopoverAnchor ref={anchorRef} data-testid="popover-anchor">
          <div>Anchor</div>
        </PopoverAnchor>
        <PopoverTrigger ref={triggerRef} data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent ref={contentRef}>
          <p>Popover content</p>
        </PopoverContent>
      </Popover>
    )

    expect(triggerRef.current).toBeInstanceOf(HTMLButtonElement)
    expect(anchorRef.current).toBeInstanceOf(HTMLDivElement)
  })

  it('supports accessibility attributes', () => {
    render(
      <Popover>
        <PopoverTrigger
          aria-label="Open options popover"
          aria-describedby="popover-description"
          data-testid="popover-trigger"
        >
          Open Popover
        </PopoverTrigger>
        <PopoverContent
          aria-labelledby="popover-title"
          data-testid="popover-content"
        >
          <h3 id="popover-title">Options</h3>
          <p id="popover-description">Choose your options</p>
        </PopoverContent>
      </Popover>
    )

    const trigger = screen.getByTestId('popover-trigger')
    expect(trigger).toHaveAttribute('aria-label', 'Open options popover')
    expect(trigger).toHaveAttribute('aria-describedby', 'popover-description')
  })

  it('maintains focus within popover when open', async () => {
    const user = userEvent.setup()

    render(
      <Popover>
        <PopoverTrigger data-testid="popover-trigger">
          Open Popover
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content">
          <button data-testid="button1">Button 1</button>
          <button data-testid="button2">Button 2</button>
          <PopoverClose data-testid="popover-close">
            Close
          </PopoverClose>
        </PopoverContent>
      </Popover>
    )

    const trigger = screen.getByTestId('popover-trigger')

    // Open popover
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('popover-content')).toBeInTheDocument()
    })

    // Tab through focusable elements
    const button1 = screen.getByTestId('button1')
    const button2 = screen.getByTestId('button2')
    const closeButton = screen.getByTestId('popover-close')

    // Test that focus management works within the popover
    await user.tab()

    // Focus should be within the popover content
    const activeElement = document.activeElement
    const popoverContent = screen.getByTestId('popover-content')
    expect(popoverContent.contains(activeElement) || activeElement === popoverContent).toBe(true)
  })
})