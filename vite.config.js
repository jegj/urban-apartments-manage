import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'frontend',
  build: {
    manifest: true,
    outDir: '../public',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'frontend/main.js'),
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
});
