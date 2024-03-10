<template>
  <div class="count">
    <h2>当前求和为: {{ countStore.sum }}</h2>
    <!-- 在这里有个坑：数字+字符串; 两种方式解决：v-model.number 和 :value="1" -->
    <select v-model.number="n">
      <!-- <option :value="1">1</option> -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script lang="ts" setup name="Count">
  import {ref} from 'vue'
  // ###### 引入store中count的统一暴露
  import {useCountStore} from '../store/count'

  let n = ref(1) 

  // ###### 作用是创建一个与 count 存储库关联的存储库实例，
  // 可以使用该实例来访问存储库中的状态（state）、方法（actions）和 getters。
  const countStore = useCountStore()
  
  // ###### 接收: 以下两种方式都可以拿到state中的数据
  console.log('@@@@@@', countStore.sum)
  console.log('######', countStore.$state.sum)

  // 方法
  function add(){
    // sum.value += n.value
    countStore.sum += n.value
  }
  function minus(){
    // sum.value -= n.value
    countStore.$state.sum -= n.value
  }

</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }

  select,button {
    margin: 0 3px;
    height: 25px;
  }
</style>