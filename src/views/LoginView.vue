<script setup>
import { ref, inject } from 'vue'
import p1 from './p1.vue'
import p2 from './p2.vue'

const components = {
  p1: p1,
  p2: p2
}
const currentTab = ref("p1")
const appName = inject('appName')

</script>

<template>
  <h3>app name: {{ appName }}</h3>
  <button @click="currentTab = 'p1'">p1</button>
  <button @click="currentTab = 'p2'">p2</button>
  <component :is="components[currentTab]"></component>
</template>
