<script setup>
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";

const greetMsg = ref("");
const username = ref("");
const password = ref("")

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: username.value });
}
</script>

<template>
  <form class="row" @submit.prevent="greet">
    <input id="greet-input" v-model="username" placeholder="Username" />
    <input id="greet-input" v-model="password" placeholder="Password" />
    <button id="submit-button" type="submit">Sign in</button>
  </form>

  <p>{{ greetMsg }}</p>
</template>
