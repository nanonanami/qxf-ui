<docs>

---
title:基础使用
---

这是一个基础使用的例子
</docs>
<script setup lang="ts">
const handleClick = () =>{
    console.log('1111111')
}
</script>
<template>
      <div>
    <t-button @click="handleClick">
      按钮1
    </t-button>
    <t-button type="dashed" @click="handleClick">
      按钮2
    </t-button>
    <t-button type="primary" @click="handleClick">
      按钮3
    </t-button>
  </div>
</template>
