<template>
  <div class="person">
    <h2>情况四、监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h2>
    <hr>
    <h3>姓名: {{ person.name }}</h3>
    <h3>年龄: {{ person.age }}</h3>
    <h3>汽车: {{ person.car.c1 }}、{{ person.car.c2 }}</h3>
    <hr>
    <button @click="changeName">修改名字</button>
    <span>&nbsp;&nbsp;</span>
    <button @click="changeAge">修改年龄</button>
    <span>&nbsp;&nbsp;</span>
    <button @click="changePerson">修改整个person</button>
    <hr>
    <button @click="changeCar1">修改第一台车</button>
    <span>&nbsp;&nbsp;</span>
    <button @click="changeCar2">修改第二台车</button>
    <span>&nbsp;&nbsp;</span>
    <button @click="changeCar">修改所有车信息</button>

  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive,watch } from 'vue'
  // 数据
  let person = reactive({
    name: '张三',
    age: 18,
    car: {
      c1: '奔驰',
      c2: '宝马'
    }
  })

  // 方法
  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changePerson() {
    // reactive定义的对象类型,需要通过Object.assign整体修改才能维持响应式
    Object.assign(person, { name: '李四', age: 99, car:{c1:'大众', c2: '克莱斯勒' }})
  }

  function changeCar1(){
    person.car.c1 = '奥迪'
  }
  function changeCar2(){
    person.car.c2 = '沃尔沃'
  }
  function changeCar(){
    // 下面两种写法都满足3的监视...
    person.car = {c1:'比亚迪', c2:'长安'}
    // Object.assign(person.car, { c1: '比亚迪', c2: '长安' })
  } 

  // // 1.监视【ref】或【reactive】定义的【对象类型】数据的某个属性,属性是基本类型: 监视对象必须使用箭头函数
  // watch(() => person.name , () => {
  //   console.log('person的name属性变化了')
  // })
    
  // // 2.监视【ref】或【reactive】定义的【对象类型】数据的某个属性,属性是对象类型: 监视对象可以直接写,但推荐也用箭头函数
  // // 但是,如果不开启深度监视,那么只能监测整个对象(car)的变化,而car对象属性的变化,监测不到。
  // watch(person.car , () => {
  //   console.log('person的car属性变化了')
  // })

  // 3.可以将1和2的监视用数组方式一起监视....
  watch([() => person.name, () => person.car], (newValue, oldValue) => {
    console.log('person的name或car属性变化了~', newValue, ...oldValue)
  }, { deep: true })  // 开启深度监视,car的属性值变了,也能监测到,否则,只能监测到整个car的变化
</script>


<!-- <style scoped>
button {
  margin-right: 10px; /* 调整右边距 */
}
</style> -->