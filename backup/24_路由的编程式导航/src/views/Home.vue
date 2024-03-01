<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>
</template>

<script lang="ts" setup name="Home">
  import {onMounted} from 'vue'
  /*
  ##### 本节内容：编程式路由导航
  导入的是useRouter,跟之前的路由query、params传参使用的是useRoute不一样哦~
  useRoute是为了接收数据：useRoute.query、useRoute.params
  */
  import {useRouter} from 'vue-router'

  const router = useRouter()
  // console.log('********', router)

  onMounted(() => {
    setTimeout(() => {
      // ##### 编程式路由导航的核心：router.push、 router.replace, 下面是字符串写法
      // router.push('/news/detail?id=abc123&title=外星人&content=我来自阿斯利奎星')
      router.push('/news')
      // router.replace('/news')
    }, 2000);
  })

</script>

<style scoped>
.home{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>