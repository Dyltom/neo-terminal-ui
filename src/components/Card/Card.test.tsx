import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, TerminalCard } from '../Card'
import { Button } from '../Button'

describe('Card Components', () => {
  describe('Card', () => {
    it('renders with default variant', () => {
      const { container } = render(<Card>Card Content</Card>)

      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('relative', 'overflow-hidden', 'transition-all', 'duration-300')
      expect(card).toHaveClass('bg-matrix-dark/95', 'border', 'border-matrix-green-300')
    })

    it('renders with different variants', () => {
      const { rerender, container } = render(<Card variant="ghost">Ghost Card</Card>)

      let card = container.firstChild as HTMLElement
      expect(card).toHaveClass('bg-transparent', 'border', 'border-matrix-green-100/20')

      rerender(<Card variant="terminal">Terminal Card</Card>)
      card = container.firstChild as HTMLElement
      expect(card).toHaveClass('bg-matrix-black', 'border-2', 'border-matrix-green-100')

      rerender(<Card variant="crt">CRT Card</Card>)
      card = container.firstChild as HTMLElement
      expect(card).toHaveClass('bg-matrix-dark/95', 'border-matrix-green-300')
    })

    it('applies hover effect when enabled', () => {
      const { container } = render(<Card hover>Hover Card</Card>)

      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('hover:shadow-glow-green', 'hover:border-matrix-green-100')
    })

    it('applies pulse animation when enabled', () => {
      const { container } = render(<Card pulse>Pulse Card</Card>)

      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('animate-pulse')
    })

    it('applies glitch effect when enabled', () => {
      const { container } = render(<Card glitch>Glitch Card</Card>)

      const card = container.firstChild as HTMLElement
      expect(card).toHaveClass('animate-glitch')
    })
  })

  describe('CardHeader', () => {
    it('renders with proper classes', () => {
      render(<CardHeader>Header Content</CardHeader>)

      const header = screen.getByText('Header Content')
      expect(header).toHaveClass('flex', 'flex-col', 'space-y-1.5', 'p-6', 'border-b', 'border-matrix-green-400/30')
    })
  })

  describe('CardTitle', () => {
    it('renders with proper classes', () => {
      render(<CardTitle>Card Title</CardTitle>)

      const title = screen.getByText('Card Title')
      expect(title).toHaveClass('text-2xl', 'font-mono', 'font-semibold', 'leading-none', 'tracking-wide', 'text-matrix-green-100', 'uppercase')
    })
  })

  describe('CardDescription', () => {
    it('renders with proper classes', () => {
      render(<CardDescription>Card Description</CardDescription>)

      const description = screen.getByText('Card Description')
      expect(description).toHaveClass('text-sm', 'text-matrix-green-200/80', 'font-mono')
    })
  })

  describe('CardContent', () => {
    it('renders with proper classes', () => {
      render(<CardContent>Content</CardContent>)

      const content = screen.getByText('Content')
      expect(content).toHaveClass('p-6', 'pt-0', 'font-mono', 'text-matrix-green-100')
    })
  })

  describe('CardFooter', () => {
    it('renders with proper classes', () => {
      render(<CardFooter>Footer</CardFooter>)

      const footer = screen.getByText('Footer')
      expect(footer).toHaveClass('flex', 'items-center', 'p-6', 'pt-0', 'font-mono', 'text-xs', 'text-matrix-green-300', 'uppercase', 'tracking-wider')
    })
  })

  describe('TerminalCard', () => {
    it('renders with default props', () => {
      render(
        <TerminalCard title="Test Terminal" system="TEST" status="online">
          Terminal Content
        </TerminalCard>
      )

      expect(screen.getByText('Test Terminal')).toBeInTheDocument()
      expect(screen.getByText('TEST')).toBeInTheDocument()
      expect(screen.getByText('online')).toBeInTheDocument()
      expect(screen.getByText('Terminal Content')).toBeInTheDocument()
    })

    it('renders with different status types', () => {
      const { rerender } = render(
        <TerminalCard title="Test" system="TEST" status="warning">
          Content
        </TerminalCard>
      )

      expect(screen.getByText('warning')).toBeInTheDocument()

      rerender(
        <TerminalCard title="Test" system="TEST" status="error">
          Content
        </TerminalCard>
      )

      expect(screen.getByText('error')).toBeInTheDocument()

      rerender(
        <TerminalCard title="Test" system="TEST" status="offline">
          Content
        </TerminalCard>
      )

      expect(screen.getByText('offline')).toBeInTheDocument()
    })

    it('renders without optional props', () => {
      render(
        <TerminalCard title="Minimal Terminal">
          Minimal Content
        </TerminalCard>
      )

      expect(screen.getByText('Minimal Terminal')).toBeInTheDocument()
      expect(screen.getByText('Minimal Content')).toBeInTheDocument()
      expect(screen.queryByText('TEST')).not.toBeInTheDocument()
      // TerminalCard defaults to status="online" even when not provided
      expect(screen.getByText('online')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      render(
        <TerminalCard title="Custom" className="custom-class">
          Content
        </TerminalCard>
      )

      const card = screen.getByText('Custom').closest('div[class*="custom-class"]')
      expect(card).toBeInTheDocument()
    })

    it('renders with Button inside content', () => {
      render(
        <TerminalCard title="Terminal with Button" system="CORE" status="error">
          <div>
            <p>System failure detected</p>
            <Button variant="destructive" size="sm" className="mt-4">
              INITIATE RECOVERY
            </Button>
          </div>
        </TerminalCard>
      )

      const button = screen.getByRole('button', { name: 'INITIATE RECOVERY' })
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('relative', 'inline-flex', 'items-center', 'justify-center')
      expect(button).toHaveClass('border-[#ff0040]', 'text-[#ff0040]')
      expect(button).toHaveClass('py-2', 'px-4', 'text-[0.75rem]')
    })

    it('maintains proper styling hierarchy', () => {
      render(
        <TerminalCard title="Hierarchy Test" system="TEST" status="online">
          <Button variant="primary">TEST BUTTON</Button>
        </TerminalCard>
      )

      const terminalCard = screen.getByText('Hierarchy Test').closest('[class*="matrix"]')
      const button = screen.getByRole('button', { name: 'TEST BUTTON' })

      expect(terminalCard).toBeInTheDocument()
      expect(button).toBeInTheDocument()
      expect(button).toHaveClass('bg-[#00ff41]', 'text-[#0a0a0a]')
    })
  })

  describe('Card with Button Integration', () => {
    it('renders Card with multiple buttons correctly', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Process Control</CardTitle>
            <CardDescription>Manage system processes</CardDescription>
          </CardHeader>
          <CardContent>
            <p>3 active processes</p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button size="sm">TERMINATE ALL</Button>
            <Button size="sm" variant="ghost">REFRESH</Button>
          </CardFooter>
        </Card>
      )

      const terminateButton = screen.getByRole('button', { name: 'TERMINATE ALL' })
      const refreshButton = screen.getByRole('button', { name: 'REFRESH' })

      expect(terminateButton).toHaveClass('border-[#00ff41]', 'text-[#00ff41]')
      expect(refreshButton).toHaveClass('border-transparent', 'text-[#00ff41]')

      // Both buttons should have proper Matrix styling
      expect(terminateButton).toHaveClass('font-[\'Share_Tech_Mono\',_monospace]', 'uppercase', 'tracking-[0.12em]')
      expect(refreshButton).toHaveClass('font-[\'Share_Tech_Mono\',_monospace]', 'uppercase', 'tracking-[0.12em]')
    })
  })
})