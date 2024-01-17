<script setup>
import { onMounted } from 'vue';
import useDesks from "@/composables/desks";
import PageHeader from "../../components/shared/PageHeader.vue"

const { isLoading, errors, desks, getDesks } = useDesks()

onMounted(getDesks)
</script>

<template>
    <PageHeader title="Desks Page" />
    <div v-if="isLoading" class="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
    </div>

    <ul v-if="desks.length" role="list" class="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
        <li v-for="desk in desks"
            :key="desk.id"
        >
            <a href="#" class="grid w-full min-w-[7rem] transform cursor-pointer place-items-center rounded-xl border border-blue-gray-50 bg-white px-3 py-2 transition-all hover:scale-105 hover:border-blue-gray-100 hover:bg-blue-gray-50 hover:bg-opacity-25">
                <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">{{ desk.name }}</p>
                </div>
            </a>
        </li>
    </ul>

    <div v-if="errors.length" class="hover:red-yellow-500 w-full my-2 select-none rounded-l-lg border-l-4 border-red-400 bg-red-100 p-4 font-medium">{{ errors }}</div>
</template>
