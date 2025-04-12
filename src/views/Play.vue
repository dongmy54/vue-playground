<template>
  <div>
    <h1>父组件控制视频播放</h1>
    
    <h4>当前播放次数：{{ counter.count }}</h4>
    <button @click="counter.increment">播放次数+1</button>
    <p>{{ $translate('greetings.hello') }} 小董</p>
    <p>appVersion: {{ appVersion }}</p>
    <LoginView />
  </div>
</template>

<script setup>
  import { useCounterStore } from '../stores/counter'
  import LoginView from '../views/LoginView.vue'
  import { inject, provide } from 'vue' // 先引入inject
  // 这里需要先调用后再使用
  const counter = useCounterStore()
  const appVersion = inject('appVersion')

  provide('appName', 'Vue 3 App') // 提供数据给子组件
</script>
