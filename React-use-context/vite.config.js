import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      // Ensure that the correct entry point is specified
      input: './src/main.jsx', // Adjust this if your entry file is different
      external: ['react', 'react-dom']
    
    }
  }
})
