/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // The TanStack Router Vite plugin should be placed before the React plugin.
    tanstackRouter({
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // The use of '__dirname' is not available in ES modules.
      // Instead, we use 'import.meta.url' to get the current module's URL
      // and 'fileURLToPath' to convert it to a file system path.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // Example setup file
  },
  build: {
    // This is a generic setting for Vercel.
    // TanStack Start's plugin simplifies this, but for a standard setup this is a good practice.
    outDir: 'dist',
  },
})