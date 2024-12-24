<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { pingLocalServer, hasOnlyDefaultUser } from '../../services/setup';
import ChangeAdminInfos from './ChangeAdminInfos.vue';

const port = ref();
const errorMessage = ref("");
const showChangeAdminInfos = ref(false);

onMounted(async () => {
    try {
        if (await pingLocalServer(null) === false) {
            return;
        }
        if (await hasOnlyDefaultUser() === true) {
            showChangeAdminInfos.value = true;
            return;
        }
        else {
            const router = useRouter();
            const pushToLogin = () => router.push("/login");
            pushToLogin();
        }
    } catch (error) {
        console.error(error);
    }
});
const confirmPort = async () => {
    if (await pingLocalServer(port.value) === true) {
        if (await hasOnlyDefaultUser() === true) {
            showChangeAdminInfos.value = true;
            return;
        } else {
            const router = useRouter();
            const pushToLogin = () => router.push("/login");
            pushToLogin();
        }
    } else {
        errorMessage.value = "Unable to reach the server at the specified port.";
    }
};
</script>

<template>
    <div v-if="showChangeAdminInfos">
        <ChangeAdminInfos />
    </div>
    <div v-else>
        <input type="text" id="port" v-model.lazy="port" placeholder="5000" />
        <label for="port">Insert port used</label>
        <button @click="confirmPort">Confirm</button>
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