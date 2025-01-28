import httpInstance from "@/utils/http.js"

// 加入购物车
export function addCartAPI(skuId, count) {
    return httpInstance({
        url: '/member/cart',
        method: 'post',
        data: {
            skuId: skuId,
            count: count
        }
    })
}

// 获取最新购物车列表
export function findNewCartListAPI() {
    return httpInstance({
        url: '/member/cart',
        method: 'get'
    })
}

// 删除购物车商品
export function delCartGoodsAPI(ids) {
    return httpInstance({
        url: '/member/cart',
        method: 'delete',
        data: {
            ids: ids
        }
    })
}

// 合并购物车
export function mergeCartAPI(data) {
    return httpInstance({
        url: '/member/cart/merge',
        method: 'post',
        data: data
    })
}