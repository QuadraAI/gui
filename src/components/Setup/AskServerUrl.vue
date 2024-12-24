<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { tryPingServer, hasOnlyDefaultUser } from '../../services/setup';
import ChangeAdminInfos from './ChangeAdminInfos.vue';

const url = ref();
const errorMessage = ref("");
const showChangeAdminInfos = ref(false);

const confirmUrl = async () => {
    if (await tryPingServer(url.value) === true) {
        if (await hasOnlyDefaultUser() === true) {
            showChangeAdminInfos.value = true;
            return;
        } else {
            const router = useRouter();
            const pushToLogin = () => router.push("/login");
            pushToLogin();
        }
    } else {
        errorMessage.value = "Unable to reach the server at the specified URL.";
    }
};
</script>

<template>
    <div v-if="showChangeAdminInfos">
        <ChangeAdminInfos />
    </div>
    <div v-else>
        <input type="text" id="url" v-model.lazy="url" placeholder="http://0.0.0.0:5000" />
        <label for="url">Insert url used</label>
        <button @click="confirmUrl">Confirm</button>
        <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    </div>
</template>

<style scoped>
input {
    margin-top: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

label {
    margin-top: 10px;
}

button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #6200ea;
    color: white;
    border: none;
    cursor: pointer;
}
</style>