<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具: {{ toy }}</h4>
    <h4>父给的车: {{ car }}</h4>
    <button @click="sendToy(toy)">把玩具给父亲</button>

    <!-- 下面是配合被注释的部分 -->
    <!-- <button @click="fasongToy(toy)">把玩具给父亲</button> -->
  </div>
</template>

<script lang="ts" setup name="Child">
  import {ref} from 'vue'
  // 数据
  let toy = ref('奥特曼')
  // 声明接收props: car是Father组件传过来的cardata数据, sendToy是Father传过来的函数
  defineProps(['car', 'sendToy'])

  // // 或者用一个变量去接收Father传过来的数据和函数：
  // let props = defineProps(['car', 'sendToy'])
  // // 然后去写一个方法：
  // function fasongToy(value:string) {
  //   props.sendToy(value)
  // }

</script>

<style scoped>
  .child{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
  }
</style>