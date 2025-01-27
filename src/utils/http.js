import axios from "axios"
import { ElMessage } from "element-plus"
import 'element-plus/es/components/message/style/css'
import { useUserStore } from "@/stores/user.js"
import { useRouter } from "vue-router"

//axios实例
const httpInstance = axios.create({
    baseURL: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
    timeout: 50000
})

//拦截器
//请求拦截器
httpInstance.interceptors.request.use((config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

//响应拦截器
httpInstance.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    //统一错误提示
    ElMessage({
        type: 'warning',
        message: error.response.data.message
    })
    //401 token失效处理
    const userStore = useUserStore()
    const router = useRouter()
    if (error.response.status === 401) {
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(error)
})

export default httpInstance