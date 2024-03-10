<template>
  <div class="count">
    <h2>当前求和为: {{ countStore.sum }}</h2>
    <h2>当前求和为: {{ sum }}</h2>
    <h2>欢迎来到{{ countStore.school }}, 地址是: {{ countStore.address }}</h2>
    <h2>欢迎来到{{ school }}, 地址是: {{ address }}</h2>
    <!-- ###### 本节getters内容 -->
    <h3>sum放大10倍后: {{ bigSum }}</h3>
    <h3>school名大写为: {{ upperSchool }}</h3>
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
  import {ref,toRefs} from 'vue'
  import {useCountStore} from '../store/count'
  import { storeToRefs } from 'pinia';

  let n = ref(1) 

  const countStore = useCountStore()
  console.log('countStore接收useCountStore暴露的内容', countStore)
  // 解构赋值,简化模板的插值语法: 注意解构赋值会丢失响应式,所以用toRefs解决
  // 但使用toRefs代价非常大：将countStore所有属性和方法使用ref包裹
  // 所以,pinia提供了storeToRefs,只关注数据,不关注方法:
  // const {sum, school, address} = toRefs(countStore)
  // ###### bigSum、upperSchool是通过getters处理的...
  let {sum, school, address, bigSum, upperSchool} = storeToRefs(countStore)

  function add(){
    // 第一种修改方式：注意对比,Vuex是不能对拿到的数据直接这么修改的...
    // countStore.sum += n.value

    // 第二种修改方式：
    // countStore.$patch({
    //   sum: 888,
    //   school: '野鸡大学',
    //   address:'犄角旮旯'
    // })

    // 第三种修改方式:
    countStore.increment(n.value)
  }

  function minus(){
    // countStore.$state.sum -= n.value
    // 当然,这么简单的逻辑直接用上面的就好,
    // 只是为了说明可以通过调用store里定义的decremnet方法实现：
    countStore.decrement(n.value)
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