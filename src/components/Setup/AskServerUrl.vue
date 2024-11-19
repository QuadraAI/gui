<script setup>
import { ref } from 'vue';
const port = ref();
</script>

<template>
    <input type="text" id="port" v-model.number="port" placeholder="5000" />
    <label for="port">Insert port used</label>
    <button>Confirm</button>
</template>

<style scoped>
</style>