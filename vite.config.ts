import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import FullReload from 'vite-plugin-full-reload'

export default defineConfig({
  plugins: [react(), FullReload(['src/**/*.scss'])],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
