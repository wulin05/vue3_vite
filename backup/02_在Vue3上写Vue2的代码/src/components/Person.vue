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
  // Vue2：选项式配置Options风格
  export default {
    name: 'Person',
    data() {
      return {
        name: '张三',
        age: 18,
        tel: '07015951688',
      }
    },
    methods: {
      showTel(){
        alert(`联系方式是: ${this.tel}`)
      },
      changeName(){
        this.name = 'zhang-san'
      },
      changeAge(){
        this.age += 1
      } ,
    },
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