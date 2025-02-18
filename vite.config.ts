import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './001', // Set root for challenge 001
  build: {
    outDir: 'dist/001' // Specify output directory for build
  },
  server: {
    open: true // Automatically open the browser
  }
});
