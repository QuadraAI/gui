<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SignIn from "./components/SignIn.vue";
</script>

<template>
  <div class="container login-background">
    <SignIn />
  </div>
</template>

<style>
.login-background {
  background-image: url('https://source.unsplash.com/random/1920x1080/?landscape');
  background-size: cover;
}
</style>