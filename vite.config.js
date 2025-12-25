import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // или true
    port: 5173,
    hmr: {
      clientPort: 5173 // Попробуйте указать порт для HMR
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  base: 'sinkvane-react'
})
