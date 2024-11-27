<script setup>
import { ref } from 'vue';
import WhereIsCore from "../components/Setup/WhereIsCore.vue";
import AskLocalPort from "../components/Setup/AskLocalPort.vue";
import AskServerUrl from "../components/Setup/AskServerUrl.vue";
import ChangeAdminInfos from '../components/Setup/ChangeAdminInfos.vue';

import { hasOnlyDefaultUser } from '../services/setup';

/** Define if Core is running locally or not */
const isLocal = ref(undefined);

/** Define if the current user is the first to connect to Core instance */
const isFirstUser = await hasOnlyDefaultUser();
</script>

<template>
    <div class="container login-background">
        <img src="/quadra-logo-small-backgroundless.webp" alt="Quadra logo backgroundless" />
        <h1>First time here ?</h1>
        <WhereIsCore v-if="isLocal === undefined" v-model:isLocal="isLocal" />
        <AskLocalPort v-else-if="isLocal === true" />
        <AskServerUrl v-else-if="isLocal === false" />
        <ChangeAdminInfos v-else-if="isFirstUser === true" />
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