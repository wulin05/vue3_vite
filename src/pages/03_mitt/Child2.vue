<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑: {{ computer }}</h4>
    <!-- ###### 展示通过给emitter绑定的getChild1Toy事件, Child1触发该事件,将toy数据传给Child2 -->
    <h4 v-show="toy">Child1组件给的玩具: {{ toy }}</h4>
  </div>
</template>

<script lang="ts" setup name="Child2">
  import {ref, onUnmounted} from 'vue'
  let computer = ref('IBM')
  // 接收Child1.vue传过来的玩具toy
  let toy = ref('')

  // 引入utils目录的emitter.ts文件的emitter
  import emitter from '@/utils/emitter'

  // 给emitter绑定getChild1Toy事件,让想给Child2组件数据的其他组件去触发,并且参数value就是触发该事件时,带的数据
  emitter.on('getChild1Toy', (value:string) => {
    console.log('getChild1Toy', value)
    toy.value = value
  }) 

  // 但是记得,在卸载的时候要将getChild1Toy事件解绑哦~~
  onUnmounted(() => {
    emitter.off('getChild1Toy')
  })

</script>

<style scoped>
  .child2{
    margin-top: 50px;
    background-color: orange;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
  }
</style>