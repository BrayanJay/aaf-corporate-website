import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', //web shoulb be included
  server: {
    https: {
      key: './key.pem',
      cert: './cert.pem',
    },
  },
  plugins: [
    react(),
    Pages(),
    legacy({
      targets: ['defaults', 'not IE 11'], // Target older browsers
    }),
  ],
  build: {
    target: 'es2015',
    assetsInlineLimit: 0,
  },
})
