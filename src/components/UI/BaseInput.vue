<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  modelValue: string | null;
  label?: string | boolean;
  name?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  label: false,
  name: null
})
</script>

<template>
  <div class="input-group">
    <slot name="label">
      <label
        v-if="props.label"
      >
        {{ props.label }}
      </label>
    </slot>
    <input
      type="text"
      :name="props.name"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target?.value as HTMLInputElement)"
    />
  </div>
</template>

<style scoped>

</style>