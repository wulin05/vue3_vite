import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'
import axios from 'axios'

export const useTalkStore = defineStore('talk', {
  state() {
    return {
      talkList: [
        { id: nanoid(), title: '你今天有点怪,哪里怪?怪好看的!' },
        { id: nanoid(), title: '草莓、蓝莓、蔓越莓,今天想我了没?' },
        { id: nanoid(), title: '心里给你留了一块地,我的死心塌地!' },
      ]
    }
  },

  actions: {
    async getATalk() {
      try {
        // 1. 发送请求: (下面使用了双重解构得到content后,并重命名为title)
        let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        // 2. 把请求回来的字符串包装成一个对象: 下面的title是属性名和参数名相同,引发简写
        let obj = { id: nanoid(), title }
        this.talkList.unshift(obj)
      } catch (error) {
        console.log(error.message)
      }
    },

  }
})