import { defineComponent } from 'vue'
import { useClassnames } from '@qxf-ui-study/utils'
import { BodyProps } from './interface'

export const Body = defineComponent<BodyProps>({
  setup(props = { columns: [], data: [] }) {
    const { c } = useClassnames('table')
    return () => {
      const { columns, data } = props
      const cellCls = {
        [c('cell')]: true,
        [c('body-cell')]: true,
      }
      const renderCell = (item: any) => {
        return columns?.map((v) => {
          return (
            <td class={cellCls}>{item[v.key]}</td>
          )
        })
      }
      const rowCls = {
        [c('body-row')]: true,
      }
      const renderData = () => {
        return data?.map((v) => {
          return (
            <tr class={rowCls}>
              {renderCell(v)}
            </tr>
          )
        })
      }
      const cls = {
        [c('body')]: true,
      }
      return (
        <tbody class={cls}>
          {renderData()}
        </tbody>
      )
    }
  },
})
