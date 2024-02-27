<template>
    <button
      :class="knopClass"
      @click="$emit('maatGeselecteerd', maat)"
    >{{ maat }}</button>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  const props = defineProps<{
    maat: String,
    isGeselecteerd: Boolean
}>();
  
  const knopClass = computed(() => [
    'py-2 px-4 rounded-full font-bold mr-2',
    'hover:bg-gray-400 dark:hover:bg-gray-600',
    props.isGeselecteerd ? 'bg-gray-100 dark:bg-gray-400 text-gray-700 dark:text-white' : 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white'
  ]);
  </script>