import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import axios from 'axios'

// // 选项式写法：
// // 分别暴露
// export const useTalkStore = defineStore('talk', {
//   state() {
//     return {
//       // ###### 获取从本地浏览器的localStorage中保存的土味情话,当本地浏览器没有数据的话，为[]空数组。
//       talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
//     }
//   },

//   actions: {
//     async getATalk() {
//       try {
//         // 1. 发送请求: (下面使用了双重解构得到content后,并重命名为title)
//         let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//         // 2. 把请求回来的字符串包装成一个对象: 下面的title是属性名和参数名相同,引发简写
//         let obj = { id: nanoid(), title }
//         this.talkList.unshift(obj)
//       } catch (error) {
//         console.log(error.message)
//       }
//     },
//   }
// })


// ######## 本节内容：组合式写法
import { reactive } from 'vue'
export const useTalkStore = defineStore('talk', () => {
  // talkList就是上面的state
  let talkList = reactive(
    JSON.parse(localStorage.getItem('talkList') as string) || []
  )

  // getATalk函数相当于action
  async function getATalk() {
    try {
      // 1. 发送请求: (下面使用了双重解构得到content后,并重命名为title)
      let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // 2. 把请求回来的字符串包装成一个对象: 下面的title是属性名和参数名相同,引发简写
      let obj = { id: nanoid(), title }
      talkList.unshift(obj)
    } catch (error) {
      console.log(error.message)
    }
  }

  // 千万别忘记return
  return { talkList, getATalk }
})