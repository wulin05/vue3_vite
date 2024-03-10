<template>
  <Count/>
  <hr>
  <LoveTalk/>
  <hr>
  <!-- Dog是我练习hooks知识点、自己弄的组件,跟本节无关... -->
  <Dog/>
</template>

<script lang="ts" setup name="App">
  import Count from './components/Count.vue'
  import LoveTalk from './components/LoveTalk.vue'
  import Dog from './components/Dog.vue'
</script>

<style scoped>

</style>