
<script setup>
import { useErrorStore } from '../stores/errorStore.js';
import { ref } from 'vue';

const errorStore = useErrorStore();
const message = ref(errorStore.message);
</script>

<template>
  <!-- todo: rework all of that to handle many error cards to be displayed -->
  <div class="error-message">
    <span class="error-text">{{ message }}</span>
    <button class="close-btn" @click="errorStore.clearError">x</button>
  </div>
</template>

<style scoped>
.error-message {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff5252;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 9999;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: opacity 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.error-text {
    font-weight: bold;
}

.close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    margin-left: 10px;
}

.close-btn:hover {
    color: #ff0000;
}
</style>
