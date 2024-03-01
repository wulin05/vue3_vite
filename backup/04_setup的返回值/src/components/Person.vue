<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
    // 数据,Vue2是写在data中的,Vue3是写在setup中的,但
    // 此时的name,age,tel都不是响应式的,意味着上面的button按钮并不能修改name,age
    setup() {
      let name = '张三'   
      let age = 18       
      let tel = '07015961688'   

      function showTel(){
        alert(`联系方式是: ${tel}`)
      }
      function changeName() {
        name = 'zhang-san'   // 注意：这样修改name,页面是没有变化的,虽然name确实修改了,但是name不是响应式。
      }
      function changeAge() {
        age += 1
      }

      return {name, age, showTel, changeName, changeAge}
      // setup的返回值也可以是一个函数,这边使用了箭头函数
      // return ()=> '哈哈'
    }

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