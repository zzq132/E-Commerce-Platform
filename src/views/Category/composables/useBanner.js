// 封装轮播图相关业务代码
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home.js'

export function useBanner() {
    let bannerPicture = ref([])

    async function getBanner() {
        let response = await getBannerAPI(2)
        bannerPicture.value = response.result
        console.log(response)
    }

    onMounted(() => {
        getBanner()
    })

    return { bannerPicture }
}
