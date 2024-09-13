// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import { useAuthStore } from './stores/authStore.js';

const authStore = useAuthStore();

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        redirect: () => authStore.isAuthenticated ?   { name: 'Home' } : { name: 'Login' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
