<script setup>
import { ref } from 'vue';
import WhereIsCore from "../components/Setup/WhereIsCore.vue";
import AskLocalPort from "../components/Setup/AskLocalPort.vue";
import AskServerUrl from "../components/Setup/AskServerUrl.vue";

const isLocal = ref(undefined);
</script>

<template>
    <!-- todo: ask if Core is installed on the machine or on a remote server -->
    <!-- todo: if in remote ask for the IP/URL of the server either ask for the port -->
    <div class="container login-background">
        <img src="/quadra-logo-small-backgroundless.webp" alt="Quadra logo backgroundless" />
        <h1>First time here ?</h1>
        <WhereIsCore v-if="isLocal === undefined" v-model:isLocal="isLocal" />
        <AskLocalPort v-else-if="isLocal === true" />
        <AskServerUrl v-else-if="isLocal === false" />
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