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
