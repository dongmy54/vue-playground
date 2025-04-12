// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js' // 对于index.js文件，可以省略 和 ./router等价
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
