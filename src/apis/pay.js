import httpInstance from "@/utils/http.js"

export function getOrderInfoAPI(id) {
    return httpInstance({
        url: `/member/order/${id}`,
        method: 'get'
    })
}