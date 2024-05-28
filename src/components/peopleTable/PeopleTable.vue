<script setup lang="ts">
import PeopleRow from "@/components/peopleTable/PeopleRow.vue";
import HeaderTable from "@/components/peopleTable/HeaderTable.vue";

const props = defineProps({
  values: Array<object>,
  headers: Array<string>,
})
</script>

<template>
  <table>
    <thead>
    <tr>
      <HeaderTable
          v-for="(header, index) in props.headers"
          :key="index"
          :header="header"
      />
    </tr>
    </thead>
    <tbody>
    <PeopleRow
        v-for="item in props.values"
        :key="item.name"
        :item="item"
    />
    </tbody>
  </table>
</template>

<style scoped lang="scss">
table {
  border-collapse: collapse;
}
</style>