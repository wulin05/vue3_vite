<template>
  <ul class="news-list">
    <!-- 不使用解构、toRefs时的插值语法 -->
    <li>编号：{{ route.params.id.slice(0, 5) }}</li>
    <li>标题: {{ route.params.title }}</li>
    <li>内容：{{ route.params.content }}</li>
    <hr>
    <!-- 使用对象结构,并且需要配合toRefs进行关联 原响应式数据 -->
    <li>编号：{{ params.id.slice(0, 5) }}</li>
    <li>标题: {{ params.title }}</li>
    <li>内容：{{ params.content }}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
  import {useRoute} from 'vue-router'
  import {toRefs} from 'vue'

  const route = useRoute()
  // console.log('*****', route)   // 在route的params中存放了News.vue组件传递过来的数据
  
  // 千万注意,不能用 let {id, title, content} = toRefs(route.params)。
  // toRefs的原理是：用新的参数映射原响应式数据.意味着toRefs(route)的route参数必须是响应式数据,
  // 但, route.params是普通对象, 所以 toRefs(route.params)会报错 ！！！
  let {params} = toRefs(route) 
  // console.log('99999999999', params) // ObjectRefImpl {_object: Proxy(Object), _key: 'params', _defaultValue: undefined, __v_isRef: true}

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