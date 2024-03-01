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
          path: 'detail/:id/:title/:content?',    // ### 注意了,params传数据,路由需要占位; ?是用来当News.vue不给Detail传content数据的时候,不会报错
          component: Detail,
          /*
          ###本节内容、路由的props参数：可以更优雅地让Detail路由组件接收路由传数据  
             本质：通过props参数,可以让路由的【query、params传参】可以当做props传给路由组件,
             路由组件通过defineProps就能够便捷地接收~~~  

          1.第一种写法：将路由接收到的【所有params参数】作为props传给路由组件
          */
          // props: true,

          /*
          2.第二种写法(函数写法)：可以自己决定将什么【意味着也可以是query传参】作为props给Detail路由组件

            关键: 由于News.vue是用params传参,自然数据是保存在route.params上,所以用return route.params; 
                  如果News.vue是用query,那么这边就要 return route.query
                  如果News.vue是用query传参,上面的path就要改成 path：'detail'。

            但,其实,使用props的函数写法,更利于News.vue用query传参,如果是用params传参的话,这边的props就用第一种写法 props:ture 更简单。。
            由于本节都是说params,所以就保持params的写法,不然将News.vue改成query传参,回头再看的时候还以为写错了...

            总之就是这么一句话：News.vue的query或params传参 是与 index.ts的path、props的写法是关联的
          */
          props(route) {   // route是形参,接收的是route实参,所以形参route用其他字符都可以,写route是标准写法,也能一看就知道接收的是route实参
            return route.params
            // return route.query
          }

          /*
          3.第三种写法(对象写法): 限制死了数据,基本不用这种写法
            而且,貌似必须是用query传参,path:'detail'的方式,Detail那边defineProps才能接收到数据...
          */
          // props: {
          //   a: 100,
          //   b: 200,
          //   c: 300
          // }

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