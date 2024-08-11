import { defineConfig } from 'vitest/config';
import viteCfg from './vite.config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  ...viteCfg,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
  },
});
