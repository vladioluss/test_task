<script setup lang="ts">
import {onMounted, ref} from "vue";
import {apiInstance} from "@/api";

let people = ref([])

const getPeople = async () => {
  let res = await apiInstance.get('/people/')
  people.value = res.data.results
}

onMounted(() => getPeople())
</script>

<template>
  <main>
    <div
        v-for="(item, index) in people"
        :key="index"
    >
      {{ item }}
    </div>
  </main>
</template>
