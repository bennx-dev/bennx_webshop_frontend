import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/webshop",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:60400",
        changeOrigin: true
      }
    }
  }
})