<template>
  <ul class="news-list">
    <!-- 不使用解构、toRefs -->
    <li>编号：{{ route.query.id }}</li>
    <li>标题: {{ route.query.title }}</li>
    <li>内容：{{ route.query.content }}</li>
    <hr>
    <!-- 使用对象结构,并且需要配合toRefs进行关联 原响应式数据 -->
    <li>编号：{{ query.id }}</li>
    <li>标题: {{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
/*
  为了能够获取从News组件通过路由传递的数据,需要用到useRoute(路由器),
  而且从名字看,useRoute就是之前学的hooks,之前是自定义的,这边是vue-router提供的hooks 
*/
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'

let route = useRoute()
// console.log('@@@@@', route)   // 输出结果是: Proxy(Object) {… }, 里面有query属性
// console.log('@@@@@', route.query)   // 输出结果是: {id:..., title:..., content:...}

/*
  下面这个只是我自己实验解构赋值、toRefs知识点: 
  直接从一个响应式的数据解构数据,那么id、tilte、content就丢失响应式,通过toRef/toRefs解决
  但是：千万注意,不能用 let {id, title, content} = toRefs(route.params)。
  因为toRefs(route)的route必须是响应式数据,route.params是普通对象,toRefs(route.params)会报错！！！
  let { query } = toRefs(route)
  console.log('99999', query) // ObjectRefImpl {_object: Proxy(Object), _key: 'query', _defaultValue: undefined, __v_isRef: true}
*/
let { query } = toRefs(route)
console.log('99999', query) // ObjectRefImpl {_object: Proxy(Object), _key: 'query', _defaultValue: undefined, __v_isRef: true}

</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 30px;
}

.news-list>li {
  line-height: 30px;
}
</style>