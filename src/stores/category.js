import { defineStore } from "pinia"
import { getCategoryAPI } from "@/apis/layout.js"
import { ref } from "vue"

//获取Header上的分类导航信息
export const useCategoryStore = defineStore("Category", () => {
    let categories = ref([])
    async function getCategory() {
        const response = await getCategoryAPI()
        categories.value = response.result
    }
    return { categories, getCategory }
})