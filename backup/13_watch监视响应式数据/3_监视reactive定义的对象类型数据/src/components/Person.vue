<template>
  <div class="person">
    <h2>情况三、监视【reactive】定义的【对象类型】数据</h2>
    <hr>
    <h3>姓名: {{ person.name }}</h3>
    <h3>年龄: {{ person.age }}</h3>
    <hr>
    <button @click="changeName">修改名字</button>
    <span>&nbsp;&nbsp;</span>
    <button @click="changeAge">修改年龄</button>
    <span>&nbsp;&nbsp;</span>
    <button @click="changePerson">修改整个person</button>

  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive,watch } from 'vue'
  // 数据
  let person = reactive({
    name: '张三',
    age: 18
  })

  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changePerson() {
    // reactive定义的对象类型,需要通过Object.assign整体修改才能维持响应式
    Object.assign(person, { name: '李四', age: 99 })
  } 

  // 监视【reactive】定义的【对象类型】数据,默认开启深度监视,并且是不能关闭深度监视。(隐式地创建深度监听)
  watch(person, (newVal, oldVal) => {
    console.log('person对象变化了', newVal, oldVal)
  })   // 
</script>


<!-- <style scoped>
button {
  margin-right: 10px; /* 调整右边距 */
}
</style> -->