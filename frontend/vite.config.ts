import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8004",
        changeOrigin: true,
      },
    },
    port: 3000
  },
  build: {
    outDir: "../backend/static",
  }
})
