<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!-- <script lang="ts">
  export default {
    name: 'Person'
  }
</script> -->

<!-- setup语法糖: 
  1. 在script中用setup、name配置就好了,
  2. 关于name的配置需要安装一个插件：npm i vite-plugin-vue-setup-extend -D
  3. 使用vite-plugin-vue-setup-extend插件：在vite.config.ts中配置
  上述完成后,就可以看到vue-tool中是Person234组件名了
-->
<script lang="ts" setup name="Person">
  import {ref} from 'vue'

  // 数据
  let name = ref('张三')   
  let age = ref(18)       
  let tel = '07015961688'  
  let address = '东南小清华' 

  console.log('11111111', name)
  console.log('22222222', age)
  console.log('33333333', tel)
  console.log('44444444', address)

  // 方法
  function showTel(){
    alert(`联系方式是: ${tel}`)
  }
  function changeName() {
    name.value = 'zhang-san'   // 注意：这样修改name,页面是没有变化的,虽然name确实修改了,但是name不是响应式。
  }
  function changeAge() {
    age.value += 1
  }

</script>

<style>
  .person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
</style>