<template>
  <div>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="firstName">
    <br>
    名：<input type="text" v-model="lastName">
    <br>
    <br>
    <span>全名：{{ fullName }}</span>
  
    <hr>
    <!-- 如果想让全名fullName也能被修改,并且具有响应式的话 -->
    修改全名：<input type="text" v-model="fullName">
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, computed } from 'vue'

  let firstName = ref('zhang')
  let lastName = ref('san')

  // 这么定义的fullName是一个计算属性,且是只读的!!!
  // let fullName = computed(() => {
  //   return firstName.value + '-' + lastName.value
  // })

  // 这样定义的fullName才是具有可读可写的计算属性 
  let fullName = computed({
    get() {
      return firstName.value + '-' + lastName.value
    },
    set(val) {
      // const nameArr = value.split('-')
      // firstName.value = nameArr[0]
      // lastName.value = nameArr[1]
      let [str1, str2] = val.split('-')
      firstName.value = str1
      lastName.value = str2
    }
  })

</script>
