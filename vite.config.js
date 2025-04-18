import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: "v8",
      extension: [".jsx"],
      reporter: ['text', 'json-summary', 'json'],
    },
  },
});
