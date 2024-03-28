<script setup>
import { ref } from "vue";
import { tryLogin } from "../services/auth.js";
import { useRouter } from 'vue-router';

const username = ref("");
const password = ref("");

const router = useRouter();
const pushToHome = () => router.push('/');

const loginAndRedirect = async () => {
    const loginSuccess = await tryLogin(username.value, password.value);
    if (loginSuccess) {
        pushToHome();
    }
};

</script>


<template>
    <div class="login-card">
        <h1>Quadra</h1>
        <form class="login-form" @submit.prevent="loginAndRedirect">
            <label class="signin-label" for="username">Username</label>
            <input class="signin-input" v-model.lazy="username" name="username" placeholder="Joe" />

            <label class="signin-label" for="password">Password</label>
            <input class="signin-input" type="password" v-model.lazy="password" name="password"
                placeholder="•••••••••" />

            <button class="submit-button" type="submit">Sign in</button>
        </form>
    </div>
</template>


<style>
.signin-label {
    padding-left: 5px;
    font-size: medium;
    font-weight: 500;
}

.signin-input {
    margin-bottom: 10px;
    margin-top: 4px;
}

.submit-button {
    background-color: blueviolet;
    color: white;
    margin-top: 16px;
}

.login-form {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
}

.login-card {
    padding: 18px;
    background-color: whitesmoke;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    max-width: 450px;
    max-height: 310px;
    border-radius: 15px;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
    display: flex;
    margin: 0;
}
</style>
