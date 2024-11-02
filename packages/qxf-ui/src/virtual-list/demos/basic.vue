<docs>
---
title:基本使用
---
这是一个虚拟列表的基本例子
</docs>
<script setup lang="ts">
import {ref} from 'vue'
const data = Array.from({length:1000}).map((_,index) =>{
    return {
        id: index + 1,
        name:`Test` + `_${index+1}`
    }
})
function handleClick(item: any) {
    console.log(item)
}
</script>

<template>
      <div>
    <t-virtual-list :data="data" @click-item="handleClick">
      <template #item="{ item }">
        <div class="data-item">
          {{ item.name }}
        </div>
      </template>
    </t-virtual-list>
  </div>
</template>
<style scoped>
.data-item{
  height: 100%;
  display: flex;
  align-items: center;
}
</style>