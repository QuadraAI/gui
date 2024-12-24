<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    isLocal: {
        type: Boolean,
        default: undefined,
    },
});

const emit = defineEmits(['update:isLocal']);

const selectedValue = ref(props.isLocal !== undefined ? String(props.isLocal) : '');

const isSelectionValid = computed(() => selectedValue.value !== '');

function confirmSelection(value) {
    selectedValue.value = String(value);
    if (isSelectionValid.value) {
        emit('update:isLocal', value);
    }
}
</script>

<template>
    <h1>Is Core running locally ?</h1>
    <div class="button-group">
        <button @click="() => confirmSelection(true)" :class="{ active: selectedValue === 'true' }">
            Yes
        </button>
        <button @click="() => confirmSelection(false)" :class="{ active: selectedValue === 'false' }">
            No
        </button>
    </div>
</template>

<style scoped>
.button-group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 10px;
    width: 100%;
    max-width: 200px;
}

button {
    margin-top: 7px;
    padding: 5px 10px;
    background-color: #3f3f46;
    color: white;
    width: 100%;
    border: none;
    cursor: pointer;
    font-weight: bold;
}

button:hover {
    background-color: #c084fc;
}

button:active {
    background-color: #9333ea;
}

button.active {
    background-color: #a855f7;
}
</style>