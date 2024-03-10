import { defineStore } from 'pinia'
import { nanoid } from 'nanoid'

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
})