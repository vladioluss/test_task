<script setup lang="ts">
import Chart from 'chart.js/auto';
import {onMounted, ref} from "vue";

const props = defineProps({
  values: Array<Object>,
})

// Получаем полотно canvas
const canvasRef = ref<HTMLCanvasElement | null>(null)

// Рендер графика, сбор данных
function renderChart() {
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext('2d')

    if (ctx) {
      // Имя персонажа
      let labels = props.values?.map(character => character.name)
      // Рост
      let heights = props.values?.map(character => character.height)

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Рост персонажа',
            data: heights,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    }
  }
}

// Дожидаемся монтирования DOM элементов
onMounted(() => renderChart())
</script>

<template>
  <div class="chart-wrapper">
    <canvas ref="canvasRef" id="bar-chart"></canvas>
  </div>
</template>

<style scoped>
.chart-wrapper {
  width: clamp(460px, 80%, 960px);
  margin: 0 auto;
}
</style>