import type { App } from 'vue'
import Table from './table'
import { TableColumn } from './table-column'

(Table as any).install = (app: App) => {
  app.component(Table.name, Table)
  app.component(TableColumn.displayName, TableColumn)
}

export default Table
