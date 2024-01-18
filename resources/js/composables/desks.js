import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useDesks() {
    const desk = ref([])
    const desks = ref([])

    const errors = ref('')
    const router = useRouter()

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

    const getDesk = async (id) => {
        axios.get(`/api/v1/desks/${id}`)
            .then(response => {
                desk.value = response.data.data
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

    const updateDesk = async (id) => {
        errors.value = ''
        try {
            await axios.patch(`/api/v1/desks/${id}`, desk.value)
            await router.push({ name: 'desks' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value = e.response.data.errors
                }
            }
        }
    }

    return {
        isLoading,
        errors,
        desk,
        desks,
        getDesk,
        getDesks,
        updateDesk
    }
}
