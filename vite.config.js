import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/D:/AAF_Web/Source_Code/asiaassetfinance',
  server: {
    https: {
      key: './key.pem',
      cert: './cert.pem',
    },
  },
  plugins: [
    react(),
    Pages(),
  ],
})
