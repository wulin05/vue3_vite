// 引入createApp用于创建应用
import { createApp } from 'vue'
//引入App根组件
import App from './App.vue'

// 第一步：引入pinia、注意是 createPinia
import { createPinia } from 'pinia'

const app = createApp(App)

// 第二步: 创建pinia
const pinia = createPinia()

// 第三步: 安装pinia
app.use(pinia)

app.mount('#app')