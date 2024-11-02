import { fileURLToPath,URL } from 'url'
import path from 'path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import less from 'less'

const qxfDir = fileURLToPath(new URL('../packages/qxf-ui', import.meta.url))

const lessFiles = fg.sync([
  'src/**/style/index.less',
  '!src/style',
], {
  cwd: qxfDir,
})

async function complie() {
  for (const file of lessFiles) {
    const filePath = path.resolve(qxfDir, file)
    const lessCode = fs.readFileSync(filePath, 'utf-8')

    const cssCode = await less.render(lessCode, {
      paths: [path.dirname(filePath)],
    })
    const esDir = path.resolve(qxfDir, `./es${file.slice(3, file.length - 4)}css`)
    const libDir = path.resolve(qxfDir, `./lib${file.slice(3, file.length - 4)}css`)
    fs.outputFileSync(esDir, cssCode.css)
    fs.outputFileSync(libDir, cssCode.css)
  }
}
complie()
// console.log(lessFiles)