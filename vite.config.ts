import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // Dev only: forward /api requests to the `vercel dev` server (port 3000)
  // so the serverless function works while running the normal Vite dev server.
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
})
