<template>
  <div class="person">
    <h2>一辆{{ car.brand }},价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref} from 'vue'

  // 数据
  let car = ref({ brand: '奔驰', price: 100 })
  let games = ref([
    {id:'fuosajfdljl001', name:'王者荣耀'},
    {id:'fuosajfdljl002', name:'原神'},
    {id:'fuosajfdljl003', name:'三国志'},
  ])

  // 方法
  function changePrice() {
    car.value.price += 10
  }
  function changeFirstGame() {
    games.value[0].name = 'DOTA'
  }

</script>

<style>
  .person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
</style>