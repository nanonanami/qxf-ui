import type { App, Plugin } from 'vue'
import pkg from '../package.json'
import * as components from './components'

// import qxf from "qxf-ui"
// app.use(qxf)
// import { Button } from "qxf-ui"
export * from './components'
export default {
  install(app: App) {
    Object.entries(components).forEach(([_name, comp]) => {
      if ((comp as any).install)
        app.use(comp as any)
    })
  },
  version: pkg.version,
} as Plugin