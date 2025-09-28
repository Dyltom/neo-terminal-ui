import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input, Textarea } from '../Input'

describe('Input Component', () => {
  describe('Basic Input', () => {
    it('renders with default props', () => {
      render(<Input placeholder="Test input" />)

      const input = screen.getByPlaceholderText('Test input')
      expect(input).toBeInTheDocument()
      expect(input).toHaveClass('terminal-input')
    })

    it('renders with label', () => {
      render(<Input label="Username" placeholder="Enter username" />)

      expect(screen.getByLabelText('Username')).toBeInTheDocument()
      expect(screen.getByText('Username')).toBeInTheDocument()
    })

    it('handles input changes', () => {
      const handleChange = vi.fn()
      render(<Input onChange={handleChange} />)

      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: 'test value' } })

      expect(handleChange).toHaveBeenCalledTimes(1)
    })

    it('forwards ref correctly', () => {
      const ref = vi.fn()
      render(<Input ref={ref} />)

      expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement))
    })

    it('applies custom className', () => {
      render(<Input className="custom-class" />)

      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('custom-class')
    })
  })

  describe('Terminal Input Variant', () => {
    it('renders with terminal styling', () => {
      render(<Input terminal label="Command" placeholder="Enter command" />)

      expect(screen.getByText('> Command')).toBeInTheDocument()
      expect(screen.getByText('$')).toBeInTheDocument()

      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('pl-6') // padding for $ symbol
    })

    it('renders terminal prefix in label', () => {
      render(<Input terminal label="Terminal" />)

      expect(screen.getByText('> Terminal')).toBeInTheDocument()
    })

    it('has proper terminal input styling', () => {
      render(<Input terminal />)

      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('terminal-input')
    })
  })

  describe('Error State', () => {
    it('renders error message', () => {
      render(<Input error="Invalid input" label="Test" />)

      expect(screen.getByText('> ERROR: Invalid input')).toBeInTheDocument()
    })

    it('applies error styling', () => {
      render(<Input error="Error" />)

      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border-matrix-red', 'text-matrix-red')
    })

    it('shows error message with animation', () => {
      render(<Input error="Test error" />)

      const errorMessage = screen.getByText('> ERROR: Test error')
      expect(errorMessage).toHaveClass('animate-pulse')
    })
  })

  describe('Success State', () => {
    it('renders success message', () => {
      render(<Input success label="Valid" />)

      expect(screen.getByText('> SUCCESS')).toBeInTheDocument()
    })

    it('applies success styling', () => {
      render(<Input success />)

      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('border-matrix-green-100', 'text-matrix-green-100')
    })

    it('does not show success when error is present', () => {
      render(<Input success error="Has error" />)

      expect(screen.queryByText('> SUCCESS')).not.toBeInTheDocument()
      expect(screen.getByText('> ERROR: Has error')).toBeInTheDocument()
    })
  })

  describe('Focus Behavior', () => {
    it('applies glow styling when focused', () => {
      render(<Input />)

      const input = screen.getByRole('textbox')
      fireEvent.focus(input)

      expect(input).toHaveClass('shadow-glow-green-soft')
    })

    it('removes glow styling on blur', () => {
      render(<Input />)

      const input = screen.getByRole('textbox')
      fireEvent.focus(input)
      fireEvent.blur(input)

      expect(input).not.toHaveClass('shadow-glow-green-soft')
    })
  })

  describe('Cursor Display', () => {
    it('shows cursor when withCursor prop is true and focused', () => {
      render(<Input withCursor />)

      const input = screen.getByRole('textbox')
      fireEvent.focus(input)

      // The cursor span should be visible
      expect(document.querySelector('.cursor')).toBeInTheDocument()
    })

    it('hides cursor when not focused', () => {
      render(<Input withCursor />)

      const input = screen.getByRole('textbox')
      fireEvent.focus(input)
      fireEvent.blur(input)

      // The cursor should not be visible when not focused
      expect(document.querySelector('.cursor')).not.toBeInTheDocument()
    })
  })

  describe('Disabled State', () => {
    it('is disabled when disabled prop is true', () => {
      render(<Input disabled />)

      const input = screen.getByRole('textbox')
      expect(input).toBeDisabled()
    })

    it('applies terminal-input styling with disabled state', () => {
      render(<Input disabled />)

      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('terminal-input')
    })
  })

  describe('Input Types', () => {
    it('renders different input types correctly', () => {
      const { rerender } = render(<Input type="text" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text')

      rerender(<Input type="email" />)
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email')

      rerender(<Input type="number" />)
      expect(screen.getByRole('spinbutton')).toHaveAttribute('type', 'number')

      rerender(<Input type="password" />)
      expect(screen.getByDisplayValue('')).toHaveAttribute('type', 'password')
    })
  })
})

describe('Textarea Component', () => {
  describe('Basic Textarea', () => {
    it('renders with default props', () => {
      render(<Textarea placeholder="Enter text" />)

      const textarea = screen.getByPlaceholderText('Enter text')
      expect(textarea).toBeInTheDocument()
      expect(textarea.tagName).toBe('TEXTAREA')
    })

    it('renders with label', () => {
      render(<Textarea label="Description" />)

      expect(screen.getByText('Description')).toBeInTheDocument()
    })

    it('applies Matrix styling', () => {
      render(<Textarea />)

      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('border-matrix-green-100/30', 'text-matrix-green-100', 'font-mono')
    })

    it('forwards ref correctly', () => {
      const ref = vi.fn()
      render(<Textarea ref={ref} />)

      expect(ref).toHaveBeenCalledWith(expect.any(HTMLTextAreaElement))
    })
  })

  describe('Terminal Textarea Variant', () => {
    it('renders with terminal prefix in label', () => {
      render(<Textarea terminal label="System Log" />)

      expect(screen.getByText('> System Log')).toBeInTheDocument()
    })

    it('applies proper terminal styling', () => {
      render(<Textarea terminal />)

      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('font-mono')
    })
  })

  describe('Textarea Error State', () => {
    it('renders error message', () => {
      render(<Textarea error="Invalid format" />)

      expect(screen.getByText('> ERROR: Invalid format')).toBeInTheDocument()
    })

    it('applies error styling', () => {
      render(<Textarea error="Error" />)

      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('border-matrix-red', 'text-matrix-red')
    })
  })

  describe('Textarea Focus Behavior', () => {
    it('applies focus styling', () => {
      render(<Textarea />)

      const textarea = screen.getByRole('textbox')
      fireEvent.focus(textarea)

      expect(textarea).toHaveClass('focus:border-matrix-green-100')
    })
  })

  describe('Textarea Accessibility', () => {
    it('has proper accessibility attributes', () => {
      render(<Textarea label="Message" placeholder="Enter message" />)

      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('placeholder', 'Enter message')
    })

    it('supports custom rows', () => {
      render(<Textarea rows={10} />)

      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveAttribute('rows', '10')
    })
  })

  describe('Textarea Styling', () => {
    it('has scrollbar styling classes', () => {
      render(<Textarea />)

      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('scrollbar-terminal')
    })

    it('applies custom className', () => {
      render(<Textarea className="custom-textarea" />)

      const textarea = screen.getByRole('textbox')
      expect(textarea).toHaveClass('custom-textarea')
    })
  })
})