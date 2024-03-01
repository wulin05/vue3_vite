// 创建一个路由器,并暴露出去

// 第一步: 引入createRouter; 这里补充下：Vue3必须引入路由的工作模式,并且使用,不然在创建路由器的时候会报错
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

// 第三部: 引入一个一个的路由组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/News.vue'
import Detail from '../views/Detail.vue'

// 第二步: 创建路由器,管理一条一条的路由条目
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
    },
    {
      name: 'xinwen',
      path: '/news',
      component: News,
      children: [
        {
          name: 'xiangqing',
          path: 'detail/:id/:title/:content?',  // ### 注意了,params传数据,路由需要占位; ?是用来当News.vue不给Detail传content数据的时候,不会报错
          component: Detail,
        }
      ],
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