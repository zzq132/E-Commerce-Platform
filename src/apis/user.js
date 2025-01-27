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