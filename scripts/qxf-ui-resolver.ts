import { ComponentResolver } from 'unplugin-vue-components/types'

export function qxfUIResolver(): ComponentResolver {
    return {
        type: 'component',
        resolve(name) {
        if (name.startsWith('T')) {
        return {
            name: name.slice(1),
            from: 'qxf-ui',
                }
            }
        },
    }
}
