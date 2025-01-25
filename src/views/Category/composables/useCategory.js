// 封装分类数据业务相关代码
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryAPI } from '@/apis/category.js'

export function useCategory() {
    let categoryData = ref({})
    let route = useRoute()

    async function getCategory(type = route.params.id) {
        let response = await getCategoryAPI(type)
        categoryData.value = response.result
        console.log(response)
    }

    watch(() => route.params.id, (newValue) => {
        getCategory(newValue)
    })

    return { categoryData }
}
