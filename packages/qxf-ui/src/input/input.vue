<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import {useClassnames} from  '@qxf-ui-study/utils'
import { InputProps,originInputProps } from './interface'
import {omit,pick} from 'lodash-es'
defineOptions({
  name: 'TInput',
  inheritAttrs:false
})
const props = defineProps<InputProps>()
const emit = defineEmits<{
  'update:modelValue':[string]
}>()
defineSlots<{
  prefix(): any
  suffix(): any
}>()
const { cx, c, cm, ce } = useClassnames('input')
const inputRef = ref<HTMLInputElement>()

const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
    [c(cm(props.size!))]: !!props.size,
  }
})

const inputCls = cx(() => {
  return {
    [c('input')]: true,
  }
})

function setInputValue() {
  const _input = inputRef.value
  if (!_input || _input.value === props.modelValue)
    return

  _input.value = props.modelValue ?? ''
}

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement
  if (props.modelValue === target.value)
    return
  emit('update:modelValue', target.value)
  nextTick(() => {
    setInputValue()
  })
}
onMounted(() => {
  setInputValue()
})
function focus() {
  inputRef.value?.focus()
}

function blur() {
  inputRef.value?.blur()
}
defineExpose({
  focus,
  blur,
})
</script>

<template>
  <div :class="cls" v-bind="omit($attrs, originInputProps)">
    <span v-if="$slots.prefix" :class="c(ce('prefix'))">
      <slot name="prefix" />
    </span>
    <input ref="inputRef" v-bind="pick($attrs, originInputProps)" :disabled="disabled" :class="inputCls" :value="modelValue" @input="handleInput">
    <span v-if="$slots.suffix" :class="c(ce('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>
