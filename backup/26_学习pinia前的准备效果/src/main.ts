// 引入createApp用于创建应用
import { createApp } from 'vue'
//引入App根组件
import App from './App.vue'

createApp(App).mount('#app')

// 上面一行可以拆解为下面两行：
// const app = createApp(App)
// app.mount('#app')