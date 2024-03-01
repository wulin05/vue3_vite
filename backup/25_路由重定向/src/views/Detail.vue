<template>
  <ul class="news-list">
    <li>编号：{{ id.slice(0, 5) }}</li>
    <li>标题: {{ title }}</li>
    <li>内容：{{ content }}</li>
  </ul>
</template>

<script lang="ts" setup name="Detail">
  defineProps(['id', 'title', 'content'])

</script>

<style scoped>
  .news-list {
    list-style: none;
    padding-left: 30px;
  }

  .news-list>li {
    line-height: 30px;

    font-size: 18px;
    line-height: 100%;
    text-decoration:none;
    color: #f17a13;
    text-shadow: 0 0 3px rgb(250, 164, 4);
    margin-top: 20px;
  }
</style>