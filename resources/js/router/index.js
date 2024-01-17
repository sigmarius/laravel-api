import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue';
import Desks from '@/components/desks/Desks.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/desks',
        name: 'desks',
        component: Desks
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})
