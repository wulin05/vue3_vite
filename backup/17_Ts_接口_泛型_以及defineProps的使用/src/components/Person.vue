<template>
  <div class="person">
    <!-- <h2>{{ a }}</h2> -->
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}--{{ p.age }}</li>
      <hr>
      <li v-for="p in list" :key="p.id">{{ p.name }}--{{ p.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
import { type Persons } from '../types'
import { defineProps } from 'vue'
import { withDefaults } from 'vue'

// 1. 接收App组件中通过Person组件标签传过来的数据a
// defineProps(['a'])


// 2. 接收a,同时将props保存起来; 该方式用的比较少
// let x = defineProps(['a'])
// console.log(x.a)

// 3. 接收App组件通过Person组件标签传过来的数据personList,并进行类型限制为Persons
//    接收App组件通过Person组件标签传过来的数据list,同样也进行类型限制为Persons
//    由于App组件传过来的数据personList,类型符合Persons,所以在App那边没问题,
//    但是传过来的数据list,(:list="5")类型不符合Persons,所以在App那边报错。即、报错是正常的
// defineProps<{ personList: Persons, list: Persons }>()

// 4. 接收数据 + 限制类型 + 限制必要性 + 指定默认值: 
// 用withDefaults将defineProps包裹起来,然后在{}定义当App没有传personList和list数据过来的时候,自己设定默认值
// 默认值要使用函数,带有返回值,所以可以用箭头函数。
withDefaults(defineProps<{ personList?: Persons, list?: Persons }>(), {
  personList: () => [{ id: 'aa099', name: 'wulin', age: 77 }],
  list: () => [{ id: 'aa100', name: 'linwu', age: 88 }],
})
/*
  总结就是：
    (1) withDefaults+箭头函数部分 是设置默认值;
    (2) defineProps 是接收数据;
    (3) ? 是限制必要性(可传可不传:意思就是App.vue那边不传数据也没问题);
    (4) Persons 是限制类型

  另外,这边补充下最后的知识点：上面的defineProps、以及15_标签的ref属性中的defineExpose在Vue中属于宏函数,不需要引入
  即 import { defineProps } from 'vue' 和 import { defineExpose } from 'vue' 无须引入,直接使用defineProps、defineExpose...
*/

</script>

<style scoped>
.person {
  background-color: gainsboro;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>