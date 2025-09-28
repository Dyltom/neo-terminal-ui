import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogOverlay,
} from './dialog'

describe('Dialog', () => {
  it('renders trigger and opens dialog on click', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle data-testid="dialog-title">Dialog Title</DialogTitle>
            <DialogDescription data-testid="dialog-description">
              Dialog description
            </DialogDescription>
          </DialogHeader>
          <p>Dialog content</p>
          <DialogFooter>
            <DialogClose data-testid="dialog-close">Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    const trigger = screen.getByTestId('dialog-trigger')
    expect(trigger).toBeInTheDocument()

    // Dialog should not be visible initially
    expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument()

    // Click trigger to open dialog
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('dialog-content')).toBeInTheDocument()
      expect(screen.getByTestId('dialog-title')).toBeInTheDocument()
      expect(screen.getByTestId('dialog-description')).toBeInTheDocument()
      expect(screen.getByText('Dialog content')).toBeInTheDocument()
    })
  })

  it('closes dialog when close button is clicked', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <DialogClose data-testid="dialog-close">Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    // Open dialog
    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      expect(screen.getByTestId('dialog-content')).toBeInTheDocument()
    })

    // Close dialog
    await user.click(screen.getByTestId('dialog-close'))

    await waitFor(() => {
      expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument()
    })
  })

  it('closes dialog when escape key is pressed', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    // Open dialog
    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      expect(screen.getByTestId('dialog-content')).toBeInTheDocument()
    })

    // Press escape to close
    await user.keyboard('{Escape}')

    await waitFor(() => {
      expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument()
    })
  })

  it('supports controlled open state', async () => {
    const onOpenChange = vi.fn()

    const { rerender } = render(
      <Dialog open={false} onOpenChange={onOpenChange}>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    // Should be closed initially
    expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument()

    // Open dialog programmatically
    rerender(
      <Dialog open={true} onOpenChange={onOpenChange}>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await waitFor(() => {
      expect(screen.getByTestId('dialog-content')).toBeInTheDocument()
    })
  })

  it('renders dialog content with correct classes', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('dialog-content')
      expect(content).toHaveClass(
        'fixed',
        'left-[50%]',
        'top-[50%]',
        'z-50',
        'grid',
        'w-full',
        'max-w-lg',
        'translate-x-[-50%]',
        'translate-y-[-50%]',
        'gap-4',
        'border-2',
        'p-6',
        'shadow-lg',
        'duration-200',
        'data-[state=open]:animate-in',
        'data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0',
        'data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95',
        'data-[state=open]:zoom-in-95',
        'data-[state=closed]:slide-out-to-left-1/2',
        'data-[state=closed]:slide-out-to-top-[48%]',
        'data-[state=open]:slide-in-from-left-1/2',
        'data-[state=open]:slide-in-from-top-[48%]',
        'sm:rounded-lg'
      )
    })
  })

  it('supports different content variants', async () => {
    const user = userEvent.setup()

    const { rerender } = render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent variant="terminal" data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('dialog-content')
      expect(content).toHaveClass(
        'border-matrix-green-100',
        'bg-matrix-black',
        'text-matrix-green-100',
        'shadow-glow-green',
        'font-mono'
      )
    })

    // Close and reopen with error variant
    await user.keyboard('{Escape}')

    rerender(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent variant="error" data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('dialog-content')
      expect(content).toHaveClass(
        'border-red-500',
        'bg-red-950/50',
        'text-red-100',
        'shadow-glow-red'
      )
    })
  })

  it('supports different content sizes', async () => {
    const user = userEvent.setup()

    const { rerender } = render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent size="sm" data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('dialog-content')
      expect(content).toHaveClass('max-w-sm')
    })

    await user.keyboard('{Escape}')

    rerender(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent size="xl" data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('dialog-content')
      expect(content).toHaveClass('max-w-4xl')
    })
  })

  it('renders overlay with correct classes', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent>
          <DialogOverlay data-testid="dialog-overlay" />
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      const overlay = screen.getByTestId('dialog-overlay')
      expect(overlay).toHaveClass(
        'fixed',
        'inset-0',
        'z-50',
        'bg-black/80',
        'data-[state=open]:animate-in',
        'data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0',
        'data-[state=open]:fade-in-0'
      )
    })
  })

  it('renders header, title, and description with correct classes', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader data-testid="dialog-header">
            <DialogTitle data-testid="dialog-title">Dialog Title</DialogTitle>
            <DialogDescription data-testid="dialog-description">
              Dialog description
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      const header = screen.getByTestId('dialog-header')
      const title = screen.getByTestId('dialog-title')
      const description = screen.getByTestId('dialog-description')

      expect(header).toHaveClass('flex', 'flex-col', 'space-y-1.5', 'text-center', 'sm:text-left')
      expect(title).toHaveClass('text-lg', 'font-semibold', 'leading-none', 'tracking-tight')
      expect(description).toHaveClass('text-sm', 'text-muted-foreground')
    })
  })

  it('renders footer with correct classes', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogFooter data-testid="dialog-footer">
            <button>Cancel</button>
            <button>OK</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      const footer = screen.getByTestId('dialog-footer')
      expect(footer).toHaveClass(
        'flex',
        'flex-col-reverse',
        'sm:flex-row',
        'sm:justify-end',
        'sm:space-x-2'
      )
    })
  })

  it('accepts custom className', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent className="custom-dialog" data-testid="dialog-content">
          <DialogHeader className="custom-header" data-testid="dialog-header">
            <DialogTitle className="custom-title" data-testid="dialog-title">
              Dialog Title
            </DialogTitle>
            <DialogDescription className="custom-description" data-testid="dialog-description">
              Description
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="custom-footer" data-testid="dialog-footer">
            <DialogClose className="custom-close" data-testid="dialog-close">
              Close
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    await user.click(screen.getByTestId('dialog-trigger'))

    await waitFor(() => {
      expect(screen.getByTestId('dialog-content')).toHaveClass('custom-dialog')
      expect(screen.getByTestId('dialog-header')).toHaveClass('custom-header')
      expect(screen.getByTestId('dialog-title')).toHaveClass('custom-title')
      expect(screen.getByTestId('dialog-description')).toHaveClass('custom-description')
      expect(screen.getByTestId('dialog-footer')).toHaveClass('custom-footer')
      expect(screen.getByTestId('dialog-close')).toHaveClass('custom-close')
    })
  })

  it('forwards ref correctly', () => {
    const triggerRef = { current: null }
    const contentRef = { current: null }

    render(
      <Dialog>
        <DialogTrigger ref={triggerRef} data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent ref={contentRef}>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    expect(triggerRef.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('supports accessibility attributes', () => {
    render(
      <Dialog>
        <DialogTrigger
          aria-label="Open settings dialog"
          data-testid="dialog-trigger"
        >
          Open Dialog
        </DialogTrigger>
        <DialogContent
          aria-describedby="dialog-description"
          data-testid="dialog-content"
        >
          <DialogHeader>
            <DialogTitle id="dialog-title">Settings</DialogTitle>
            <DialogDescription id="dialog-description">
              Configure your settings
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )

    const trigger = screen.getByTestId('dialog-trigger')
    expect(trigger).toHaveAttribute('aria-label', 'Open settings dialog')
  })

  it('traps focus within dialog when open', async () => {
    const user = userEvent.setup()

    render(
      <div>
        <button data-testid="outside-button">Outside Button</button>
        <Dialog>
          <DialogTrigger data-testid="dialog-trigger">
            Open Dialog
          </DialogTrigger>
          <DialogContent data-testid="dialog-content">
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
            </DialogHeader>
            <button data-testid="inside-button">Inside Button</button>
            <DialogFooter>
              <DialogClose data-testid="dialog-close">Close</DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )

    const outsideButton = screen.getByTestId('outside-button')
    const trigger = screen.getByTestId('dialog-trigger')

    // Open dialog
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('dialog-content')).toBeInTheDocument()
    })

    // Focus should be trapped within dialog
    const insideButton = screen.getByTestId('inside-button')
    const closeButton = screen.getByTestId('dialog-close')

    // Tab should cycle within dialog
    await user.tab()

    // Focus should remain within the dialog
    const activeElement = document.activeElement
    const dialogElement = screen.getByTestId('dialog-content')
    expect(dialogElement.contains(activeElement) || activeElement === dialogElement).toBe(true)
  })

  it('restores focus to trigger when dialog closes', async () => {
    const user = userEvent.setup()

    render(
      <Dialog>
        <DialogTrigger data-testid="dialog-trigger">
          Open Dialog
        </DialogTrigger>
        <DialogContent data-testid="dialog-content">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <DialogClose data-testid="dialog-close">Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )

    const trigger = screen.getByTestId('dialog-trigger')

    // Open dialog
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('dialog-content')).toBeInTheDocument()
    })

    // Close dialog
    await user.click(screen.getByTestId('dialog-close'))

    await waitFor(() => {
      expect(screen.queryByTestId('dialog-content')).not.toBeInTheDocument()
    })

    // Focus should return to trigger
    expect(document.activeElement).toBe(trigger)
  })
})