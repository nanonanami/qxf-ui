import VirtualList from './virtual-list'
import {App} from 'vue'

VirtualList.install = (app:App) =>{
    app.component(VirtualList.name,VirtualList)
}

export default VirtualList