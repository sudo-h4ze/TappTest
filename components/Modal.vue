<template>
    <transition name="modal">
      <div v-if="isVisible" class="modal-backdrop" @click.self="close">
        <div class="modal-content" @click.stop>
          <slot></slot>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    modelValue: Boolean
  });
  
  const isVisible = ref(props.modelValue);
  
  const close = () => {
    const newUrl = `/`;
    window.history.pushState({ path: newUrl }, '', newUrl);

    isVisible.value = false;
    emit('update:modelValue', false);
  };
  
  watch(() => props.modelValue, (newVal) => {
    isVisible.value = newVal;
  });
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    z-index: 1001;
    width: 80vw;
    /* Add more styling as needed */
  }
  </style>
  