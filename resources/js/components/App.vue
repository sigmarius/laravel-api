<template>
    <div class="mx-auto container">
        <ul class="flex gap-3">
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'about'}">About</router-link>
            </li>
        </ul>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

