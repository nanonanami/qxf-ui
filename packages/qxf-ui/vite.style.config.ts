import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import fs from 'fs-extra'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: () => 'qxf-ui.css',
      },
    },
    lib: {
      entry: 'src/styles.ts',
      formats: ['es'],
      fileName: () => 'qxf-ui-style.js',
    },
  },
  plugins: [
    {
      name: 'remove:qxf-ui-style.js',
      closeBundle() {
        const qxfPath = fileURLToPath(new URL('./dist', import.meta.url))
        const styleFilePath = path.resolve(qxfPath, 'qxf-ui-style.js')
        fs.removeSync(styleFilePath)
      },
    },
  ],
})