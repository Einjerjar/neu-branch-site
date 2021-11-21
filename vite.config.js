import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
import _css from 'rollup-plugin-css-only'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    WindiCSS(),
    // _css({output: 'assets/common.css'}),
    svelte(),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    }
  },
  base: './'
})
