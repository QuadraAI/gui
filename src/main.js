import { createApp } from "vue";
import { getActivePinia, setActivePinia, createPinia } from 'pinia';

import "./styles.css";
import App from "./App.vue";

import router from './router';

function ensureActivePinia() {
    if (!getActivePinia()) {
        setActivePinia(createPinia());
    }
    return getActivePinia();
}

const application = createApp(App);
const pinia = ensureActivePinia();

application.use(router)
    .use(pinia)
    .mount('#app');


