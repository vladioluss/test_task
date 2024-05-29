<template>
  <div class="about">
    <h2>Диаграмма</h2>

    <ChartCharacters
        v-if="allCharacters?.length > 0"
        :values="allCharacters"
    />
  </div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import ChartCharacters from "@/components/charts/ChartCharacters.vue";
import {useCharactersStore} from "@/stores/characters";
import {storeToRefs} from "pinia";

const charactersStore = useCharactersStore()
const {allCharacters} = storeToRefs(charactersStore)

// Запросим данные с сервера
onMounted(() => charactersStore.getCharacters())
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
