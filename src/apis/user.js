import httpInstance from "@/utils/http"

export function loginAPI(account, password) {
    return httpInstance({
        method: 'post',
        url: '/login',
        data: {
            account: account,
            password: password
        }
    })
}

export const getLikeListAPI = (limit = 4) => {
    return httpInstance({
        url: '/goods/relevant',
        method: 'get',
        params: {
            limit: limit
        }
    })
}
