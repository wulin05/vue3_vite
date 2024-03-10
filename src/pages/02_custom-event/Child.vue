<template>
  <div class="child">
    <h3>子组件</h3>
    <button @click="emit('send-toy', toy)">测试</button>
  </div>
</template>

<script lang="ts" setup name="Child">
  import {ref, onMounted} from 'vue'

  let toy = ref('奥特曼')

  // 必须通过下面的宏函数defineEmits声明接收父组件给本组件绑定的自定义send-toy事件; 并赋给emit
  const emit = defineEmits(['send-toy'])
  
  // // 通过生命周期钩子,让该组件挂载3秒钟后触发haha事件
  // onMounted(() => {
  //   setTimeout(() => {
  //     emit('haha')
  //   }, 3000);
  // })

</script>

<style scoped>
  .child{
    margin-top: 10px;
    background-color: rgb(76, 209, 76);
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
  }
</style>