import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    base: env.VITE_BASE_URL || '/',
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
      port: parseInt(env.VITE_PORT) || 5001
    },
    preview: {
      port: parseInt(env.VITE_PORT) || 5001
    }
  }
})
