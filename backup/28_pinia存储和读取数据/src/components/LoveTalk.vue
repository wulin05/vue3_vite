<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
  import {nanoid} from 'nanoid'
  import axios from 'axios'
  import { useTalkStore } from '../store/loveTalk'

  // 原在这里定义的talkList数据转移到store的loveTalk.ts文件中了
  // let talkList = reactive([
  //   {id:nanoid(), title:'你今天有点怪,哪里怪?怪好看的!'},
  //   {id:nanoid(), title:'草莓、蓝莓、蔓越莓,今天想我了没?'},
  //   {id:nanoid(), title:'心里给你留了一块地,我的死心塌地!'},
  // ])

  // ###### 从(pinia)store的loveTalk.ts获取talkList数据
  const talkStore = useTalkStore()
  console.log('*********', talkStore.talkList[0])

  // 方法
  async function getLoveTalk() {
    try {
      // 1. 发送请求: (下面使用了双重解构得到content后,并重命名为title)
      let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // console.log("9999999999999",result.data.content)
      console.log("9999999999999",title)
      
      // 2. 把请求回来的字符串包装成一个对象: 下面的title是属性名和参数名相同,引发简写
      let obj = { id: nanoid(), title }
      talkStore.talkList.unshift(obj)
    } catch (error) {
      console.log(error.message)
    }
  }

</script>

<style scoped>
  .talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
</style>