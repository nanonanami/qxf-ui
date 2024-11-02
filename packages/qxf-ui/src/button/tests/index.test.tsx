import {mount} from "@vue/test-utils"
import {Button} from 'qxf-ui'
describe('button', () => {
    it('should work', () =>{
        const wrapper = mount(<Button type="primary">测试</Button>)
        const btnEl = wrapper.find('button')
        const hasPrimary = btnEl.element.classList.contains("qxf-button--primary")
        expect(hasPrimary).toBe(true)
        wrapper.unmount()

    })
    it('size',() =>{
        const wrapper = mount(<Button size="small">测试</Button>)
        const btnEl = wrapper.find('button')
        expect(btnEl.element.classList.contains("qxf-button-size--small")).toBe(true)
        wrapper.unmount()
    })
    it("click", () =>{
        let clickState = false
        const handleClick = () =>{
            clickState = true
        }
        const wrapper = mount(<Button onClick={handleClick}>测试</Button>)
        wrapper.trigger('click')
        expect(clickState).toBe(true)
        wrapper.unmount()
    })
})