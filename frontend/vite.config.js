import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    // 5173 a 5177 sont pris par les cinq autres applis
    port: 5178
  }
})
