<template>
  <ul class="news-list">
    <li>编号：{{ id.slice(0, 5) }}</li>
    <li>标题: {{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
  defineProps(['id', 'title', 'content'])

  /*
1. 下面是当时我想通过toRef、toRefs以及解构赋值的方式,得到id、title、conent,让它们在模板中使用插值更简便,
但是发现很难实现, 只能到 let {query} = toRefs(route) 这个地步, 后面再继续toRefs、toRef+解构赋值,都没法
得到响应式的id、title、content,不知道为什么！？ 
import { useRoute } from 'vue-router'
import { ref, watch, watchEffect, toRefs} from 'vue' 

const route = useRoute()

let {query} = toRefs(route)
let {id,title,content} = toRefs(query.value)
 
2. 下面只是复习使用watch、watchEffect知识点,并且达到上面所说的效果...

import {useRoute} from 'vue-router'
import {ref, watch, watchEffect} from 'vue'

const route = useRoute()

// 初始化响应式的 id、title、content
const id = ref(route.query.id)
const title = ref(route.query.title)
const content = ref(route.query.content)

// 监听路由变化，手动更新响应式属性
// watch(() => route.query.id, (newValue) => { id.value = newValue })
// watch(() => route.query.title, (newValue) => { title.value = newValue })
// watch(() => route.query.content, (newValue) => { content.value = newValue })

watch(()=> route, (newValue) => {
console.log('66666', newValue.query)
id.value = newValue.query.id
title.value = newValue.query['title']
content.value = newValue.query['content']
},{deep:true})

// watchEffect(() => {
//     id.value = route.query.id
//     title.value = route.query.title
//     content.value = route.query.content
//   }
// )

*/

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