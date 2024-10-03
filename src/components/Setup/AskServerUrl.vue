<script setup>
import { ref } from 'vue';

const url = ref()
</script>

<template>
    <input type="text" id="port" v-model.lazy="port" placeholder="5000" />
    <label for="port">Insert port used</label>
    <button>Confirm</button>
</template>

<style scoped>
</style>