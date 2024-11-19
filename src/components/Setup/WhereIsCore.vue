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

function confirmSelection() {
    if (isSelectionValid.value) {
        emit('update:isLocal', selectedValue.value === 'true');
    }
}
</script>

<template>
    <fieldset>
        <legend>Is Quadra Core running on this machine?</legend>

        <input type="radio" id="localhost" name="device" value="true" v-model="selectedValue" />
        <label for="localhost">Yes</label>

        <input type="radio" id="server" name="device" value="false" v-model="selectedValue" />
        <label for="server">No</label>

        <button @click="confirmSelection" :disabled="!isSelectionValid">
            Confirm
        </button>
    </fieldset>
</template>

<style scoped></style>