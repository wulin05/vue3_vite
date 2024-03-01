<template>
  <div class="person">
    <h2>watchWffect监视响应式数据</h2>
    <h4>需求: 当水温达到60℃,或水位达到80CM时,给服务器发送告警...</h4>
    <h4>当前水温: {{ temp }}℃</h4>
    <h4>当前水位: {{ height }}CM</h4>
    <button @click="changeTemp">调节水温+10℃</button>
    <span>&nbsp;&nbsp;</span>
    <button @click="changeHeight">调节水位+10CM</button>

    <hr>
    <h4>监视非响应式数据num: {{ num }}</h4>
    <button @click="changeNum">修改num的值</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watch, watchEffect} from 'vue'
  // 数据
  let temp = ref(10)
  let height = ref(0)
  let num = 666

  // 方法
  function changeTemp(){
    temp.value += 10
  }
  function changeHeight(){
    height.value +=10
  }

  function changeNum() {
    // 结果就是num是非响应式的,watch根本就监测不到num的变化...
    num += 111
    console.log('*****', num)
  }

  // // watch监视: 必须明确指出监视的对象
  // watch([temp, height], (newValue) =>{
  //   // console.log('*****', newValue)
  //   // if(temp.value >= 60 || height.value >= 80){
  //   //   alert('向服务器告警....')
  //   // }
  //   let [newTemp, newHeight] = newValue
  //   if(newTemp >= 60 || newHeight >= 80){
  //     console.log('向服务器告警....')
  //   }
  // })

  // watchEffect监视：不需要指出监视对象(函数中用到哪些属性,那就监视哪些属性)
  // 因为watchEffect的参数就没有要监视的对象,所以回调函数(箭头函数)也就压根就没有newValue、oldValue
  watchEffect(() => {
    if (temp.value >= 60 || height.value >= 80) {
      console.log('向服务器告警....', temp.value, height.value)
    }
  })


</script>
