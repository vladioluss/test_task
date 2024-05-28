<script setup lang="ts">
const props = defineProps({
  header: String
})
</script>

<template>
    <th>{{ props.header }}</th>
</template>

<style scoped>
th {
  padding: 15px;
  background-color: var(--gray-8);
  color: var(--gray-0);
  text-align: left;
}

th:first-child {
  border-top-left-radius: 8px;
}

th:last-child {
  border-top-right-radius: 8px;
}
</style>