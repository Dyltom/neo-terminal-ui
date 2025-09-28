import '@testing-library/jest-dom'

// Polyfills for JSDOM to support Radix UI components
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Mock hasPointerCapture for Radix Select
if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false
}

if (!Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {}
}

if (!Element.prototype.releasePointerCapture) {
  Element.prototype.releasePointerCapture = () => {}
}

// Mock scrollIntoView
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {}
}