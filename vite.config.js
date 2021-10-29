import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    svelte(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    }
  },
  base: './'
})
