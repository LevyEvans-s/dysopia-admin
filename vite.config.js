import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({})
  ],
  server: {
    host:'localhost',
    port:3001
  },
  resolve: {
    alias: {
      "@":path.resolve(__dirname, "src")
    }
  }
})
