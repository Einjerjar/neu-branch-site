import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
import _css from 'rollup-plugin-css-only'
import colors from 'windicss/colors'

// configure all current and new branch colors here
const BranchColors = {
  main: colors.blueGray,
  lipa: colors.lightBlue,
  pampanga: colors.teal,
  gensan: colors.rose,
}

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  // some magic so we can get the env variables from the .env file
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}

  return {
    plugins: [
      WindiCSS({
        config: {
          theme: {
            extend: {
              colors: {
                // reduces configuration, eyy
                primary: BranchColors[process.env.VITE_BRANCH_ID.toLowerCase()],
                ...BranchColors
              }
            }
          }
        }
      }),
      svelte(),
    ],
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      }
    },
    base: './'
  }
})
