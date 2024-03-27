<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
</script>

<template>
  <form class="login-form" @submit.prevent="greet">
    <h2>Welcome back 👋</h2>
    <input class="signin-input" v-model="username" placeholder="Username" />
    <input class="signin-input" v-model="password" placeholder="Password" />
    <button class="submit-button" type="submit">Sign in</button>
  </form>
</template>

<style>
.signin-input {
  margin-bottom: 5px;
  margin-top: 4px;
}

.submit-button {
  background-color: blueviolet;
  color: white;
  margin-top: 16px;
}

.login-form {
  padding: 30px 18px;
  background-color: white;
  flex-direction: column;
  text-align: left;
  width: 90%;
  max-width: 374px;
  max-height: 287px;
  border-radius: 15px;
  box-shadow: 0 2px 13px rgba(0, 0, 0, 0.1);
  display: flex;
  margin: 0;
}
</style>
