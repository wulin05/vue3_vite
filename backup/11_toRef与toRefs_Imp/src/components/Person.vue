<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄：{{ age }}、{{ nl }}</h2>
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive, toRefs, toRef} from 'vue'

  let person = reactive({
    name: '张三',
    age: 18
  })

  // 1. 对象的解构赋值：let name = person.name ; let age = person.age, name和age只是自定义的普通数据。
  // let {name, age} = person     // name = '张三', age = 18

  // 3. 使用toRefs的对象解构赋值：
  let {name, age} = toRefs(person)
  console.log('#####', toRefs(person))   // {name: ObjectRefImpl, age: ObjectRefImpl}

  // 6. 补充下toRef的用法：
  let nl = toRef(person, 'age')
  console.log('55555', nl)     // nl: ObjectRefImpl

  function changeName(){
    // 2. 在1的情况下去查看name、person.name的值
    // name += '~'
    // console.log('11111', name, person.name)

    // 4. 在3的正确方式下, 修改person.name、person.age的值会反应到name、age上,
    // 但是修改name、age的值是不引起person.name、person.age的变化的
    name.value += '~'
    console.log('33333', name)   // 输出是 name:ObjectRefImpl
  }

  function changeAge(){
    // 2. 在1的情况下去查看age、person.age的值
    // age += 1
    // console.log('22222', age, person.age)

    // 4. 在3的正确方式下,age与person.age的响应式数据相关联(双向关联)：age和person.age都会改变
    age.value += 1
    console.log('44444', age)   // 输出是 age:ObjectRefImpl
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