<template>
  <div>
    <h1>父组件控制视频播放</h1>
    
    <h4>当前播放次数：{{ counter.count }}</h4>
    <button @click="counter.increment">播放次数+1</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'

// 这里需要先调用后再使用
const counter = useCounterStore()
</script>
