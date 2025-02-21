import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist' // Specify output directory for build
  },
  server: {
    open: true // Automatically open the browser
  }
});
