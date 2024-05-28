<script setup lang="ts">
import {computed, ref} from "vue";

interface Props {
  counts: number
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  counts: 1,
  size: 10,
})

const emit = defineEmits(['paginatePage'])

const currentPage = ref<number>(1)

// Получаем кол-во страниц
const totalPages = computed<number>(() => Math.ceil(props.counts / props.size))

// Блокировки кнопок
const isFirstPage = computed<boolean>(() => currentPage.value === 1)
const isLastPage = computed<boolean>(() => currentPage.value === totalPages.value)

function goToPreviousPage() {
  if (currentPage.value > 1) {
    currentPage.value--
    emit('paginatePage', currentPage.value)
  }
}

function goToNextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    emit('paginatePage', currentPage.value)
  }
}
</script>

<template>
  <div class="pagination">
    <button
        class="pagination-button"
        @click="goToPreviousPage"
        :disabled="isFirstPage"
    >
      <<<
    </button>

    <button
        type="button"
        :class="[
            'pagination-button',
            { active: page === currentPage }
        ]"
        v-for="page in totalPages"
        :key="page"
        @click="currentPage = page; emit('paginatePage', currentPage)"
    >
      {{ page }}
    </button>

    <button
        class="pagination-button"
        @click="goToNextPage"
        :disabled="isLastPage"
    >
      >>>
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .pagination-button {
    padding: 10px 15px;
    margin: 0 5px;
    border: none;
    cursor: pointer;
    outline: none;
    transition: 0.1s;
    background-color: var(--gray-3);

    &:hover:not(.active) {
      background-color: var(--success-hover);
    }

    &.active {
      background-color: var(--success);
      color: white;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>