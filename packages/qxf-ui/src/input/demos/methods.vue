<docs>
---
title: 基础使用
---

这是一个`input`基础使用的例子
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
    value: {{ value }}
    <t-input ref="inputRef" v-model="value" test autocomplete="off" size="large">
      <template #prefix>
        A
      </template>
      <template #suffix>
        B
      </template>
    </t-input>
    <t-input v-model="value" size="small">
      <template #prefix>
        A
      </template>
      <template #suffix>
        B
      </template>
    </t-input>
    <t-input v-model="value">
      <template #prefix>
        A
      </template>
      <template #suffix>
        B
      </template>
    </t-input>
  </div>
</template>
