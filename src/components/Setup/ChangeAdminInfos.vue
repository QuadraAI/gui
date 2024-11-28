<script setup>
import { ref } from 'vue';
import { tryLogin } from '../../services/auth';
import { changePassword } from '../../services/user';
import { useRouter } from "vue-router";
import { completeSetup } from '../../services/setup';

const router = useRouter();
const pushToHome = () => router.push('/');

const isUpperCase = ref(false);
const isLowerCase = ref(false);
const hasDigit = ref(false);
const hasSpecialChar = ref(false);
const validLength = ref(false);

const isVerified = ref(false);
const productKey = ref("");

const newUsername = ref("");
const newPassword = ref("");
const confirmedPassword = ref("");

const licenseError = ref("");
const passwordMatch = ref(true);

const checkPassword = () => {
    const specialChars = "#?!@$%^&*-";
    const password = newPassword.value;

    isUpperCase.value = [...password].some(char => char >= 'A' && char <= 'Z');
    isLowerCase.value = [...password].some(char => char >= 'a' && char <= 'z');
    hasDigit.value = [...password].some(char => char >= '0' && char <= '9');
    hasSpecialChar.value = [...password].some(char => specialChars.includes(char));
    validLength.value = password.length >= 5 && password.length <= 24;

    passwordMatch.value = newPassword.value === confirmedPassword.value;

    return isUpperCase.value
        && isLowerCase.value
        && hasDigit.value
        && hasSpecialChar.value
        && validLength.value
        && passwordMatch.value;
};

// todo: add license checking
const checkLicense = async () => {
    licenseError.value = "";
    if (false) {
        licenseError.value = "Wrong license specified";
        return;
    }
    isVerified.value = true;
};

const changeAdminPassword = async () => {
    if (await tryLogin("quadra", "quadra") === false || checkPassword() === false) {
        return;
    }
    let resChange = await changePassword("quadra", newPassword.value);
    if (resChange === false) {
        // todo: add error message (possibly useless)
        return;
    }
    let loginNewPass = await tryLogin("quadra", newPassword.value)
    if (loginNewPass === false) {
        // todo: add error message (possibly useless)
    }
    completeSetup();
    pushToHome();
    return;
};
</script>

<template>
    <h1>Setting up your user</h1>
    <div v-if="isVerified === false">
        <form @submit.prevent="checkLicense">
            <label for="product-key">Please enter your product key</label>
            <input v-model.lazy="productKey" name="product-key" />
            <button>Authenticate</button>
        </form>
        <p v-if="licenseError" style="color: red;">{{ licenseError }}</p>
    </div>
    <div v-else>
        <form @submit.prevent="changeAdminPassword">
            <label>Username</label>
            <input v-model.lazy.trim="newUsername" name="username" />

            <label>Password</label>
            <input v-model.lazy="newPassword" name="password" @input="checkPassword" type="password" />

            <label>Confirm Password</label>
            <input v-model.lazy="confirmedPassword" name="confirmed-password" @input="checkPassword" type="password" />

            <div>
                <p :style="{ color: isUpperCase ? 'black' : 'red' }">At least one uppercase letter</p>
                <p :style="{ color: isLowerCase ? 'black' : 'red' }">At least one lowercase letter</p>
                <p :style="{ color: hasDigit ? 'black' : 'red' }">At least one digit</p>
                <p :style="{ color: hasSpecialChar ? 'black' : 'red' }">At least one special character (#?!@$%^&*-)</p>
                <p :style="{ color: validLength ? 'black' : 'red' }">5-24 characters in length</p>
                <p :style="{ color: passwordMatch ? 'black' : 'red' }">Passwords must match</p>
            </div>

            <button :disabled="!checkPassword()">Submit</button>
        </form>
    </div>
</template>