import httpInstance from "@/utils/http.js"
import { h } from "vue"

export function getBannerAPI() {
    return httpInstance.get("home/banner")
}

export function getNewProductAPI() {
    return httpInstance.get("/home/new")
}

export function getHotProductAPI() {
    return httpInstance.get("/home/hot")
}

export function getProductListAPI() {
    return httpInstance.get("/home/goods")
}