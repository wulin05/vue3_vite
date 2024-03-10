<template>
  <div class="father">
    <h3>父组件</h3>
    <button @click="test(5,6,$event)">点我</button>
    <!-- 给Child子组件绑定一个send-toy的自定义事件 -->
    <Child @send-toy="saveToy"/>
    <!-- 通过子组件触发send-toy自定义事件,让父组件回调saveToy方法,得到子组件传过来的数据 -->
    <h4 v-show="toy">子给的玩具: {{ toy }}</h4>
  </div>
</template>

<script lang="ts" setup name="Father">
  import Child from './Child.vue'

  // 接收子通过触发自定义事件传过来的toy
  import {ref} from 'vue'
  let toy = ref('')

  function test(a:number, b:number, c:Event) {
    console.log('test', a,b,c)
  }

  // 自定义事件send-toy的回调函数saveToy
  function saveToy(value:string) {
    // console.log('saveToy',value)
    toy.value = value
  }

</script>

<style scoped>
  .father{
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .father button{
    margin-right: 5px;
  }
</style>