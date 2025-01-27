import { defineStore } from "pinia"
import { ref } from 'vue'
import { loginAPI } from "@/apis/user.js"

export const useUserStore = defineStore('User', () => {
    let userInfo = ref({})

    async function getUserInfo(account, password) {
        let response = await loginAPI(account, password)
        userInfo.value = response.result
    }

    function clearUserInfo() {
        userInfo.value = {}
    }

    return { userInfo, getUserInfo, clearUserInfo }
}, {
    // 持久化存储
    persist: true
})