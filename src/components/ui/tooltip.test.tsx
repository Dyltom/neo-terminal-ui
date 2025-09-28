import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip'

describe('Tooltip', () => {
  it('renders trigger without error', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })

  it('shows tooltip content on hover', async () => {
    const user = userEvent.setup()

    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent data-testid="tooltip-content">
            <p>Unique tooltip text</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)

    await waitFor(() => {
      expect(screen.getByTestId('tooltip-content')).toBeInTheDocument()
    })
  })

  it('renders tooltip structure correctly', async () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover trigger</TooltipTrigger>
          <TooltipContent data-testid="tooltip-content-structure">
            <p>Tooltip structure test</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover trigger')
    expect(trigger).toBeInTheDocument()
    expect(trigger.tagName).toBe('BUTTON')
  })
})

describe('TooltipContent', () => {
  it('renders with correct classes', async () => {
    const user = userEvent.setup()

    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent data-testid="tooltip-content">
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)

    await waitFor(() => {
      const content = screen.getByTestId('tooltip-content')
      expect(content).toHaveClass(
        'z-50',
        'overflow-hidden',
        'rounded-md',
        'border-2',
        'border-matrix-green-300',
        'bg-matrix-dark',
        'px-3',
        'py-1.5',
        'text-sm',
        'text-matrix-green-100',
        'font-terminal',
        'shadow-glow-green',
        'animate-in',
        'fade-in-0',
        'zoom-in-95'
      )
    })
  })

  it('supports different variants', async () => {
    const user = userEvent.setup()

    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent variant="terminal" data-testid="tooltip-content">
            <p>Terminal tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)

    await waitFor(() => {
      const content = screen.getByTestId('tooltip-content')
      expect(content).toHaveClass(
        'bg-matrix-black',
        'border-matrix-green-100',
        'shadow-glow-green-bright'
      )
    })
  })

  it('accepts custom className', async () => {
    const user = userEvent.setup()

    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent className="custom-tooltip" data-testid="tooltip-content">
            <p>Custom tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)

    await waitFor(() => {
      const content = screen.getByTestId('tooltip-content')
      expect(content).toHaveClass('custom-tooltip')
      expect(content).toHaveClass('z-50') // should still have base classes
    })
  })

  it('supports different side positions', async () => {
    const user = userEvent.setup()

    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent side="left" data-testid="tooltip-content">
            <p>Left tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Hover me')
    await user.hover(trigger)

    await waitFor(() => {
      const content = screen.getByTestId('tooltip-content')
      expect(content).toBeInTheDocument()
    })
  })
})

describe('TooltipProvider', () => {
  it('provides tooltip context to children', () => {
    render(
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    expect(screen.getByText('Hover me')).toBeInTheDocument()
  })
})

describe('TooltipTrigger', () => {
  it('renders as button by default', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Click me</TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Click me')
    expect(trigger.tagName).toBe('BUTTON')
  })

  it('can render as child component', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div>Custom trigger</div>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )

    const trigger = screen.getByText('Custom trigger')
    expect(trigger.tagName).toBe('DIV')
  })
})