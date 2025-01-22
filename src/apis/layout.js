import httpInstance from "@/utils/http.js"

export function getCategoryAPI() {
    return httpInstance.get("/home/category/head")
}