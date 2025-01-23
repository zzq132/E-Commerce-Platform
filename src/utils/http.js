import axios from "axios"

//axios实例
const httpInstance = axios.create({
    baseURL: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 50000
})

//拦截器
//请求拦截器
httpInstance.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

//响应拦截器
httpInstance.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

export default httpInstance