import { defineConfig } from 'cypress';

const REQUEST_TIMEOUT = 10000;

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      /* end to end test configurations are writing here*/
    },
    baseUrl: 'http://localhost:5173/#',
    requestTimeout: REQUEST_TIMEOUT,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
