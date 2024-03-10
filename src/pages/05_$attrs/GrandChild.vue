<template>
  <div class="grandchild">
    <h3>孙组件</h3>
    <h4>a:{{ a }}</h4>
    <h4>b:{{ b }}</h4>
    <h4>c:{{ c }}</h4>
    <h4>d:{{ d }}</h4>
    <h4>x:{{ x }}</h4>
    <h4>y:{{ y }}</h4>
  </div>
</template>

<script lang="ts" setup name="GrandChild">
  defineProps(['a', 'b', 'c', 'd', 'x', 'y'])

</script>

<style scoped>
  .grandchild{
    margin-top: 50px;
    background-color: orange;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
  }
</style>