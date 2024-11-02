import { defineConfig } from 'vite'
import {vitepressDemo} from "vite-plugin-vitepress-demo"
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import alias from './alias'
import Component from 'unplugin-vue-components/vite'
import {qxfUIResolver} from './scripts/qxf-ui-resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      glob:["**/demos/*.vue"]
    }),
    Component({
      resolvers:[
        qxfUIResolver(),
      ],
    }),
    vueJsx(),
    tsxResolveTypes()
  ],
  resolve:{
    alias,
  },
})
