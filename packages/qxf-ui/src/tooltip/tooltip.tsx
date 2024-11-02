import {defineComponent,computed} from 'vue'
import {ref,VNode,createVNode,PropType } from 'vue';
import {useFloating, offset} from '@floating-ui/vue';
import type {placement} from '@floating-ui/vue';
import {filterEmpty,isBaseType} from '@v-c/utils';
import {useClassnames} from  '@qxf-ui-study/utils'
export default defineComponent({
    name:"TTooltip",
    props:{
        placement:{
            type: String as PropType<placement>,
            default:'bottom-center'
        },
        content: {
            type: String as PropType<string>,
        },
        trigger: {
            type: String as PropType<'hover' | 'click'>,
            default:'hover'
        },
    },
    setup(props,{slots}){
        const reference = ref(null)
        const floating = ref(null)
        const show = ref(false)
        const placement = computed(() =>props.placement)
        const {c} = useClassnames('tooltip')
        const {floatingStyles} = useFloating(reference, floating,{
            placement,
            middleware:[offset(4)]
        });
        let timer: ReturnType<typeof setTimeout> | undefined
        const handleMouseEnter = () =>{
            if(props.trigger !== 'hover'){
                return
            }
            show.value = true
        }
        const handleClick = () =>{
            if(props.trigger !== 'click'){
                return
            }
            show.value = true
        }
        const handleMouseLeave = () =>{
            timer = setTimeout(() => {
                show.value = false
            }, 150);
            
        }
        return () => {
            const renderTooltip = () =>{
                if(!reference.value){
                    return null
                }
                if(!show.value){
                    return null
                }
                const cls = {
                    [c()]:true,
                }
                const events = {
                    onMouseenter: () => {
                        if (timer){
                            clearTimeout(timer)
                        }
                        timer = undefined
                    },
                    onMouseleave: () => {
                        show.value = false
                    },
                    
                }
                return <div {...events} class={cls} ref={floating} style={floatingStyles.value}>
                    {slots.content ? slots.content?.():props.content}
                    </div>
            }

            const children = filterEmpty(slots.default?.())
            if(children && children.length < 1){
                return null
            }
            if(children.length > 1){
                console.warn("TTooltip can only have one child")
                return children
            }
            const node = children[0]
            if(isBaseType(node)){
                console.warn('TTooltip must have a child component')
                return node
            }
            const events = {
                onMouseenter:handleMouseEnter,
                onMouseleave:handleMouseLeave,
                onClick:handleClick
            }
            const tipNode = createVNode(node as VNode,{
                ref:reference,
                ...events
            })
            return(
            <>
                {tipNode}
                {renderTooltip()}
            </>
            )
        }
    }
})