// 封装分类数据业务相关代码
import { ref, onMounted } from 'vue'
import { getCategoryAPI } from '@/apis/category.js'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

export function useCategory() {
    let categoryData = ref({})
    let route = useRoute()

    async function getCategory(type = route.params.id) {
        let response = await getCategoryAPI(type)
        categoryData.value = response.result
        console.log(response)
    }

    // 新加载页面时获取数据
    onMounted(() => getCategory())

    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })

    return { categoryData }
}
