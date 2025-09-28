import * as React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './tabs'

describe('Tabs', () => {
  it('renders tabs and content correctly', () => {
    render(
      <Tabs defaultValue="tab1" data-testid="tabs">
        <TabsList data-testid="tabs-list">
          <TabsTrigger value="tab1" data-testid="tab-trigger-1">
            Tab 1
          </TabsTrigger>
          <TabsTrigger value="tab2" data-testid="tab-trigger-2">
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="tab-content-1">
          Content 1
        </TabsContent>
        <TabsContent value="tab2" data-testid="tab-content-2">
          Content 2
        </TabsContent>
      </Tabs>
    )

    expect(screen.getByTestId('tabs')).toBeInTheDocument()
    expect(screen.getByTestId('tabs-list')).toBeInTheDocument()
    expect(screen.getByTestId('tab-trigger-1')).toBeInTheDocument()
    expect(screen.getByTestId('tab-trigger-2')).toBeInTheDocument()
    expect(screen.getByTestId('tab-content-1')).toBeInTheDocument()
    expect(screen.queryByTestId('tab-content-2')).not.toBeInTheDocument()
  })

  it('switches tabs when clicked', async () => {
    const user = userEvent.setup()

    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1" data-testid="tab-trigger-1">
            Tab 1
          </TabsTrigger>
          <TabsTrigger value="tab2" data-testid="tab-trigger-2">
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="tab-content-1">
          Content 1
        </TabsContent>
        <TabsContent value="tab2" data-testid="tab-content-2">
          Content 2
        </TabsContent>
      </Tabs>
    )

    // Initially tab1 should be active
    expect(screen.getByTestId('tab-content-1')).toBeInTheDocument()
    expect(screen.queryByTestId('tab-content-2')).not.toBeInTheDocument()

    // Click tab2
    await user.click(screen.getByTestId('tab-trigger-2'))

    await waitFor(() => {
      expect(screen.queryByTestId('tab-content-1')).not.toBeInTheDocument()
      expect(screen.getByTestId('tab-content-2')).toBeInTheDocument()
    })
  })

  it('supports keyboard navigation', async () => {
    const user = userEvent.setup()

    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1" data-testid="tab-trigger-1">
            Tab 1
          </TabsTrigger>
          <TabsTrigger value="tab2" data-testid="tab-trigger-2">
            Tab 2
          </TabsTrigger>
          <TabsTrigger value="tab3" data-testid="tab-trigger-3">
            Tab 3
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="tab-content-1">
          Content 1
        </TabsContent>
        <TabsContent value="tab2" data-testid="tab-content-2">
          Content 2
        </TabsContent>
        <TabsContent value="tab3" data-testid="tab-content-3">
          Content 3
        </TabsContent>
      </Tabs>
    )

    // Focus first tab
    const firstTab = screen.getByTestId('tab-trigger-1')
    firstTab.focus()

    // Navigate with arrow keys
    await user.keyboard('{ArrowRight}')
    expect(screen.getByTestId('tab-trigger-2')).toHaveFocus()

    await user.keyboard('{ArrowRight}')
    expect(screen.getByTestId('tab-trigger-3')).toHaveFocus()

    // Navigate back with left arrow
    await user.keyboard('{ArrowLeft}')
    expect(screen.getByTestId('tab-trigger-2')).toHaveFocus()

    // Activate with Enter
    await user.keyboard('{Enter}')

    await waitFor(() => {
      expect(screen.queryByTestId('tab-content-1')).not.toBeInTheDocument()
      expect(screen.getByTestId('tab-content-2')).toBeInTheDocument()
    })
  })

  it('renders with correct default classes', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList data-testid="tabs-list">
          <TabsTrigger value="tab1" data-testid="tab-trigger">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="tab-content">
          Content 1
        </TabsContent>
      </Tabs>
    )

    const tabsList = screen.getByTestId('tabs-list')
    expect(tabsList).toHaveClass(
      'inline-flex',
      'h-10',
      'items-center',
      'justify-center',
      'rounded-md',
      'border-2',
      'p-1',
      'text-muted-foreground'
    )

    const tabTrigger = screen.getByTestId('tab-trigger')
    expect(tabTrigger).toHaveClass(
      'inline-flex',
      'items-center',
      'justify-center',
      'whitespace-nowrap',
      'rounded-sm',
      'px-3',
      'py-1.5',
      'text-sm',
      'font-medium',
      'ring-offset-background',
      'transition-all',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2',
      'disabled:pointer-events-none',
      'disabled:opacity-50'
    )

    const tabContent = screen.getByTestId('tab-content')
    expect(tabContent).toHaveClass(
      'mt-2',
      'ring-offset-background',
      'focus-visible:outline-none',
      'focus-visible:ring-2',
      'focus-visible:ring-ring',
      'focus-visible:ring-offset-2'
    )
  })

  it('supports different variants', () => {
    const { rerender } = render(
      <Tabs defaultValue="tab1">
        <TabsList variant="terminal" data-testid="tabs-list">
          <TabsTrigger value="tab1" data-testid="tab-trigger">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="tab-content">
          Content 1
        </TabsContent>
      </Tabs>
    )

    const tabsList = screen.getByTestId('tabs-list')
    expect(tabsList).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-black',
      'text-matrix-green-100',
      'shadow-glow-green',
      'font-mono'
    )

    rerender(
      <Tabs defaultValue="tab1">
        <TabsList variant="error" data-testid="tabs-list">
          <TabsTrigger value="tab1" data-testid="tab-trigger">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="tab-content">
          Content 1
        </TabsContent>
      </Tabs>
    )

    expect(tabsList).toHaveClass(
      'border-red-500',
      'bg-red-950/50',
      'text-red-100',
      'shadow-glow-red'
    )
  })

  it('supports tab trigger variants', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1" variant="terminal" data-testid="tab-trigger">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          Content 1
        </TabsContent>
      </Tabs>
    )

    const tabTrigger = screen.getByTestId('tab-trigger')
    expect(tabTrigger).toHaveClass(
      'data-[state=active]:bg-matrix-green-100/20',
      'data-[state=active]:text-matrix-green-100',
      'data-[state=active]:shadow-glow-green-soft',
      'hover:bg-matrix-green-100/10',
      'font-mono'
    )
  })

  it('supports controlled tabs', async () => {
    const onValueChange = vi.fn()

    const ControlledTabs = () => {
      const [value, setValue] = React.useState('tab1')

      const handleValueChange = (newValue: string) => {
        setValue(newValue)
        onValueChange(newValue)
      }

      return (
        <Tabs value={value} onValueChange={handleValueChange}>
          <TabsList>
            <TabsTrigger value="tab1" data-testid="tab-trigger-1">
              Tab 1
            </TabsTrigger>
            <TabsTrigger value="tab2" data-testid="tab-trigger-2">
              Tab 2
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" data-testid="tab-content-1">
            Content 1
          </TabsContent>
          <TabsContent value="tab2" data-testid="tab-content-2">
            Content 2
          </TabsContent>
        </Tabs>
      )
    }

    const user = userEvent.setup()
    render(<ControlledTabs />)

    // Click tab2
    await user.click(screen.getByTestId('tab-trigger-2'))

    expect(onValueChange).toHaveBeenCalledWith('tab2')
    await waitFor(() => {
      expect(screen.getByTestId('tab-content-2')).toBeInTheDocument()
    })
  })

  it('accepts custom className', () => {
    render(
      <Tabs defaultValue="tab1" className="custom-tabs">
        <TabsList className="custom-list" data-testid="tabs-list">
          <TabsTrigger
            value="tab1"
            className="custom-trigger"
            data-testid="tab-trigger"
          >
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="tab1"
          className="custom-content"
          data-testid="tab-content"
        >
          Content 1
        </TabsContent>
      </Tabs>
    )

    expect(screen.getByTestId('tabs-list')).toHaveClass('custom-list')
    expect(screen.getByTestId('tab-trigger')).toHaveClass('custom-trigger')
    expect(screen.getByTestId('tab-content')).toHaveClass('custom-content')
  })

  it('forwards ref correctly', () => {
    const tabsRef = { current: null }
    const tabsListRef = { current: null }
    const tabsTriggerRef = { current: null }
    const tabsContentRef = { current: null }

    render(
      <Tabs ref={tabsRef} defaultValue="tab1">
        <TabsList ref={tabsListRef}>
          <TabsTrigger ref={tabsTriggerRef} value="tab1">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent ref={tabsContentRef} value="tab1">
          Content 1
        </TabsContent>
      </Tabs>
    )

    expect(tabsRef.current).toBeInstanceOf(HTMLDivElement)
    expect(tabsListRef.current).toBeInstanceOf(HTMLDivElement)
    expect(tabsTriggerRef.current).toBeInstanceOf(HTMLButtonElement)
    expect(tabsContentRef.current).toBeInstanceOf(HTMLDivElement)
  })

  it('supports disabled tabs', async () => {
    const user = userEvent.setup()

    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1" data-testid="tab-trigger-1">
            Tab 1
          </TabsTrigger>
          <TabsTrigger value="tab2" disabled data-testid="tab-trigger-2">
            Tab 2 (Disabled)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" data-testid="tab-content-1">
          Content 1
        </TabsContent>
        <TabsContent value="tab2" data-testid="tab-content-2">
          Content 2
        </TabsContent>
      </Tabs>
    )

    const disabledTab = screen.getByTestId('tab-trigger-2')
    expect(disabledTab).toBeDisabled()

    // Try clicking disabled tab
    await user.click(disabledTab)

    // Should still show content 1
    expect(screen.getByTestId('tab-content-1')).toBeInTheDocument()
    expect(screen.queryByTestId('tab-content-2')).not.toBeInTheDocument()
  })

  it('supports accessibility attributes', () => {
    render(
      <Tabs defaultValue="tab1" aria-label="Main navigation">
        <TabsList aria-label="Navigation tabs">
          <TabsTrigger value="tab1" aria-label="First tab">
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" aria-label="First tab content">
          Content 1
        </TabsContent>
      </Tabs>
    )

    expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'Navigation tabs')
    expect(screen.getByRole('tab')).toHaveAttribute('aria-label', 'First tab')
    expect(screen.getByRole('tabpanel')).toHaveAttribute('aria-label', 'First tab content')
  })
})