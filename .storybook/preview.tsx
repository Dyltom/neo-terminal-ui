import type { Preview } from "@storybook/react";
import React from "react";
import "../src/styles/globals.css";

// Create a wrapper component for the Matrix theme
const MatrixThemeDecorator = (Story: any) => {
  React.useEffect(() => {
    // Apply global styles to the document body
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.background = '#0a0a0a';
    document.body.style.fontFamily = "'Share Tech Mono', monospace";
    document.body.style.color = '#00ff41';

    // Add Google Fonts if not already added
    if (!document.querySelector('link[href*="Share+Tech+Mono"]')) {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-matrix-black relative overflow-hidden"
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        padding: '2rem',
        position: 'relative',
        fontFamily: "'Share Tech Mono', monospace",
        color: '#00ff41'
      }}
    >
      {/* CRT Monitor Effect Background */}
      <div
        className="crt-effect"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      {/* Story Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Story />
      </div>
    </div>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'matrix-black',
      values: [
        {
          name: 'matrix-black',
          value: '#0a0a0a',
        },
        {
          name: 'matrix-dark',
          value: '#001100',
        },
      ],
    },
    layout: 'fullscreen',
  },
  decorators: [MatrixThemeDecorator],
};

export default preview;