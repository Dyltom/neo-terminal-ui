import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TerminalStatus, SystemInfo } from './TerminalStatus'

describe('TerminalStatus', () => {
  it('renders with default props', () => {
    render(<TerminalStatus />)
    expect(screen.getByText('[ IDLE ]')).toBeInTheDocument()
  })

  it('renders different status types', () => {
    const { rerender } = render(<TerminalStatus status="online" />)
    expect(screen.getByText('[ ONLINE ]')).toBeInTheDocument()

    rerender(<TerminalStatus status="offline" />)
    expect(screen.getByText('[ OFFLINE ]')).toBeInTheDocument()

    rerender(<TerminalStatus status="warning" />)
    expect(screen.getByText('[ WARNING ]')).toBeInTheDocument()

    rerender(<TerminalStatus status="error" />)
    expect(screen.getByText('[ ERROR ]')).toBeInTheDocument()

    rerender(<TerminalStatus status="loading" />)
    expect(screen.getByText('[ LOADING ]')).toBeInTheDocument()
  })

  it('renders custom label', () => {
    render(<TerminalStatus customLabel="CONNECTED" />)
    expect(screen.getByText('[ CONNECTED ]')).toBeInTheDocument()
  })

  it('renders without brackets when disabled', () => {
    render(<TerminalStatus status="online" showBrackets={false} />)
    expect(screen.getByText('ONLINE')).toBeInTheDocument()
    expect(screen.queryByText('[ ONLINE ]')).not.toBeInTheDocument()
  })

  it('renders without indicator when disabled', () => {
    render(<TerminalStatus status="online" showIndicator={false} />)
    expect(screen.getByText('[ ONLINE ]')).toBeInTheDocument()
    // Check that indicator dot is not present
    const container = screen.getByText('[ ONLINE ]').parentElement
    expect(container?.querySelector('.status-indicator')).not.toBeInTheDocument()
  })

  it('applies correct size classes', () => {
    const { rerender } = render(<TerminalStatus size="sm" />)
    expect(screen.getByText('[ IDLE ]').parentElement).toHaveClass('text-xs')

    rerender(<TerminalStatus size="md" />)
    expect(screen.getByText('[ IDLE ]').parentElement).toHaveClass('text-sm')

    rerender(<TerminalStatus size="lg" />)
    expect(screen.getByText('[ IDLE ]').parentElement).toHaveClass('text-base')
  })
})

describe('SystemInfo', () => {
  it('renders with default props', () => {
    render(<SystemInfo />)
    expect(screen.getByText(/SYSTEM UPTIME:/)).toBeInTheDocument()
    expect(screen.getByText(/CPU:/)).toBeInTheDocument()
    expect(screen.getByText(/MEM:/)).toBeInTheDocument()
  })

  it('renders with custom values', () => {
    render(<SystemInfo uptime={7200} cpu={15.3} memory="256KB" />)
    expect(screen.getByText(/7200/)).toBeInTheDocument()
    expect(screen.getByText(/15.3%/)).toBeInTheDocument()
    expect(screen.getByText(/256KB/)).toBeInTheDocument()
  })

  it('renders without labels when disabled', () => {
    render(<SystemInfo showLabels={false} />)
    expect(screen.queryByText(/SYSTEM UPTIME:/)).not.toBeInTheDocument()
    expect(screen.queryByText(/CPU:/)).not.toBeInTheDocument()
    expect(screen.queryByText(/MEM:/)).not.toBeInTheDocument()
    // But values should still be present
    expect(screen.getByText(/2.4%/)).toBeInTheDocument()
    expect(screen.getByText(/128KB/)).toBeInTheDocument()
  })

  it('uses custom separator', () => {
    render(<SystemInfo separator=" / " />)
    expect(screen.getAllByText(/\//).length).toBeGreaterThan(0)
  })
})