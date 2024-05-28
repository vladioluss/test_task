<script setup lang="ts">
import {onMounted,} from "vue";
import PeopleTable from "@/components/peopleTable/PeopleTable.vue";
import ThePreloader from "@/components/ThePreloader.vue";
import {useCharactersStore} from "@/stores/characters";
import {storeToRefs} from "pinia";
import BasePagination from "@/components/UI/BasePagination.vue";

/*
* Работа с получением данных
* */
const charactersStore = useCharactersStore()
const {allCharacters, isLoading, countCharacters} = storeToRefs(charactersStore)

// Запросим данные с сервера
onMounted(() => charactersStore.getCharacters())

// Запрость данные с сервера по номеру страницы
function getCurrPageCharacter(value: number): void{
  charactersStore.getCharacters(value)
}
</script>

<template>
  <main>
    <div class="wrapper">
      <PeopleTable
          v-if="!!countCharacters"
          class="grid"
          :values="allCharacters"
          :headers="['Имя', 'Рост', 'Дата рождения', 'Пол']"
      />
      <BasePagination
          :counts="countCharacters"
          :size="10"
          @paginatePage="getCurrPageCharacter"
      />
    </div>

    <ThePreloader v-model="isLoading"/>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid {
  margin: 15px;
  width: clamp(450px, 100%, 960px);
  box-shadow: var(--shadow-extra-large);
}
</style>
