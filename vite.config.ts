import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/arrangers/',
  plugins: [react()],
  resolve: {
    alias: {
      "$": path.resolve(__dirname, "./src/")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/scss/mixins" as *;`
      }
    }
  }
});
