<script setup lang="ts">
interface Props {
  name?: string;
  height?: string;
  birth_year?: string;
  gender?: string;
}

const props = defineProps<{item: Props}>()
</script>

<template>
    <tr>
      <td>{{ props.item?.name }}</td>
      <td>{{ props.item?.height }}</td>
      <td>{{ props.item?.birth_year }}</td>
      <td>{{ props.item?.gender }}</td>
    </tr>
</template>

<style scoped>
td {
  padding: 10px;
}

tr {
  transition: 0.1s;

  &:not(:first-child) {
    border-top: 1px solid var(--gray-3);
  }

  &:hover {
    cursor: pointer;
    background-color: var(--gray-3);
  }
}
</style>