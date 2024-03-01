<template>
  <div class="app">
    <Header/>
    <!-- 导航区 -->
    <div class="navigate">
      <!-- <a href="#" class="active">首页</a> -->
      <!-- <a href="#">新闻</a> -->
      <!-- <a href="#">关于</a> -->

      <!-- RouterLink的to的第一种写法：字符串写法 -->
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <!-- RouterLink的to的第二种写法：对象写法, 如果有命名路由的话,那对象写法还可以使用命名路由name的值 -->
      <RouterLink :to="{path:'/news'}" active-class="active">新闻</RouterLink>
      <RouterLink :to="{name:'guanyu'}" active-class="active">关于</RouterLink>

    </div>
    <!-- 展示区: 将上面的首页、新闻、关于,在下面的route-view的位置中展示出来 -->
    <div class="main-content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script lang="ts" setup name="App">
  // 引入RouterView(用来确定路由组件的放入位置)、RouterLink将a标签替换可以实现路由
  // import {RouterView, RouterLink} from 'vue-router' // 注释掉以后也可以用RouterView、RouterLink...
  import Header from './components/Header.vue'
</script>

<style scoped>
   /* App */
  /* .title {
    text-align: center;
    word-spacing: 5px;
    margin: 30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg, gray, white);
    border-radius: 10px;
    box-shadow:  0 0 2px;
    font-size: 30px;
  } */
  .navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
  }
  .navigate a {
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
  }
  .navigate a.active {
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
  }
  .main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
  }
  
</style>