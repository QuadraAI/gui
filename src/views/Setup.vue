<script setup>
import { ref } from 'vue';
import WhereIsCore from "../components/Setup/WhereIsCore.vue";
import AskLocalPort from "../components/Setup/AskLocalPort.vue";
import AskServerUrl from "../components/Setup/AskServerUrl.vue";

/** Define if Core is running locally or not */
const isLocal = ref(undefined);
</script>

<template>
    <div class="container login-background">
        <img src="/quadra-logo-small-backgroundless.webp" alt="Quadra logo backgroundless" />
        <WhereIsCore v-if="isLocal === undefined" v-model:isLocal="isLocal" />
        <AskLocalPort v-else-if="isLocal === true" />
        <AskServerUrl v-else-if="isLocal === false" />
    </div>
</template>