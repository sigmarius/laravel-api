<script setup>
import { onMounted } from 'vue';
import useDesks from "@/composables/desks";
import PageHeader from "../../components/shared/PageHeader.vue"

const props = defineProps({
    deskId: {
        required: true,
        type: String
    }
});

const { isLoading, errors, desk, getDesk, updateDesk } = useDesks()

onMounted(() => getDesk(props.deskId))

const saveName = async () => await updateDesk(props.deskId)
</script>

<template>
    <div v-if="isLoading" class="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-gray-400 rounded-full" role="status" aria-label="loading">
        <span class="sr-only">Loading...</span>
    </div>

    <div v-if="errors">
        <div v-for="(v, k) in errors" :key="k" class="bg-red-400 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0">
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>

    <div>
        <PageHeader :title="'Desk Name: ' + desk.name" />

        <form action="">
            <input
                v-model="desk.name"
                @blur="saveName"
                type="text"
                placeholder="Desk Name"
                class="input input-bordered w-full max-w-xs"/>
        </form>
    </div>
</template>
