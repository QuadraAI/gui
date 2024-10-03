<script setup>
import { ref } from 'vue';

const props = defineProps({
    isLocal: {
        type: Boolean,
        default: undefined,
    },
});

const emit = defineEmits(['update:isLocal']);

const selectedValue = ref(props.isLocal !== undefined ? String(props.isLocal) : 'false');

function confirmSelection() {
    emit('update:isLocal', selectedValue.value === 'true');
}
</script>

<template>
    <fieldset>
        <legend>On what device Quadra Core is currently running?</legend>

        <input type="radio" id="server" name="device" value="false" v-model="selectedValue" />
        <label for="server">A Remote Server</label>

        <input type="radio" id="localhost" name="device" value="true" v-model="selectedValue" />
        <label for="localhost">This Device</label>

        <button @click="confirmSelection" :disabled="selectedValue === 'false' && props.isLocal === undefined">Confirm</button>
    </fieldset>
</template>

<style scoped>
</style>