import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared': '/src/shared',
      '@app': '/src/app',
      '@assets': '/src/assets',
      '@entities': '/src/entities',
      '@features': '/src/features',
      '@pages': '/src/pages',
      '@widgets': '/src/widgets',
    }
  }
})
