
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:3000,
  },
  plugins: [react()],
  test:{
    environment:"jsdom",
    globals:true,
    setupFiles:'./src/setupTest.js',
    css:true,
  }
})
