<docs>
---
title:禁用按钮
---
disabled为true即可禁用button
</docs>
<script setup lang="ts">
const handleClick = () =>{
    console.log('1111111')
}
</script>
<template>
      <div>
    <t-button disabled @click="handleClick">
      按钮1
    </t-button>
    <t-button disabled type="dashed" @click="handleClick">
      按钮2
    </t-button>
    <t-button disabled type="primary" @click="handleClick">
      按钮3
    </t-button>
  </div>
</template>
