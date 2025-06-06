import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    allowedHosts: ['bba1-2409-40e0-1b-6deb-6d4f-41c9-af88-673a.ngrok-free.app'],
  },
})
