// router.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Setup from './views/Setup.vue'

import { useAuthStore } from './stores/authStore.js';
import { useConfigStore } from './stores/configStore.js';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/setup', name: 'Setup', component: Setup },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    const configStore = useConfigStore();
    if (configStore.firstLaunch == true && to.name !== "Setup") {
        return next({ name: 'Setup' });
    }
    if (authStore.isAuthenticated === false
        && to.name !== 'Login'
        && to.name !== 'Setup'
    ) {
        return next({ name: 'Login' });
    }
    next();
});

export default router
