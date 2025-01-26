import httpInstance from "@/utils/http"

export function getGoodDetailAPI(id) {
    return httpInstance({
        url: "/goods",
        method: "get",
        params: {
            id: id
        }
    })
}

export function getHotGoodsAPI(id, type, limit = 3) {
    return httpInstance({
        url: "/goods/hot",
        method: "get",
        params: {
            id: id,
            type: type,
            limit: limit
        }
    })
}