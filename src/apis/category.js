import httpInstance from "@/utils/http.js"

export function getCategoryAPI(id) {
    return httpInstance.get("/category", {
        params: {
            id: id
        }
    })
}