<template>
  <!-- <input type="text"> -->
  <input type="text"
   :value="modelValue" 
   @input="emit('update:modelValue', (<HTMLInputElement>$event.target).value)"
   >
</template>

<script lang="ts" setup name="AtJapanInput">
  defineProps(['modelValue'])
  const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
  input {
    border:2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>