import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 从localStorage获取初始计数值，如果不存在则默认为0
  const count = ref(parseInt(localStorage.getItem('counter-count') || '0'))
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
    // 将更新后的值保存到localStorage
    localStorage.setItem('counter-count', count.value.toString())
  }

  return { count, doubleCount, increment }
})
