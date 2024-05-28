import {computed, ref} from 'vue'
import { defineStore } from 'pinia'
import {apiInstance} from "@/api";

export const useCharactersStore = defineStore('characters', () => {
  const characters = ref()

  async function getCharacters(page = null) {
    let res = await apiInstance.get('/people/', {
      params: {
        page: page
      }
    })
    characters.value = await res.data
  }



  // Все персонажи
  const allCharacters = computed(() => characters.value?.results)

  // Общее кол-во
  const countCharacters = computed(() => characters.value?.count)

  // Для прелоадера
  const isLoading = computed(() => !Boolean(characters.value?.count || 0))

  return { allCharacters, getCharacters, countCharacters, isLoading, }
})
