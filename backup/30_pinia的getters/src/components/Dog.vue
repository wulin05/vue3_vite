<template>
  <div class="dog">
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup name="Dog">
  import aboutDog from '../hooks/useDog'

  const { dogList, getDog } = aboutDog()

</script>

<style scoped>
  .dog {
    background-color: gainsboro;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }

  img {
    height: 100px;
    margin: 5px;
  }
</style>