<script setup>
import { ref } from "vue";
import { tryLogin } from "../services/auth";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");

const router = useRouter();
const pushToHome = () => router.push('/');

const loginAndRedirect = async () => {
    const loginSuccess = await tryLogin(username.value, password.value);
    if (loginSuccess) {
        username.value = "";
        password.value = "";
        pushToHome();
    }
};
</script>


<template>
    <div class="login-card">
        <form class="login-form" @submit.prevent="loginAndRedirect">
            <label class="signin-label" for="username">Username</label>
            <input class="signin-input" v-model.lazy.trim="username" name="username" placeholder="Joe" />

            <label class="signin-label" for="password">Password</label>
            <input class="signin-input" type="password" v-model.lazy="password" name="password"
                placeholder="•••••••••" />

            <button class="submit-button" type="submit">Sign in</button>
        </form>
    </div>
</template>


<style scoped>
.signin-label {
    font-size: medium;
    font-weight: 400;
}

.signin-input {
    margin-bottom: 10px;
    margin-top: 4px;
}

.submit-button {
    background-color: #a855f7;
    color: white;
    margin-top: 16px;
    font-weight: bold;
}

.submit-button:hover {
    background-color: #c084fc;
}

button:active {
    background-color: #9333ea;
}

.login-form {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.login-card {
    padding: 15px;
    box-sizing: border-box;
    background-color: #f8fafc;
    justify-content: center;
    width: 100%;
    height: fit-content;
    max-width: 280px;
    max-height: 340px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.04);
    border-radius: 15px;
    border: black;
    border: 8px solid white;
    margin-top: 12px;
}
</style>
