import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mf1',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button.vue',
        './MicroApp': './src/components/MicroApp.vue',
      },
      shared: ['vue']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5001
  },
  preview: {
    port: 5001
  }
})
