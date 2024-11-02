<docs>
---
title: 基本使用
---

这是notification的基本使用
</docs>

<script setup lang="ts">
import { Notification } from 'qxf-ui'
import { getCurrentInstance, h } from 'vue'
import Test from './components/test.vue'

const instance = getCurrentInstance()
function info() {
  Notification.info({
    title: '通知',
    content: h(Test),
    appContext: instance?.appContext,
  })
}
</script>

<template>
  <div>
    <t-button @click="info">
      弹框
    </t-button>
  </div>
</template>
