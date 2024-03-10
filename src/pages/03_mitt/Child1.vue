<template>
  <div class="child1">
    <h3>子组件1</h3>
    <h4>玩具: {{ toy }}</h4>
    <button @click="emitter.emit('getChild1Toy', toy)">玩具给Child2组件</button>
  </div>
</template>

<script lang="ts" setup name="Child1">
  import {ref} from 'vue'
  // ###### 要触发emitter的getChild1Toy事件,当然也需要引入啦...
  import emitter from '@/utils/emitter'

  let toy = ref('奥特曼')
</script>

<style scoped>
  .child1{
    margin-top: 50px;
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
  }

  .child1 button{
    margin-right: 10px;
  }
</style>