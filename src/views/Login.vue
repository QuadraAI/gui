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
.login-background {
    background-color: #f5f3ff;
    background-size: cover;
}

h1 {
    font-size: 24px;
    font-weight: 400;
}

img {
  max-width: 100px;
  margin-top: 10px;
}
</style>