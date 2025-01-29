import { defineStore } from "pinia"
import { ref } from 'vue'
import { loginAPI } from "@/apis/user.js"
import { useCartStore } from "./cart.js"
import { mergeCartAPI } from "@/apis/cart.js"

export const useUserStore = defineStore('User', () => {
    let userInfo = ref({})
    const cartStore = useCartStore()

    async function getUserInfo(account, password) {
        let response = await loginAPI(account, password)
        userInfo.value = response.result
        await mergeCartAPI(cartStore.cartList.map((item) => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartStore.updateCartList()
    }

    function clearUserInfo() {
        userInfo.value = {}
        cartStore.clearCart()
    }

    return { userInfo, getUserInfo, clearUserInfo }
}, {
    // 持久化存储
    persist: true
})