// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Appp from './App.vue'
import router1 from './router/index.js' // 对于index.js文件，可以省略 和 ./router等价
import 'element-plus/dist/index.css'
import i18n from './plugin/i18n'

const app = createApp(Appp)

app.use(createPinia())
app.use(router1)
// 使用插件
app.use(i18n, {
  greetings: {
    hello: '你好',
    morning: '早上好'
  }
})

app.provide('appVersion', '1.0.0')
app.mount('#app')
