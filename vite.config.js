import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  }, 
  base: process.env.VITE_BASE_PATH || "/linkedin-vibe-check",
})