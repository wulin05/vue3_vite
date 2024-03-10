<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
  // import {nanoid} from 'nanoid'
  // import axios from 'axios'
  import { useTalkStore } from '../store/loveTalk'

  const talkStore = useTalkStore()
  console.log('talkStore接收useTalkStore暴露的内容', talkStore)

  // 方法: getLoveTalk的具体功能放到loveTalk.ts中去啦~~~
  // async function getLoveTalk() {
  //   try {
  //     // 1. 发送请求: (下面使用了双重解构得到content后,并重命名为title)
  //     let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  //     // 2. 把请求回来的字符串包装成一个对象: 下面的title是属性名和参数名相同,引发简写
  //     let obj = { id: nanoid(), title }
  //     talkStore.talkList.unshift(obj)
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }
  function getLoveTalk() {
    talkStore.getATalk()
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