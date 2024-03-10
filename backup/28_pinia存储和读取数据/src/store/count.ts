// 引入pinia的小仓库(或叫经理)defineStore, 来实现落地、或叫具体的管理。
import { defineStore } from 'pinia'

// 可以借鉴hooks的命名方式: useXxx, 所以是useCountStore; 后面的'count'只是一个唯一标识符，用于标识 Pinia 存储库。
const useCountStore = defineStore('count', {
  // state是真正存储数据的地方,必须使用函数,而且有返回值return
  // 这样在store.state中就有了sum这个数据
  state() {
    return {
      sum: 6
    }
  },
})

// 统一暴露
export { useCountStore }

/*
默认暴露：
export default defineStore('count',{.....})
其他文件导入该store的方式：import useCountStore from './count'

分别暴露: 
export const useCountStore = defineStore('count', {.....}
其它文件导入该store的方式：import {useCountStore} from './count'
上面的统一暴露方式、其他文件导入的方式跟分别暴露一样。

从中可以看出：
默认暴露时, 其它文件导入使用的useCountStore名是自定义的,
其实也就是说useCountStore可以随意命名,而且不需要{}花括号

分别暴露、统一暴露时, 其它文件导入要使用{}花括号,并且接收的导入名
是由store文件中定义的：{useCountStore}; 也就是说这个useCountStore是固定的

*/