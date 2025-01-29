import httpInstance from "@/utils/http.js"
import { h } from "vue"

export function getBannerAPI(distributionSite = 1) {
    return httpInstance.get("home/banner", {
        params: {
            distributionSite: distributionSite
        }
    })
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