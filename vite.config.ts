import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: '/react-switcher',
  resolve: {
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
});
