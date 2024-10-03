<script setup>
import { useRouter } from 'vue-router';
import { pingLocalServer } from '../../services/auth';
import { ref } from 'vue';

if (await pingLocalServer() === true)
{
    const router = useRouter();
    const pushToLogin = () => router.push("/login")
    pushToLogin()
}

const port = ref()
</script>

<template>
    <input type="text" id="port" v-model.lazy="port" placeholder="5000" />
    <label for="port">Insert port used</label>
    <button>Confirm</button>
</template>

<style scoped>
</style>