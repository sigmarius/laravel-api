<script setup>
import NavMenu from "../components/shared/NavMenu.vue"
</script>

<template>
    <div>
        <NavMenu/>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

