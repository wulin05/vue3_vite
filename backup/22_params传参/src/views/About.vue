<template>
  <div class="about">
    <h2>大家好,欢迎来到东南小清华学Vue</h2>
  </div>
</template>

<script lang="ts" setup name="About">
  import {onMounted, onUnmounted} from 'vue'

  // ### 路由的两个注意点：
  /*
  1.路由组件通常存放在 pages 或 views 文件夹,一般组件通常存放在components文件夹
  2.通过点击导航,视觉效果上"消失"了的路由组件,默认是被"卸载"的,需要的时候再去挂载
  */
  onMounted(() => {
    console.log('About路由组件挂载了')
  })
  onUnmounted(() => {
    console.log('About路由组件卸载了')
  })
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgb(85, 84, 84);
  font-size: 18px;
}
</style>