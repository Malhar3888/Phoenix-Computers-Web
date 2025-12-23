import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// choose backend url from env or fallback
const BACKEND = process.env.BACKEND_URL || process.env.VITE_BACKEND_URL || 'http://localhost:5000'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // proxy /api to backend
      '/api': {
        target: BACKEND,
        changeOrigin: true,
        secure: false,
        // if backend expects cookies, set this to false and use withCredentials in axios
        cookieDomainRewrite: 'localhost'
      }
    }
  }
})
