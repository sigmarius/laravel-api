import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useDesks() {
    const desks = ref([])

    const errors = ref('')

    const isLoading = ref(true);

    const getDesks = async () => {
        axios.get('/api/v1/desks')
            .then(response => {
                desks.value = response.data.data
            })
            .catch(error => {
                for (const key in error) {
                    errors.value = error.message
                }
            })
            .finally(() => {
                isLoading.value = false
            })
    }


    return {
        isLoading,
        errors,
        desks,
        getDesks,
    }
}
