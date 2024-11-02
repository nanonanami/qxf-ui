import {purple,green,red,gold} from '@ant-design/colors'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'
console.log(purple)
let colors = ''
purple.forEach((color,index) => {
    colors += `--qxf-color-primary-${index+1}:${color};\n`
})
colors += `\n`
green.forEach((color,index) => {
    colors += `--qxf-color-success-${index+1}:${color};\n`
})
colors += `\n`
gold.forEach((color,index) => {
    colors += `--qxf-color-warning-${index+1}:${color};\n`
})
colors += `\n`
red.forEach((color,index) => {
    colors += `--qxf-color-error-${index+1}:${color};\n`
})
console.log(colors)

const baseUrl = fileURLToPath(new URL('../',import.meta.url))
const cssFile = path.resolve(baseUrl, 'packages/qxf-ui/src/style/theme/colors.css')
fs.writeFileSync(cssFile,`:root{\n${colors}\n}`)
console.log("success")