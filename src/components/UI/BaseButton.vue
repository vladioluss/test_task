<script setup lang="ts">
import { defineProps } from 'vue'

interface Button {
  color:
    'primary' |
    'second' |
    'success' |
    'info' |
    'warning' |
    'danger';
  size:
    'small' |
    'medium' |
    'large';
  disabled: boolean;
}

const props = withDefaults(defineProps<Button>(), {
  color: 'primary',
  size: 'medium',
  disabled: false,
})
</script>

<template>
  <button
    class="button"
    :class="[props.size, props.color]"
    :disabled="props.disabled"
    @click="$emit('click')"
  >
    <slot name="label"/>
    <slot name="icon"/>
  </button>
</template>

<style scoped lang="scss">
.button {
  border-radius:5px;
  color: var(--gray-0);
  outline: none;
  border: none;
  padding: 0 16px;

  &--small {
    height: 32px;
  }

  &--medium {
    height: 36px;
  }

  &--large {
    height: 40px;
  }
}

.primary {
  background: var(--primary);
  &:hover {
    background: var(--primary-hover);
  }
}

.second {
  background: var(--second);
  &:hover {
    background: var(--second-hover);
  }
}
</style>