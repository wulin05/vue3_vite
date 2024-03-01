// 创建一个路由器,并暴露出去

// 第一步: 引入createRouter; 这里补充下：Vue3必须引入路由的工作模式,并且使用,不然在创建路由器的时候会报错
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 第三部: 引入一个一个的路由组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'

// 第二步: 创建路由器,管理一条一条的路由条目
const router = createRouter({
  history: createWebHashHistory(),  // 路由器的工作模式(后续章节单独讨论):createWebHistory、createWebHashHistory
  routes: [   // 一个一个的路由规则
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News
    },
    {
      name: 'guanyu',
      path: '/about',
      component: About,
    }
  ]
})

// 最后一步：别忘了将router暴露出去...
export default router