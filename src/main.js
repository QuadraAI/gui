import { createApp } from "vue";

import "./styles.css";
import App from "./App.vue";
import router from './router';

import { initConfig, setConfigItems } from "./services/config.js"

initConfig();
setConfigItems();

createApp(App).use(router).mount('#app')
