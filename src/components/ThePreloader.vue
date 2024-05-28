<script setup lang="ts">
const props = defineProps({
  modelValue: Boolean,
  'onUpdate:modelValue': Function,
})
</script>

<template>
  <div
      v-if="props.modelValue"
      class="wrapper-preloader"
  >
    <h1>LOADING...</h1>
  </div>
</template>

<style scoped>
.wrapper-preloader {
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--gray-6);
}

h1 {
  color: var(--gray-0);
}
</style>