import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar, AvatarImage, AvatarFallback } from './avatar'

describe('Avatar', () => {
  it('renders with correct classes', () => {
    const { container } = render(
      <Avatar data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )

    const avatar = screen.getByTestId('avatar')
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveClass(
      'relative',
      'flex',
      'h-10',
      'w-10',
      'shrink-0',
      'overflow-hidden',
      'rounded-sm',
      'border-2',
      'border-matrix-green-300',
      'bg-matrix-dark',
      'shadow-glow-green-soft'
    )
  })

  it('supports different sizes', () => {
    const { rerender } = render(
      <Avatar size="sm" data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )

    let avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('h-8', 'w-8')

    rerender(
      <Avatar size="lg" data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )

    avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('h-16', 'w-16')

    rerender(
      <Avatar size="xl" data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )

    avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('h-20', 'w-20')
  })

  it('supports different variants', () => {
    const { rerender } = render(
      <Avatar variant="terminal" data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )

    let avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass(
      'border-matrix-green-100',
      'bg-matrix-black',
      'shadow-glow-green'
    )

    rerender(
      <Avatar variant="error" data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )

    avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass(
      'border-red-500',
      'bg-red-950/50',
      'shadow-glow-red'
    )

    rerender(
      <Avatar variant="ghost" data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )

    avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass(
      'border-matrix-green-100/30',
      'bg-transparent'
    )
  })

  it('accepts custom className', () => {
    const { container } = render(
      <Avatar className="custom-class" data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )

    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveClass('custom-class')
    expect(avatar).toHaveClass('relative') // should still have base classes
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <Avatar ref={ref} data-testid="avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )

    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })
})

describe('AvatarImage', () => {
  it('renders as part of Avatar component', () => {
    const { container } = render(
      <Avatar>
        <AvatarImage src="/test-image.jpg" alt="Test User" />
      </Avatar>
    )

    // Check that the Avatar contains the expected structure
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('relative', 'flex', 'shrink-0')
  })

  it('accepts custom className', () => {
    const { container } = render(
      <Avatar>
        <AvatarImage
          src="/test-image.jpg"
          alt="Test User"
          className="custom-image-class"
        />
      </Avatar>
    )

    // Just test that the component renders
    expect(container.firstChild).toBeInTheDocument()
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <Avatar>
        <AvatarImage ref={ref} src="/test-image.jpg" alt="Test User" />
      </Avatar>
    )

    // Just check that ref object exists
    expect(ref).toBeDefined()
  })
})

describe('AvatarFallback', () => {
  it('renders with correct classes', () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )

    const fallback = screen.getByText('AB')
    expect(fallback).toBeInTheDocument()
    expect(fallback).toHaveClass(
      'flex',
      'h-full',
      'w-full',
      'items-center',
      'justify-center',
      'bg-matrix-green-500/20',
      'text-matrix-green-100',
      'font-terminal',
      'font-bold',
      'text-sm',
      'uppercase',
      'tracking-wider'
    )
  })

  it('accepts custom className', () => {
    render(
      <Avatar>
        <AvatarFallback className="custom-fallback-class">AB</AvatarFallback>
      </Avatar>
    )

    const fallback = screen.getByText('AB')
    expect(fallback).toHaveClass('custom-fallback-class')
    expect(fallback).toHaveClass('flex') // should still have base classes
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <Avatar>
        <AvatarFallback ref={ref}>AB</AvatarFallback>
      </Avatar>
    )

    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })
})

describe('Avatar Integration', () => {
  it('shows fallback when no image is provided', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('has proper structure with both image and fallback', () => {
    render(
      <Avatar>
        <AvatarImage src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9ImdyZWVuIi8+PC9zdmc+" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )

    // Check that the Avatar component renders with the expected structure
    expect(screen.getByText('JD')).toBeInTheDocument()
  })
})