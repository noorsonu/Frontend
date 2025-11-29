import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/uploads': {
        target: 'https://backend-afsa.onrender.com',
        changeOrigin: true,
        secure: true
      },
      '/api/uploads': {
        target: 'https://backend-afsa.onrender.com',
        changeOrigin: true,
        secure: true
      }
    }
  }
})
