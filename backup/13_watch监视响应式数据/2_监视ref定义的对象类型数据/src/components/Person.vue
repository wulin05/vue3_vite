<template>
  <div class="person">
    <h2>情况二、监视【ref】定义的【对象类型】数据</h2>
    <hr>
    <span>下面是不使用toRef/toRefs情况下的插值语法</span>
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
  import { ref, toRef, toRefs,watch } from 'vue'
  // 数据
  let person = ref({
    name: '张三',
    age: 18
  })

  // 这里是为了说明,使用了toRef、toRefs可以关联响应式数据,实现双向同步
  // const {name, age} = toRefs(person.value)
  // const name = toRef(person.value, 'name')
  // const age = toRef(person.value, 'age')

  function changeName() {
    // name.value += '~'
    person.value.name += '~'
  }
  function changeAge() {
    // age.value += 1
    person.value.age += 1
  }
  function changePerson() {
    person.value = {name:'李四', age:99}
  } 

  // 监视【ref】定义的【对象类型】数据,监视的是整个person的地址值,若想监视对象内部属性的变化,需要手动开启深度监视
  watch(person, (newVal, oldVal) => {
    console.log('person对象变化了', newVal, oldVal)
  },{deep:true, immediate:true})   // 如果不加(deep:true)这个配置对象,只监视整个person对象的变化(地址变化)
</script>


<!-- <style scoped>
button {
  margin-right: 10px; /* 调整右边距 */
}
</style> -->