// 引入createApp用于创建应用
import { createApp } from 'vue'
//引入App根组件
import App from './App.vue'

// ### 1. 引入路由器
import router from './router'

// ### 2. 这时候要将下面的这行进行拆解：
// createApp(App).mount('#app')

// ### 3. 创建一个应用
const app = createApp(App)

// ### 4. app应用使用路由器
app.use(router)

// ### 5. 挂载整个应用到app容器中
app.mount('#app')