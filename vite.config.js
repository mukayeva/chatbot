import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/api/chat': {
  //       target: 'https://api.psnext.info',
  //       changeOrigin: true,
  //     },
  //   }
  // }
})
