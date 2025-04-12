<template>
  <div>
    <video 
      ref="videoElement" 
      width="400" 
      src="https://www.w3schools.com/html/mov_bbb.mp4" 
    ></video>
    <button @click="play">播放</button>
    <button @click="pause">暂停</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const videoElement = ref(null)  // 存储 video DOM 元素

// 子组件的方法
function play() {
  alert("start play")
  videoElement.value.play()  // 调用 HTML5 video 的 play()
}

function pause() {
  videoElement.value.pause()  // 调用 HTML5 video 的 pause()
}

// 暴露方法给父组件
defineExpose({
  play,
  pause
})
</script>
