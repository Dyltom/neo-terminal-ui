import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Terminal } from '../Terminal'

describe('Terminal Component', () => {
  describe('Input Field Styling', () => {
    it('applies terminal-input CSS class for Matrix theming', () => {
      const lines = [
        { type: 'system' as const, content: 'SYSTEM ONLINE', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="test$"
          onCommand={() => {}}
        />
      )

      const input = screen.getByRole('textbox')

      // This test would have caught the missing terminal-input class
      expect(input).toHaveClass('terminal-input')
    })

    it('input field has proper Matrix green color styling', () => {
      const lines = [
        { type: 'output' as const, content: 'Ready for input', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="matrix$"
          onCommand={() => {}}
        />
      )

      const input = screen.getByRole('textbox')

      // Check that input has terminal-input class which contains Matrix styling
      expect(input).toHaveClass('terminal-input')

      // Check for caret color
      expect(input).toHaveClass('caret-[#00ff41]')
    })

    it('input field responds to focus with Matrix glow effect', () => {
      const lines = [
        { type: 'command' as const, content: 'ls -la', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="user@matrix:~$"
          onCommand={() => {}}
        />
      )

      const input = screen.getByRole('textbox')

      // Test focus behavior
      fireEvent.focus(input)

      // Should have terminal-input class which includes focus styles
      expect(input).toHaveClass('terminal-input')
      expect(input).toHaveFocus()
    })

    it('input field has proper caret color for Matrix theme', () => {
      const lines = [
        { type: 'system' as const, content: 'Terminal initialized', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="neo$"
          onCommand={() => {}}
        />
      )

      const input = screen.getByRole('textbox')

      // Check for Matrix green caret
      expect(input).toHaveClass('caret-[#00ff41]')
    })

    it('handles input changes while maintaining Matrix styling', () => {
      const handleCommand = vi.fn()
      const lines = [
        { type: 'output' as const, content: 'Welcome to the Matrix', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="matrix$"
          onCommand={handleCommand}
        />
      )

      const input = screen.getByRole('textbox')

      // Type a command
      fireEvent.change(input, { target: { value: 'whoami' } })
      expect(input).toHaveValue('whoami')

      // Press Enter to execute command
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

      // Command should be called
      expect(handleCommand).toHaveBeenCalledWith('whoami')

      // Input should be cleared after command
      expect(input).toHaveValue('')

      // Should still have Matrix styling
      expect(input).toHaveClass('terminal-input')
    })

    it('maintains Matrix styling when disabled', () => {
      const lines = [
        { type: 'system' as const, content: 'System locked', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="locked$"
          onCommand={() => {}}
          disabled
        />
      )

      const input = screen.getByRole('textbox')

      // Should still have Matrix styling even when disabled
      expect(input).toHaveClass('terminal-input')
      expect(input).toBeDisabled()
    })
  })

  describe('Terminal Component Integration', () => {
    it('renders prompt and input with consistent Matrix styling', () => {
      const lines = [
        { type: 'system' as const, content: 'Neo Terminal v2.0', timestamp: new Date() },
        { type: 'output' as const, content: 'All systems operational', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="neo@matrix:~$"
          onCommand={() => {}}
        />
      )

      // Check prompt is displayed
      expect(screen.getByText('neo@matrix:~$')).toBeInTheDocument()

      // Check input has Matrix styling
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('terminal-input')

      // Check that the parent container has Matrix styling
      const container = input.closest('.text-matrix-green-100')
      expect(container).toBeInTheDocument()
    })

    it('cursor animation works with Matrix theme', () => {
      const lines = [
        { type: 'command' as const, content: 'echo "Hello Matrix"', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="$"
          onCommand={() => {}}
          showCursor={true}
        />
      )

      // Check that cursor element exists with Matrix styling
      const cursor = document.querySelector('.cursor')
      expect(cursor).toBeInTheDocument()
      expect(cursor).toHaveClass('animate-blink')
    })
  })

  describe('Visual Regression Prevention', () => {
    it('maintains consistent Matrix green color scheme', () => {
      const lines = [
        { type: 'system' as const, content: 'MATRIX TERMINAL ONLINE', timestamp: new Date() },
        { type: 'output' as const, content: 'file1.txt file2.txt', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="matrix$"
          onCommand={() => {}}
        />
      )

      // Check that terminal content is rendered
      expect(screen.getByText('MATRIX TERMINAL ONLINE')).toBeInTheDocument()
      expect(screen.getByText('file1.txt file2.txt')).toBeInTheDocument()

      // Check prompt styling
      expect(screen.getByText('matrix$')).toBeInTheDocument()

      // Check input has terminal styling
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('terminal-input')

      // Check that terminal container has Matrix styling
      const terminalContainer = input.closest('[class*="matrix"]')
      expect(terminalContainer).toBeInTheDocument()
    })
  })
})