<template>
  <div class="father">
    <h3>父组件</h3>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- 上面一行的本质是,它们是等价的 -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->
      
    <!-- v-model用在组件标签上: 下面两行是等价的 -->
    <AtJapanInput v-model="username"/>
    <!-- <AtJapanInput :modelValue="username" @update:modelValue="username = $event"/> -->
  
  </div>
</template>

<script lang="ts" setup name="Father">
  import {ref} from 'vue'
  import AtJapanInput from './AtJapanInput.vue'

  let username = ref('zhangsan')
</script>
  
<style scoped>

</style>