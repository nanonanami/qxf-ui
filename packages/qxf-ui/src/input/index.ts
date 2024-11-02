import Input from './input.vue'
import {App} from 'vue'
Input.install = (app:App) =>{
    app.component(Input.name,Input)
}

export default Input