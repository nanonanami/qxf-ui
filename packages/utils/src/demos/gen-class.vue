<script setup lang="ts">
import {useClassnames} from "../gen-class"
import {ref} from 'vue'
const {c,cm,ce} = useClassnames("button")
const testRef = ref(false)
const handleClick = () => {
    testRef.value = !testRef.value
}

</script>
<template>
    <div :class="c('primary')">
        {{ c('a',ce('b'),cm('primary')) }}
        <button @click="handleClick">按钮</button>
    </div>
</template>
