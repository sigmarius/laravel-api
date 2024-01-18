import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue';
import Desks from '@/components/desks/Desks.vue';
import ShowDesk from '@/components/desks/ShowDesk.vue';

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
    {
        path: '/desks/:deskId',
        name: 'showDesk',
        component: ShowDesk,
        props: true
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})
