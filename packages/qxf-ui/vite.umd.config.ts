import { fileURLToPath,URL } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))
export default defineConfig({
  plugins: [
    vueJsx(),
    tsxResolveTypes(),
    vue(),
  ],
  resolve: {
    alias: [
      {
        find: /^@qxf-ui-study\/utils/,
        replacement: path.resolve(baseUrl, '../utils/src'),
            },
        ],
    },
    build: {
    rollupOptions: {
        external: ['vue'],
        output: {
        exports: 'named',
        globals: {
            vue: 'vue',
        },
        },
    },
    lib: {
        entry: 'src/index.ts',
        formats: ['umd'],
        fileName: () => 'qxf-ui.js',
        name: 'qxfUI',
        },
    },
})