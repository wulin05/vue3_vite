<template>
  <div class="person">
    <h2>一辆{{ car.brand }},价值{{ car.price }}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改整个汽车</button>
    <hr>
    <h2>当前obj.a.b.c的值为: {{ obj.a.b.c }}</h2>
    <button @click="changeObjC">修改obj属性c的值</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,reactive} from 'vue'

  // 数据
  let car = reactive({ brand: '奔驰', price: 100 })
  let obj = ref({
    a:{
      b:{
        c:666
      }
    }
  })

  // 方法
  function changePrice() {
    car.price += 10
  }
  function changeBrand() {
    car.brand = '宝马'
  }
  function changeCar() {
    // 下面的两种方式都不能正确地修改整个car,第一个是会丢失car的响应式；第二个是用新的一个reactive对象替换了原数据.
    // car = {brand:'沃尔沃', price:80}
    // console.log('99999', car)
    // car = reactive({brand:'沃尔沃', price:80})

    // 这种方式是可以的,理解为将新的属性替换了car的旧属性,但是整个内存地址不变
    Object.assign(car,{ brand: '沃尔沃', price: 80 })
  }

  function changeObjC() {
    // 注意：obj是用ref定义的响应式数据,通过.value可以直接修改属性值,而且不会丢失响应式
    obj.value.a.b.c = 999
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