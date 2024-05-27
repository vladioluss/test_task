<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, shallowRef} from "vue";
import {apiInstance} from "@/api/index.js";

let people = shallowRef([])

onMounted(() => {

})
</script>

<style scoped>

</style>
