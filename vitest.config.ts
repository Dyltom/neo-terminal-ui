import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    css: true,
    // Memory optimization settings
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
        isolate: true,
      }
    },
    maxConcurrency: 2,
    maxWorkers: 2,
    minWorkers: 1,
    testTimeout: 10000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@lib': resolve(__dirname, './src/lib'),
      '@styles': resolve(__dirname, './src/styles'),
      '@types': resolve(__dirname, './src/types'),
    },
  },
})