<template>
  <div class="app">
    <h2 ref="title2">你好~~~</h2>
    <button @click="showLog" style="background-color: goldenrod">测试</button>
    <hr>
    <!-- 此处的ref是给Person子组件打了ref标签,通过ren.value获取到Person组件的数据... -->
    <Person ref="ren"></Person>
  </div>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { ref } from 'vue'

let title2 = ref()
let ren = ref()

function showLog() {
  console.log('#####', title2.value)
  console.log('%%%%%', ren.value)
}
</script>

<style scoped>
.app {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>