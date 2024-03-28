<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");
</script>

<template>
  <div  class="login-card">
    <h1>Quadra</h1>
    <form class="login-form" @submit.prevent="greet">
      <label class="signin-label" for="username">Username</label>
      <input class="signin-input" v-model="username" name="username" placeholder="Joe" />
      <label class="signin-label" for="password">Password</label>
      <input class="signin-input" type="password" v-model="password" name="password" placeholder="•••••••••" />
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
  box-shadow: 0 2px 13px rgba(0, 0, 0, 0.1);
  display: flex;
  margin: 0;
}
</style>
