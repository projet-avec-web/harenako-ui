import { defineConfig } from 'cypress';

const REQUEST_TIMEOUT = 10000;

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const codeCoverageTask = await import('@cypress/code-coverage/task');
      codeCoverageTask.default(on, config);

      return config;
    },
    baseUrl: 'http://localhost:5173/#',
    requestTimeout: REQUEST_TIMEOUT,
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    async setupNodeEvents(on, config) {
      const codeCoverageTask = await import('@cypress/code-coverage/task');
      codeCoverageTask.default(on, config);

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
  },
  },
});
