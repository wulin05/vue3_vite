// 引入pinia的小仓库(或叫经理)defineStore, 来实现落地、或叫具体的管理。
import { defineStore } from 'pinia'

// 可以借鉴hooks的文件名命名方式: useXxxYyy, 所以是useCountStore; 后面的'count'只是一个唯一标识符，用于标识 Pinia 存储库。
const useCountStore = defineStore('count', {
  // state是真正存储数据的地方,必须使用函数,而且有返回值return
  state() {
    return {
      sum: 5,
      school: 'atJapan',
      address: 'Tokyo'
    }
  },

  // getters：对数据进行加工
  getters: {
    // bigSum(state) {
    //   return state.sum * 10
    // },
    bigSum: state => state.sum * 10,
    upperSchool() {
      return this.school.toUpperCase()
    }
  },

  // actions里面放置的是一个一个的方法,用于响应组件中的"动作": 加减乘除...
  actions: {
    increment(value: number) {
      // 注意：this是当前的store、即useCountStore
      // console.log('~~~~~~~~~~', this)
      if (this.sum < 10) {
        this.sum += value
      }
    },

    decrement(value: number) {
      if (this.sum > 0) {
        this.sum -= value
      }
    },

  }
})

// 统一暴露
export { useCountStore }
