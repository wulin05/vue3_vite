<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>汽车: {{ cardata }}</h4>
    <h4 v-show="toy">子给的玩具: {{ toy }}</h4>
    <Child :car="cardata" :sendToy="getToy"/>
  </div>
</template>

<script lang="ts" setup name="Father">
  import Child from './Child.vue'
  import {ref} from 'vue'
  // 数据
  let cardata = ref('奔驰')
  let toy = ref('')  // 用来接收子传过来的玩具

  // 方法
  function getToy(value:string) {
    // console.log('父', value)
    toy.value = value
  }
</script>

<style scoped>
  .father{
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
</style>