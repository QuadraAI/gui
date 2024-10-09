<script setup>
import { ref } from 'vue';

const isVerified = ref(false);
const productKey = ref(undefined);
</script>

<template>
    <!-- todo: first ask for product key as a security then prompt the form to change the password -->
     <h1>Setting up your user</h1>
    <div v-if="isVerified === false">
        <!-- todo: add method in auth service -->
        <form @submit.prevent="">
            <label for="product-key">Please enter your product key</label>
            <input v-model="productKey" name="product-key"/>
            <button>Authenticate</button>
        </form>
    </div>
    <div v-else></div>
</template>

<style scoped></style>