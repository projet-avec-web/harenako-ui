import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    istanbul({
      extension: ['.js', '.ts', '.jsx', '.tsx'],
      requireEnv: false, //process.env.VITE_NODE_ENV !== 'test', // Enable coverage for test env
      nycrcPath: './.nycrc.json',
      cypress: true,
    }),
    react(),
  ],
});
