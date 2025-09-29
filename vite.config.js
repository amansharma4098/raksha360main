import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',           // ensure assets are referenced from root
  server: { port: 3000 }
})
