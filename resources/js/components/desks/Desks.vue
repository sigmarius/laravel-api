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
            <router-link
                :to="{name: 'showDesk', params: {deskId: desk.id}}"
                class="card bg-base-100 shadow-xl"
            >
                <div class="card-body">
                    <h2 class="card-title">{{ desk.name }}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>

    <div v-if="errors.length" class="hover:red-yellow-500 w-full my-2 select-none rounded-l-lg border-l-4 border-red-400 bg-red-100 p-4 font-medium">{{ errors }}</div>
</template>
