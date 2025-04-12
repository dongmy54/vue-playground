<script setup>
  import { ref, defineProps, defineEmits } from 'vue'
  defineProps(['title'])
  const count = ref(0)
  // 定义发送事件
  const emit = defineEmits(['enlarge-text'])
  function enlargeText() {
    emit('enlarge-text')
  }
</script>

<template>
  <button @click="count++;enlargeText()">你点击了我 {{ count }} 次</button>
  <h4>{{ title }}</h4>
  <slot></slot> <!-- 用于接收父组件的插槽内容 -->
</template>
