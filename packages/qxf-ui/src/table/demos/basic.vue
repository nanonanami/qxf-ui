<docs>
---
title: 基本使用
---

这是一个表格的基本例子
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '年龄',
    key: 'age',
  },
  {
    title: '住址',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
  },
])

const data = ref(Array.from({ length: 10 }).map((_, index) => {
  return {
    name: `张三${index + 1}`,
    age: 22 + index,
    address: `北京市海淀区 1028 号${index + 1}`,
    action: index % 2 === 0 ? '删除' : '保存',
  }
}))
</script>

<template>
  <div>
    <t-table :data="data">
      <t-table-column key="name" title="姓名" />
      <t-table-column key="age" title="年龄" />
      <t-table-column key="address" title="住址" />
      <t-table-column key="action" title="操作" />
    </t-table>
    <t-table :data="data" :columns="columns" />
  </div>
</template>
