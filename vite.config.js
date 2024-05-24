import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.68.174:8090",
        rewrite: (path) => path.replace(/\/api/, ""),
      },
    },
  },
})
