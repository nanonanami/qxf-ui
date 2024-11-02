import { fileURLToPath,URL } from 'node:url'
import path from 'node:path'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default [
  {
    find: /^qxf-ui/,
    replacement: path.resolve(baseUrl, 'packages/qxf-ui/src'),
  },
  {
    find: /^@qxf-ui-study\/utils/,
    replacement: path.resolve(baseUrl, 'packages/utils/src'),
  },
  {
    find: /^@qxf-ui-study\/icons/,
    replacement: path.resolve(baseUrl, 'packages/icons/src'),
  },
]
