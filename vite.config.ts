import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env,
    },
    plugins: [
      istanbul({
        extension: ['.js', '.ts', '.jsx', '.tsx'],
        requireEnv: false, // You can set this to true if you want to require an environment variable
        nycrcPath: './.nycrc.json',
        cypress: true,
      }),
      react(),
    ],
  };
});
