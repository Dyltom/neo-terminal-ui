import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AspectRatio } from './aspect-ratio'

describe('AspectRatio', () => {
  it('renders with default ratio', () => {
    const { container } = render(
      <AspectRatio data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    )

    const aspectRatio = screen.getByTestId('aspect-ratio')
    expect(aspectRatio).toBeInTheDocument()
    expect(aspectRatio).toHaveClass('relative', 'w-full')
  })

  it('renders with custom ratio', () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
        <div>Widescreen content</div>
      </AspectRatio>
    )

    const aspectRatio = screen.getByTestId('aspect-ratio')
    expect(aspectRatio).toBeInTheDocument()
    expect(screen.getByText('Widescreen content')).toBeInTheDocument()
  })

  it('renders with 4:3 ratio', () => {
    const { container } = render(
      <AspectRatio ratio={4 / 3} data-testid="aspect-ratio">
        <div>4:3 content</div>
      </AspectRatio>
    )

    const aspectRatio = screen.getByTestId('aspect-ratio')
    expect(aspectRatio).toBeInTheDocument()
    expect(screen.getByText('4:3 content')).toBeInTheDocument()
  })

  it('renders with square ratio', () => {
    const { container } = render(
      <AspectRatio ratio={1} data-testid="aspect-ratio">
        <div>Square content</div>
      </AspectRatio>
    )

    const aspectRatio = screen.getByTestId('aspect-ratio')
    expect(aspectRatio).toBeInTheDocument()
    expect(screen.getByText('Square content')).toBeInTheDocument()
  })

  it('accepts custom className', () => {
    const { container } = render(
      <AspectRatio className="custom-aspect" data-testid="aspect-ratio">
        <div>Custom content</div>
      </AspectRatio>
    )

    const aspectRatio = screen.getByTestId('aspect-ratio')
    expect(aspectRatio).toHaveClass('custom-aspect')
    expect(aspectRatio).toHaveClass('relative') // should still have base classes
  })

  it('forwards ref correctly', () => {
    const ref = { current: null }
    render(
      <AspectRatio ref={ref} data-testid="aspect-ratio">
        <div>Ref content</div>
      </AspectRatio>
    )

    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('renders children correctly', () => {
    render(
      <AspectRatio data-testid="aspect-ratio">
        <img src="/test.jpg" alt="Test image" />
        <div>Overlay content</div>
      </AspectRatio>
    )

    expect(screen.getByAltText('Test image')).toBeInTheDocument()
    expect(screen.getByText('Overlay content')).toBeInTheDocument()
  })

  it('applies proper styling for image containers', () => {
    render(
      <AspectRatio ratio={16 / 9} data-testid="aspect-ratio">
        <img
          src="/test.jpg"
          alt="Test image"
          className="object-cover rounded-md"
        />
      </AspectRatio>
    )

    const image = screen.getByAltText('Test image')
    expect(image).toHaveClass('object-cover', 'rounded-md')
  })

  it('passes through other props', () => {
    render(
      <AspectRatio
        data-testid="aspect-ratio"
        aria-label="Image container"
        role="img"
      >
        <div>Props content</div>
      </AspectRatio>
    )

    const aspectRatio = screen.getByTestId('aspect-ratio')
    expect(aspectRatio).toHaveAttribute('aria-label', 'Image container')
    expect(aspectRatio).toHaveAttribute('role', 'img')
  })

  it('handles edge ratio values', () => {
    const { rerender } = render(
      <AspectRatio ratio={0.5} data-testid="aspect-ratio">
        <div>Tall content</div>
      </AspectRatio>
    )

    let aspectRatio = screen.getByTestId('aspect-ratio')
    expect(aspectRatio).toBeInTheDocument()
    expect(screen.getByText('Tall content')).toBeInTheDocument()

    rerender(
      <AspectRatio ratio={2} data-testid="aspect-ratio">
        <div>Wide content</div>
      </AspectRatio>
    )

    aspectRatio = screen.getByTestId('aspect-ratio')
    expect(aspectRatio).toBeInTheDocument()
    expect(screen.getByText('Wide content')).toBeInTheDocument()
  })
})