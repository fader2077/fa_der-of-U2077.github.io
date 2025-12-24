import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // For <USERNAME>.github.io - change to '/<REPO>/' if using project page
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
