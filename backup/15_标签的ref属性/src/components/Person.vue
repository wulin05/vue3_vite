<template>
  <div class="person">
    <h1>China</h1>
    <!-- ref="title2"表示给h2 Dom元素打了ref标签; 在App.vue的h2 Dom元素上也打了ref标签,但是两种不冲突 -->
    <h2 ref="title2">Fuzhou</h2>
    <h3 class="test01">xiaoqinghua</h3>
    <button @click="showLog" style="background-color: green">点我输出h2这个元素</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from 'vue'
// ##### 引入defineExpose,让父组件可以通过子组件标签上的ref获取到子组件的数据
import { defineExpose } from 'vue'

// 创建一个title2,用于存储ref标记的内容
let title2 = ref()

let a = ref(0)
let b = ref(1)
let c = ref(2)

function showLog() {
  // console.log(document.querySelector('#title2'))
  // console.log(document.querySelector('.test01'))
  // // console.log(document.getElementById('title2'))
  console.log('*****', title2.value)
}

// ##### 通过defineExpose将子组件的数据expose出去,a和b数据暴露给父组件
// (因为App父组件中在Person子组件标签上使用了ref,所以父组件可以获取到a,b)
defineExpose({ a, b })

</script>

<style scoped>
.person {
  background-color: gainsboro;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>