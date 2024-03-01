<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
  import {reactive} from 'vue'
  import {nanoid} from 'nanoid'
  import axios from 'axios';

  // 数据
  let talkList = reactive([
    {id:nanoid(), title:'你今天有点怪,哪里怪?怪好看的!'},
    {id:nanoid(), title:'草莓、蓝莓、蔓越莓,今天想我了没?'},
    {id:nanoid(), title:'心里给你留了一块地,我的死心塌地!'},
  ])

  // 方法
  async function getLoveTalk() {
    try {
      // 发送请求: (下面使用了双重解构得到content后,再次重命名为title)
      let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      console.log(title)
      // 把请求回来的字符串包装成一个对象: 下面的title是属性名和参数名相同,引发简写
      let obj = { id: nanoid(), title }
      talkList.unshift(obj)
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