<docs>
---
title: 输入框聚焦
---

使用`ref`获取到`input`的`dom`元素，然后调用`focus`方法即可
</docs>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const value = ref('')
const inputRef = ref()

onMounted(() => {
  inputRef.value.focus()
})
</script>

<template>
  <div>
    <t-input ref="inputRef" v-model="value" />
  </div>
</template>
