<script setup>
const isLocal = ref(null);
</script>

<template>
    <!-- todo: ask if Core is installed on the machine or on a remote server -->
    <!-- todo: if in remote ask for the IP/URL of the server either ask for the port -->
    <div class="container login-background">
        <img src="/quadra-logo-small-backgroundless.webp" alt="Quadra logo backgroundless" />
        <h1>First time here ?</h1>
        <div v-if="isLocal.value === null"></div>
        <div v-else-if="isLocal.value === true"></div>
        <div v-else-if="isLocal.value === false"></div>
    </div>
</template>

<style scoped>
.login-background {
    background-color: #f5f3ff;
    background-size: cover;
}

h1 {
    font-size: 24px;
    font-weight: 400;
}

img {
    max-width: 100px;
    margin-top: 10px;
}
</style>