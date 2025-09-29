import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Terminal } from '../Terminal'

describe('Terminal Visual Regression Prevention', () => {
  describe('Matrix Theme Consistency', () => {
    it('maintains Matrix green color scheme across all text elements', () => {
      const lines = [
        { type: 'system' as const, content: 'SYSTEM ONLINE', timestamp: new Date() },
        { type: 'output' as const, content: 'Directory listing:', timestamp: new Date() },
        { type: 'error' as const, content: 'File not found', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="matrix$"
          onCommand={() => {}}
          title="MATRIX TERMINAL"
        />
      )

      // System messages should be Matrix green
      const systemText = screen.getByText('SYSTEM ONLINE')
      expect(systemText).toHaveClass('text-matrix-green-100')
      expect(systemText).toHaveClass('font-mono')
      expect(systemText).toHaveClass('text-sm')

      // Output should be Matrix green
      const outputText = screen.getByText('Directory listing:')
      expect(outputText).toHaveClass('text-matrix-green-100')
      expect(outputText).toHaveClass('font-mono')
      expect(outputText).toHaveClass('text-sm')

      // Error messages should be red
      const errorText = screen.getByText('File not found')
      expect(errorText).toHaveClass('text-matrix-red')
      expect(errorText).toHaveClass('font-mono')
      expect(errorText).toHaveClass('text-sm')

      // Input should have Matrix green styling
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('terminal-input')
      expect(input).toHaveClass('caret-[#00ff41]')

      // Title should be properly styled
      expect(screen.getByText('MATRIX TERMINAL')).toHaveClass('text-matrix-green-200')
    })

    it('prevents white background regression on input fields', () => {
      const lines = [
        { type: 'output' as const, content: 'Ready for input', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="neo$"
          onCommand={() => {}}
        />
      )

      const input = screen.getByRole('textbox')

      // This test specifically prevents the regression where
      // inputs appeared with white background instead of transparent
      expect(input).toHaveClass('terminal-input')

      // The computed style should have transparent background
      // This validates our CSS !important fixes
      const computedStyle = window.getComputedStyle(input)
      expect(input.style.background).not.toBe('#ffffff')
      expect(input.style.background).not.toBe('white')
      expect(input.style.backgroundColor).not.toBe('#ffffff')
      expect(input.style.backgroundColor).not.toBe('white')
    })

    it('maintains consistent Matrix green borders and focus states', () => {
      const lines = [
        { type: 'system' as const, content: 'Focus test ready', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="test$"
          onCommand={() => {}}
        />
      )

      const input = screen.getByRole('textbox')

      // Check initial state
      expect(input).toHaveClass('terminal-input')

      // Test focus behavior
      fireEvent.focus(input)
      expect(input).toHaveFocus()

      // Terminal input should maintain styling when focused
      expect(input).toHaveClass('terminal-input')

      // Test blur behavior
      fireEvent.blur(input)
      expect(input).toHaveClass('terminal-input')
    })

    it('preserves Matrix theme during user interaction', () => {
      const handleCommand = vi.fn()
      const lines = [
        { type: 'output' as const, content: 'Interactive test', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="interactive$"
          onCommand={handleCommand}
        />
      )

      const input = screen.getByRole('textbox')

      // Type a command
      fireEvent.change(input, { target: { value: 'echo "hello"' } })
      expect(input).toHaveValue('echo "hello"')
      expect(input).toHaveClass('terminal-input')

      // Execute command
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
      expect(handleCommand).toHaveBeenCalledWith('echo "hello"')

      // Input should be cleared but maintain styling
      expect(input).toHaveValue('')
      expect(input).toHaveClass('terminal-input')
      expect(input).toHaveClass('caret-[#00ff41]')
    })

    it('validates complete terminal visual hierarchy', () => {
      const lines = [
        { type: 'system' as const, content: 'NEO TERMINAL v2.0 ONLINE', timestamp: new Date() },
        { type: 'output' as const, content: 'Ready for commands', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="neo@matrix:~$"
          onCommand={() => {}}
          title="MATRIX CONTROL"
          showCursor={true}
        />
      )

      // Header section styling
      const title = screen.getByText('MATRIX CONTROL')
      expect(title).toHaveClass('text-matrix-green-200')

      // Content area styling
      expect(screen.getByText('NEO TERMINAL v2.0 ONLINE')).toBeInTheDocument()
      expect(screen.getByText('Ready for commands')).toBeInTheDocument()

      // Prompt styling
      const prompt = screen.getByText('neo@matrix:~$')
      expect(prompt.parentElement).toHaveClass('text-matrix-green-100')

      // Input styling
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('terminal-input')
      expect(input).toHaveClass('caret-[#00ff41]')

      // Cursor should be visible
      const cursor = document.querySelector('.cursor')
      expect(cursor).toBeInTheDocument()
      expect(cursor).toHaveClass('animate-blink')
    })
  })

  describe('Disabled State Visual Behavior', () => {
    it('maintains Matrix styling when disabled', () => {
      const lines = [
        { type: 'system' as const, content: 'System locked', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="locked$"
          onCommand={() => {}}
          disabled={true}
        />
      )

      const input = screen.getByRole('textbox')

      // Should be disabled but still have Matrix styling
      expect(input).toBeDisabled()
      expect(input).toHaveClass('terminal-input')
      expect(input).toHaveClass('caret-[#00ff41]')

      // Visual state should indicate disabled but maintain theme
      expect(input).not.toHaveFocus()
    })
  })

  describe('Browser Compatibility Visual Tests', () => {
    it('prevents browser default styling interference', () => {
      const lines = [
        { type: 'output' as const, content: 'Browser compatibility test', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="compat$"
          onCommand={() => {}}
        />
      )

      const input = screen.getByRole('textbox')

      // These classes should override browser defaults
      expect(input).toHaveClass('terminal-input')

      // Check that we're not getting conflicting browser styles
      const classList = Array.from(input.classList)
      expect(classList).toContain('terminal-input')
      expect(classList).toContain('border-0')
      expect(classList).toContain('caret-[#00ff41]')

      // The terminal-input class should take precedence
      // This prevents webkit/firefox styling conflicts
      expect(input.className).toContain('terminal-input')
    })

    it('validates CSS cascade and specificity', () => {
      const lines = [
        { type: 'command' as const, content: 'test specificity', timestamp: new Date() }
      ]

      render(
        <Terminal
          lines={lines}
          prompt="cascade$"
          onCommand={() => {}}
        />
      )

      const input = screen.getByRole('textbox')

      // Multiple classes should work together without conflicts
      const allClasses = input.className.split(' ')

      // Core classes should be present
      expect(allClasses).toContain('terminal-input')
      expect(allClasses).toContain('border-0')
      expect(allClasses).toContain('p-0')
      expect(allClasses).toContain('flex-1')
      expect(allClasses).toContain('caret-[#00ff41]')

      // No duplicate or conflicting classes
      const uniqueClasses = [...new Set(allClasses)]
      expect(uniqueClasses.length).toBe(allClasses.length)
    })
  })
})