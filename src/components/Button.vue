<template>
  <button class="custom-button" @click="handleClick">
    <slot>Click me</slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
  console.log('Button from Microfrontend 1 clicked!')
}
</script>

<style scoped>
.custom-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background: #3498db;
  color: white;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  background: #2980b9;
}

.custom-button:active {
  transform: translateY(0);
}
</style>
