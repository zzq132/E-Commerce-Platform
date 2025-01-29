import httpInstance from "@/utils/http.js"

export function getCheckoutInfoAPI() {
    return httpInstance.get('/member/order/pre')
}

// 创建订单
export function createOrderAPI(data) {
    return httpInstance({
        url: '/member/order',
        method: 'post',
        data: data
    })
}