# Button 按钮
<demo src="./demos/basic.vue"></demo>
<demo src="./demos/disabled.vue"></demo>
<demo src="./demos/size.vue"></demo>

## 属性

| 属性     | 说明               | 类型                     | 默认值  |
| -------- | ------------------ | ------------------------ | ------- |
| type     | 设置按钮的类型     | `default`\|`primary`\|`dashed` | default |
| size     | 设置按钮的大小     | `default`\|`small`\|`large`    | default |
| disabled | 设置按钮的禁用状态 | Boolean                  | false   |

## 事件

| 事件  | 说明                 | 类型                  |
| ----- | -------------------- | --------------------- |
| click | 点击的时候触发的事件 | (event:Event) => void |