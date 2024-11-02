<docs>

---
title:按钮大小
---
size属性设置按钮大小
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
    <t-button size="small" @click="handleClick">
      按钮2
    </t-button>
    <t-button size="large" @click="handleClick">
      按钮3
    </t-button>
  </div>
</template>
