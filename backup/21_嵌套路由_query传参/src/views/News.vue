<template>
  <div class="news">
    <!-- News的导航区 -->
    <ul>
      <!--原型是: <li v-for="news in newsList" :key="news.id"><a href="#">{{ news.title }}</a></li> -->
      <li v-for="news in newsList" :key="news.id">
        <!-- 仅仅为了说明query传参的原始方式: -->
        <!-- <routerLink to="/news/detail?a=哈哈&b=你好&c=666">{{ news.title }}</routerLink> -->
        
        <!-- 第一种路由传数据的写法 -->
        <!-- <routerLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</routerLink> -->

        <!-- 第二种路由传数据的写法 -->
        <!-- <routerLink :to="{path:'/news/detail'}">{{ news.title }}</routerLink> -->
        <routerLink 
        :to="{
            // path: '/news/detail',
            name:'xiangqing',
            query:{
              id:news.id,
              title:news.title,
              content:news.content
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
  // import RouterView from 'vue-router'、import RouterLink from 'vue-router' 其实都不需要引入就能用了

  const newsList = reactive([
    {id:nanoid(), title:'一种抗癌食物', content:'西蓝花'},
    {id:nanoid(), title:'如何一夜暴富', content:'学IT'},
    {id:nanoid(), title:'震惊,万万没想到', content:'中了1个亿'},
    {id:nanoid(), title:'好消息!', content:'明天是周末~'},
  ])
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
.news li>a {
  font-size: 70%;
  line-height: 90%;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}

</style>