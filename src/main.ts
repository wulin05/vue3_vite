import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

/* 
在03_mitt中去使用utils默认暴露的emitter 
这个就相当于全局都使用mitt了(比如在utils的emitter.ts中的测试),
也可以只在某些组件中使用(比如就在03_mitt的几个组件中使用),所以这里注释掉了.
*/
// import emitter from './utils/emitter'

// 创建应用
const app = createApp(App)
// 创建pinia
const pinia = createPinia()

// 安装插件
app.use(pinia)
// 安装路由器
app.use(router)
// 挂载使用
app.mount('#app')