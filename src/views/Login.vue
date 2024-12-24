<script setup>
import SignInCard from "../components/SignInCard.vue";
</script>

<template>
    <div class="container login-background">
        <img src="/quadra-logo-small-backgroundless.webp" alt="Quadra logo backgroundless"/>
        <h1>Sign in to Quadra</h1>
        <SignInCard />
    </div>
</template>

<style scoped>
img {
  max-width: 100px;
  margin-top: 10px;
}
</style>