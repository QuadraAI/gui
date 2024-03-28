<script setup>
import SignInCard from "./SignInCard.vue";
</script>

<template>
  <div class="container login-background">
    <SignInCard />
  </div>
</template>

<style>
.login-background {
  background-image: url('https://source.unsplash.com/random/1920x1080/?landscape');
  background-size: cover;
}
</style>