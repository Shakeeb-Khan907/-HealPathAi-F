import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This configuration passes the API_KEY from Vercel to your code
export default defineConfig({
  plugins: [react()],
  define: {
    // We add || '' to prevent the build from crashing if the key isn't momentarily available
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
});