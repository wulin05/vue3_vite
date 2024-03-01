<template>
  <!-- 配合Person.vue的3点传数据使用：为了说明 :list="5"这样传数据,就下面一行,ts会提醒类型错误 -->
  <!-- <Person a="哈哈" :personList="personList" :list="5" /> -->

  <!-- 配合Person.vue的4点传数据使用：为了说明App通过Person子组件标签传数据personList给Person.vue的时候,
    Person.vue那边通过 withDefaults、defineProps的使用,实现：接收数据 + 限制类型 + 限制必要性 + 指定默认值
  -->
  <Person a="哈哈" :personList="personList" />
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { reactive } from 'vue'
import { type Persons } from './types'

// let personList:Persons = reactive([   // 这样是错误的,正确使用泛型如下：
let personList = reactive<Persons>([
  { id: 'aa001', name: '张三', age: 18 },
  { id: 'aa002', name: '李四', age: 19 },
  { id: 'aa003', name: '王五', age: 20, x: 99 },
])

console.log('*****', personList)
</script>