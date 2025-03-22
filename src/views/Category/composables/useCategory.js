import { ref, onMounted } from 'vue'
import { getCategory } from '@/apis/category'
import { useRoute } from 'vue-router'      
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {

    const route = useRoute()

    const categoryList = ref({})
    
    const getCategoryList = async (id = route.params.id) => {
        const res = await getCategory(id)
        categoryList.value = res.result
    }
    
    onMounted(() => {
        getCategoryList()
    })
    
    
    
    onBeforeRouteUpdate(async (to) => {
        getCategoryList(to.params.id)
    })  

    return {
        categoryList
    }
}
