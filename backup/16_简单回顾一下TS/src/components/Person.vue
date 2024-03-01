<template>
  <div class="person">
    ???
  </div>
</template>

<script lang="ts" setup name="Person">
// PersonInter、Persons是类型规范,所以引入的时候得用type前缀
import { type PersonInter, type Persons } from '../types'


let person: PersonInter = { id: 'fdajfla001', name: '张三', age: 60 }

// let personList:Array<PersonInter> = [
let personList: Persons = [
  { id: 'fdajfla001', name: '张三', age: 60 },
  { id: 'fdajfla002', name: '李四', age: 70 },
  { id: 'fdajfla003', name: '王五', age: 80 }
]

</script>

<style scoped>
.person {
  background-color: gainsboro;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>