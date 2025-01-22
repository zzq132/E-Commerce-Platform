import httpInstance from "@/utils/http.js"

export function getCategory() {
    return httpInstance.get("/home/category/head")
}