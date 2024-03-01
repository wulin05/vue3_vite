<template>
  <div class="person">
    <h2>情况一、监视【ref】定义的【基本类型】数据</h2>
    <h3>当前求和为: {{ sum  }}</h3>
    <button @click="changeSum">点我sum+1</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watch } from 'vue'
  // 数据
  let sum  = ref(0)

  // 方法
  function changeSum() {
    sum.value += 1
  }

  // 监视：stopWatch保存的是一个函数，而这个函数是由 watch 函数返回的
  const stopWatch = watch(sum,(newValue,oldValue) => {
    console.log('*****sum值变化了*****', newValue, oldValue)
    // 在回调函数内部，当 newValue大于等于10时，执行stopWatch()会调用之前保存的这个函数，即停止对 sum 的监视。
    if(newValue >= 10){
      stopWatch()
    }
  }, {immediate:true})

  console.log('person对象变化了', stopWatch)

  /*
  // 格式：watch(sum, callback, options)
  watch(sum,(newValue, oldValue) => {
    console.log('*****sum值变化了*****', newValue, oldValue)
  }, {immediate:true})
  
  */

</script>
