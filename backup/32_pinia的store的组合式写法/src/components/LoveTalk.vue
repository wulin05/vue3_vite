<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="LoveTalk">
  import { useTalkStore } from '../store/loveTalk'

  const talkStore = useTalkStore()
  console.log('*************', talkStore.$state)
  
  // ##### .$subscribe（订阅）:当状态发生变化时，Pinia 会调用订阅函数，并将变化后的状态作为参数传递给订阅函数。
  talkStore.$subscribe((mutate,state) => {
    // mutate没什么用, ##### state参数代表当前的 talkStore 的 store 状态(数据)。
    // console.log('talkStore里面保存的数据发生了变化', mutate,state.talkList)
    // localStorage.setItem('talkList', state.talkList) // 直接存state.talkList会有问题,将数组存到浏览器存储,需要转换成字符串才可以
    localStorage.setItem('talkList', JSON.stringify(state.talkList))
  })

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