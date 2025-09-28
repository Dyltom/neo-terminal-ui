import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Timer } from './Timer'

describe('Timer', () => {
  it('renders with default props', () => {
    render(<Timer />)

    expect(screen.getByRole('timer')).toBeInTheDocument()
    expect(screen.getByText('00:00.00')).toBeInTheDocument()
    expect(screen.getByLabelText('Start timer')).toBeInTheDocument()
    expect(screen.getByLabelText('Reset timer')).toBeInTheDocument()
    expect(screen.getByLabelText('Hold to fast forward')).toBeInTheDocument()
  })

  it('shows keyboard hints when enabled', () => {
    render(<Timer showKeyboardHints={true} />)

    expect(screen.getByText('SPACE')).toBeInTheDocument()
    expect(screen.getByText('START/PAUSE')).toBeInTheDocument()
    expect(screen.getByText('R')).toBeInTheDocument()
    expect(screen.getByText('RESET')).toBeInTheDocument()
    expect(screen.getByText('F')).toBeInTheDocument()
    expect(screen.getByText('FAST FORWARD')).toBeInTheDocument()
  })

  it('hides keyboard hints when disabled', () => {
    render(<Timer showKeyboardHints={false} />)

    expect(screen.queryByText('SPACE')).not.toBeInTheDocument()
    expect(screen.queryByText('START/PAUSE')).not.toBeInTheDocument()
  })

  it('shows status indicator when enabled', () => {
    render(<Timer showStatus={true} />)

    expect(screen.getByText('STANDBY')).toBeInTheDocument()
  })

  it('hides status indicator when disabled', () => {
    render(<Timer showStatus={false} />)

    expect(screen.queryByText('STANDBY')).not.toBeInTheDocument()
  })

  it('shows system info when enabled', () => {
    render(<Timer showSystemInfo={true} />)

    expect(screen.getByText(/SYSTEM UPTIME/)).toBeInTheDocument()
    expect(screen.getByText(/CPU/)).toBeInTheDocument()
    expect(screen.getByText(/MEM/)).toBeInTheDocument()
  })

  it('calls onTimeUpdate when provided', async () => {
    vi.useFakeTimers()
    const onTimeUpdate = vi.fn()
    render(<Timer onTimeUpdate={onTimeUpdate} />)

    const startButton = screen.getByLabelText('Start timer')

    await act(async () => {
      fireEvent.click(startButton)
    })

    // Advance timers to trigger the interval
    await act(async () => {
      vi.advanceTimersByTime(100)
    })

    expect(onTimeUpdate).toHaveBeenCalled()
    vi.useRealTimers()
  })

  it('starts and pauses timer when button is clicked', async () => {
    render(<Timer />)

    const toggleButton = screen.getByLabelText('Start timer')

    await act(async () => {
      fireEvent.click(toggleButton)
    })
    expect(screen.getByLabelText('Pause timer')).toBeInTheDocument()

    const pauseButton = screen.getByLabelText('Pause timer')
    await act(async () => {
      fireEvent.click(pauseButton)
    })
    expect(screen.getByLabelText('Start timer')).toBeInTheDocument()
  })

  it('resets timer when reset button is clicked', async () => {
    render(<Timer />)

    const resetButton = screen.getByLabelText('Reset timer')
    await act(async () => {
      fireEvent.click(resetButton)
    })

    expect(screen.getByText('00:00.00')).toBeInTheDocument()
  })

  it('handles keyboard shortcuts', async () => {
    render(<Timer />)

    // Start with spacebar
    await act(async () => {
      fireEvent.keyDown(window, { key: ' ' })
    })
    expect(screen.getByLabelText('Pause timer')).toBeInTheDocument()

    // Reset with R key
    await act(async () => {
      fireEvent.keyDown(window, { key: 'r' })
    })
    expect(screen.getByText('00:00.00')).toBeInTheDocument()
    expect(screen.getByLabelText('Start timer')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Timer />)

    const timer = screen.getByRole('timer')
    expect(timer).toHaveAttribute('aria-label', 'Timer at 00:00.00')
    expect(timer).toHaveAttribute('aria-live', 'off')

    const startButton = screen.getByLabelText('Start timer')
    expect(startButton).toHaveAttribute('aria-pressed', 'false')

    const resetButton = screen.getByLabelText('Reset timer')
    expect(resetButton).toBeInTheDocument()

    const fastForwardButton = screen.getByLabelText('Hold to fast forward')
    expect(fastForwardButton).toBeInTheDocument()
  })
})