import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuCheckboxItem,
  DropdownMenuShortcut,
} from './dropdown-menu'

describe('DropdownMenu', () => {
  it('renders trigger and opens menu on click', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content">
          <DropdownMenuItem data-testid="dropdown-item">
            Menu Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    const trigger = screen.getByTestId('dropdown-trigger')
    expect(trigger).toBeInTheDocument()

    // Menu should not be visible initially
    expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument()

    // Click trigger to open menu
    await user.click(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('dropdown-content')).toBeInTheDocument()
      expect(screen.getByTestId('dropdown-item')).toBeInTheDocument()
    })
  })

  it('closes menu when item is clicked', async () => {
    const onSelect = vi.fn()
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content">
          <DropdownMenuItem data-testid="dropdown-item" onSelect={onSelect}>
            Menu Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    // Open menu
    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      expect(screen.getByTestId('dropdown-content')).toBeInTheDocument()
    })

    // Click menu item
    await user.click(screen.getByTestId('dropdown-item'))

    expect(onSelect).toHaveBeenCalled()

    await waitFor(() => {
      expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument()
    })
  })

  it('closes menu when escape key is pressed', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content">
          <DropdownMenuItem>Menu Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    // Open menu
    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      expect(screen.getByTestId('dropdown-content')).toBeInTheDocument()
    })

    // Press escape to close
    await user.keyboard('{Escape}')

    await waitFor(() => {
      expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument()
    })
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content">
          <DropdownMenuItem data-testid="item-1">Item 1</DropdownMenuItem>
          <DropdownMenuItem data-testid="item-2">Item 2</DropdownMenuItem>
          <DropdownMenuItem data-testid="item-3">Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    // Focus trigger
    const trigger = screen.getByTestId('dropdown-trigger')
    trigger.focus()

    // Open with Enter
    await user.keyboard('{Enter}')

    await waitFor(() => {
      expect(screen.getByTestId('dropdown-content')).toBeInTheDocument()
    })

    // Navigate with arrow keys
    await user.keyboard('{ArrowDown}')
    await user.keyboard('{ArrowDown}')

    // Should be able to select with Enter
    await user.keyboard('{Enter}')

    await waitFor(() => {
      expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument()
    })
  })

  it('renders menu content with correct classes', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content">
          <DropdownMenuItem>Menu Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('dropdown-content')
      expect(content).toHaveClass(
        'z-50',
        'min-w-[8rem]',
        'overflow-hidden',
        'rounded-md',
        'border-2',
        'p-1',
        'shadow-md',
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

  it('supports different content variants', async () => {
    const user = userEvent.setup()

    const { rerender } = render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent variant="terminal" data-testid="dropdown-content">
          <DropdownMenuItem>Menu Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('dropdown-content')
      expect(content).toHaveClass(
        'border-matrix-green-100',
        'bg-matrix-black',
        'text-matrix-green-100',
        'shadow-glow-green',
        'font-mono'
      )
    })

    await user.keyboard('{Escape}')

    rerender(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent variant="error" data-testid="dropdown-content">
          <DropdownMenuItem>Menu Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      const content = screen.getByTestId('dropdown-content')
      expect(content).toHaveClass(
        'border-red-500',
        'bg-red-950/50',
        'text-red-100',
        'shadow-glow-red'
      )
    })
  })

  it('renders menu items with correct classes', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem data-testid="dropdown-item">
            Menu Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      const item = screen.getByTestId('dropdown-item')
      expect(item).toHaveClass(
        'relative',
        'flex',
        'cursor-default',
        'select-none',
        'items-center',
        'rounded-sm',
        'px-2',
        'py-1.5',
        'text-sm',
        'outline-none',
        'transition-colors',
        'focus:bg-accent',
        'focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none',
        'data-[disabled]:opacity-50'
      )
    })
  })

  it('renders labels with correct classes', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel data-testid="dropdown-label">
            Menu Label
          </DropdownMenuLabel>
          <DropdownMenuItem>Menu Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      const label = screen.getByTestId('dropdown-label')
      expect(label).toHaveClass(
        'px-2',
        'py-1.5',
        'text-sm',
        'font-semibold'
      )
    })
  })

  it('renders separators with correct classes', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuSeparator data-testid="dropdown-separator" />
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      const separator = screen.getByTestId('dropdown-separator')
      expect(separator).toHaveClass(
        '-mx-1',
        'my-1',
        'h-px',
        'bg-muted'
      )
    })
  })

  it('supports submenu functionality', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger data-testid="submenu-trigger">
              More Options
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent data-testid="submenu-content">
              <DropdownMenuItem data-testid="submenu-item">
                Submenu Item
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    // Open main menu
    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      expect(screen.getByTestId('submenu-trigger')).toBeInTheDocument()
    })

    // Hover over submenu trigger
    await user.hover(screen.getByTestId('submenu-trigger'))

    await waitFor(() => {
      expect(screen.getByTestId('submenu-content')).toBeInTheDocument()
      expect(screen.getByTestId('submenu-item')).toBeInTheDocument()
    })
  })

  it('supports checkbox items', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            data-testid="checkbox-item"
            checked={true}
          >
            Checkbox Item
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      const checkboxItem = screen.getByTestId('checkbox-item')
      expect(checkboxItem).toBeInTheDocument()
      expect(checkboxItem).toHaveAttribute('data-state', 'checked')
    })
  })

  it('supports radio groups', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="option1">
            <DropdownMenuRadioItem
              data-testid="radio-item-1"
              value="option1"
            >
              Option 1
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              data-testid="radio-item-2"
              value="option2"
            >
              Option 2
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      const radioItem1 = screen.getByTestId('radio-item-1')
      const radioItem2 = screen.getByTestId('radio-item-2')

      expect(radioItem1).toHaveAttribute('data-state', 'checked')
      expect(radioItem2).toHaveAttribute('data-state', 'unchecked')
    })
  })

  it('renders shortcuts correctly', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Copy
            <DropdownMenuShortcut data-testid="shortcut">⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      const shortcut = screen.getByTestId('shortcut')
      expect(shortcut).toHaveClass(
        'ml-auto',
        'text-xs',
        'tracking-widest',
        'opacity-60'
      )
    })
  })

  it('accepts custom className', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger
          className="custom-trigger"
          data-testid="dropdown-trigger"
        >
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="custom-content"
          data-testid="dropdown-content"
        >
          <DropdownMenuItem className="custom-item" data-testid="dropdown-item">
            Menu Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    expect(screen.getByTestId('dropdown-trigger')).toHaveClass('custom-trigger')

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      expect(screen.getByTestId('dropdown-content')).toHaveClass('custom-content')
      expect(screen.getByTestId('dropdown-item')).toHaveClass('custom-item')
    })
  })

  it('forwards ref correctly', () => {
    const triggerRef = { current: null }

    render(
      <DropdownMenu>
        <DropdownMenuTrigger ref={triggerRef} data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Menu Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    expect(triggerRef.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('supports accessibility attributes', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label="Open options menu"
          data-testid="dropdown-trigger"
        >
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent
          aria-label="Options menu"
          data-testid="dropdown-content"
        >
          <DropdownMenuItem>Menu Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    const trigger = screen.getByTestId('dropdown-trigger')
    expect(trigger).toHaveAttribute('aria-label', 'Open options menu')
  })

  it('supports controlled open state', async () => {
    const onOpenChange = vi.fn()

    const { rerender } = render(
      <DropdownMenu open={false} onOpenChange={onOpenChange}>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content">
          <DropdownMenuItem>Menu Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    // Should be closed initially
    expect(screen.queryByTestId('dropdown-content')).not.toBeInTheDocument()

    // Open menu programmatically
    rerender(
      <DropdownMenu open={true} onOpenChange={onOpenChange}>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content">
          <DropdownMenuItem>Menu Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await waitFor(() => {
      expect(screen.getByTestId('dropdown-content')).toBeInTheDocument()
    })
  })

  it('supports disabled state', async () => {
    const user = userEvent.setup()

    render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger">
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem disabled data-testid="disabled-item">
            Disabled Item
          </DropdownMenuItem>
          <DropdownMenuItem data-testid="enabled-item">
            Enabled Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )

    await user.click(screen.getByTestId('dropdown-trigger'))

    await waitFor(() => {
      const disabledItem = screen.getByTestId('disabled-item')
      const enabledItem = screen.getByTestId('enabled-item')

      expect(disabledItem).toHaveAttribute('data-disabled', '')
      expect(enabledItem).not.toHaveAttribute('data-disabled')
    })
  })
})