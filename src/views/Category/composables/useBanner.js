import { ref, onMounted } from 'vue'    
import { getBanner } from '@/apis/home'

export function useBanner() {

    const bannerList = ref([])
    const getBannerList = async () => {
        const res = await getBanner({ distributionSite: "2" })
        bannerList.value = res.result
    }

    onMounted(() => {
        getBannerList()
    })

    return {
        bannerList
    }
}
