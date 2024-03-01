<template>
  <div class="news">
    <!-- News的导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 编程式路由导航 -->
        <button @click="showNewsDetail(news)">查看新闻</button>

        <routerLink replace 
          :to="{
            name:'xiangqing',
            query:{
              id: news.id,
              title: news.title,
              content: news.content,
            }
          }"
          >
          {{ news.title }}
        </routerLink>

      </li>
    </ul>

    <!-- New的展示区 -->
    <div class="news-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup name="News">
  import {reactive} from 'vue'
  import {nanoid} from 'nanoid'
  // 此处只是为了巩固之前的类型限制的知识点
  import { type Persons, type PersonInter } from '../types'

  const newsList:Persons = reactive([
    {id:nanoid(), title:'一种抗癌食物', content:'西蓝花'},
    {id:nanoid(), title:'如何一夜暴富', content:'学IT'},
    {id:nanoid(), title:'震惊,万万没想到', content:'中了1个亿'},
    {id:nanoid(), title:'好消息!', content:'明天是周末~'},
  ])

  // 编程式路由导航
  // 导入的是useRouter, 注意别引入成useRoute...
  import { useRouter } from 'vue-router'   
  const router = useRouter()
  function showNewsDetail(news: PersonInter) {
    // push、replace里的参数写法与to完全一致：字符串写法(Home.vue用了字符串写法)、这里用对象写法
    router.push({
      name: 'xiangqing',
      query: {
        id: news.id,
        title: news.title,
        content: news.content,
      }
    })
  }

</script>

<style scoped>
.news{
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}
.news li::marker {
  color: #64967E;
}
.news li {
  line-height: 30px;
}
.news li>a {
  font-size: 80%;
  line-height: 90%;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
  margin-left: 8px;
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}

</style>