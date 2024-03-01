<template>
  <div class="person">
    <h3>当前求和为: {{ sum }},放大10倍后: {{ bigSum }}</h3>
    <button @click="add">点我sum+1</button>
    <hr>
    <img v-for="(dog, index) in dogList" :src="dog" :key="index">
    <br>
    <button @click="getDog">再来一只小狗</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import aboutDog from '../hooks/aboutDog'
  import useSum from '../hooks/useSum'

  // ### 引入自定义的hooks: 推荐hooks的文件名为 useXxx.ts , 虽然文件名为aboutDog.ts没什么问题
  const {sum, add, bigSum} = useSum()
  const {dogList, getDog} = aboutDog()
  
</script>

<style scoped>
.person {
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