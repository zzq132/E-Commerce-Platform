import httpInstance from "@/utils/http.js"

/*
params: {
    orderState:0,
  page:1,
  pageSize:2
}
*/
export function getUserOrderAPI(params) {
    return httpInstance({
        url: '/member/order',
        method: 'get',
        params: params
    })
}
