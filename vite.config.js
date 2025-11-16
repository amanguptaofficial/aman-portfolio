import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',        // ← IMPORTANT for Netlify
  server: {
    port: 3000,
    open: true
  }
})
