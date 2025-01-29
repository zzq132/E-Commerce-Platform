import httpInstance from "@/utils/http.js"

export function getCategoryAPI(id) {
    return httpInstance.get("/category", {
        params: {
            id: id
        }
    })
}

export function getCategoryFilterAPI(id) {
    return httpInstance.get("/category/sub/filter", {
        params: {
            id: id
        }
    })
}

export const getSubCategoryAPI = (data) => {
    return httpInstance({
        url: '/category/goods/temporary',
        method: 'POST',
        data: data
    })
}