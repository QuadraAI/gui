// router.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

const X = true // will replace with a check_session() on backend

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
        redirect: () => X ? { name: 'Home' } : { name: 'Login' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
