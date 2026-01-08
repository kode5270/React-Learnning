import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',           //these two are required for component tests to work
    globals: true,                  //these two are required for component tests to work
    setupFiles: './setupTests.js',  //Run the code inside this file before all of our testt
  }
});