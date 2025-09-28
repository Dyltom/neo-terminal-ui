import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

describe('Button Component', () => {
  it('renders with default variant', () => {
    render(<Button>TEST BUTTON</Button>)

    const button = screen.getByRole('button', { name: 'TEST BUTTON' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('relative', 'inline-flex', 'items-center', 'justify-center')
    expect(button).toHaveClass('border-[#00ff41]', 'text-[#00ff41]')
  })

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="primary">PRIMARY</Button>)

    let button = screen.getByRole('button')
    expect(button).toHaveClass('bg-[#00ff41]', 'text-[#0a0a0a]')

    rerender(<Button variant="destructive">DESTRUCTIVE</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('border-[#ff0040]', 'text-[#ff0040]')

    rerender(<Button variant="amber">AMBER</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('border-[#ffb000]', 'text-[#ffb000]')

    rerender(<Button variant="ghost">GHOST</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('border-transparent', 'text-[#00ff41]')

    rerender(<Button variant="link">LINK</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('border-transparent', 'text-[#00ff41]', 'underline-offset-4')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">SMALL</Button>)

    let button = screen.getByRole('button')
    expect(button).toHaveClass('py-2', 'px-4', 'text-[0.75rem]', 'min-w-[100px]')

    rerender(<Button size="lg">LARGE</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('py-3', 'px-6', 'text-[0.875rem]', 'min-w-[140px]')

    rerender(<Button size="icon">⚡</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('w-10', 'h-10', 'min-w-0', 'p-0')
  })

  it('handles loading state', () => {
    render(<Button loading>LOADING BUTTON</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(screen.getByText('LOADING...')).toBeInTheDocument()
    expect(screen.queryByText('LOADING BUTTON')).not.toBeInTheDocument()
  })

  it('handles disabled state', () => {
    render(<Button disabled>DISABLED BUTTON</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
  })

  it('renders with icon', () => {
    render(<Button icon="→">WITH ICON</Button>)

    expect(screen.getByText('→')).toBeInTheDocument()
    expect(screen.getByText('WITH ICON')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>CLICKABLE</Button>)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('handles sound effect on click', () => {
    // Mock Audio constructor
    const mockPlay = vi.fn().mockResolvedValue(undefined)
    global.Audio = vi.fn().mockImplementation(() => ({
      play: mockPlay,
      volume: 0
    }))

    const handleClick = vi.fn()
    render(<Button withSound onClick={handleClick}>SOUND BUTTON</Button>)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(global.Audio).toHaveBeenCalled()
    expect(mockPlay).toHaveBeenCalled()
  })

  it('applies pulse animation when enabled', () => {
    render(<Button pulse>PULSING</Button>)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('animate-pulse')
  })

  it('has proper accessibility attributes', () => {
    render(<Button aria-label="Custom Label">ACCESSIBLE</Button>)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Custom Label')
  })

  it('forwards ref correctly', () => {
    const ref = vi.fn()
    render(<Button ref={ref}>REF BUTTON</Button>)

    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement))
  })

  it('has group class for hover effects', () => {
    render(<Button>HOVER BUTTON</Button>)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('group')
  })

  it('includes background slide effect span', () => {
    render(<Button>SLIDE EFFECT</Button>)

    const button = screen.getByRole('button')
    const slideSpan = button.querySelector('span[aria-hidden="true"]')
    expect(slideSpan).toBeInTheDocument()
    expect(slideSpan).toHaveClass('absolute', 'inset-0', 'bg-[#00ff41]', '-left-full', 'transition-[left]', 'duration-300', 'group-hover:left-0')
  })

  it('renders content in proper z-index layer', () => {
    render(<Button icon="⚡">CONTENT</Button>)

    const button = screen.getByRole('button')
    const contentSpan = button.querySelector('span.relative.z-10')
    expect(contentSpan).toBeInTheDocument()
    expect(contentSpan).toHaveClass('flex', 'items-center', 'gap-2')
  })
})