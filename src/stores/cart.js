import { defineStore } from "pinia"
import { ref, computed } from "vue"
import { useUserStore } from "./user.js"
import { addCartAPI, findNewCartListAPI, delCartGoodsAPI } from "@/apis/cart.js"

export const useCartStore = defineStore("Cart", () => {
    let cartList = ref([])
    const userStore = useUserStore()

    let allCount = computed(() => cartList.value.reduce((accumulate, current) => accumulate + current.count, 0))
    let allPrice = computed(() => cartList.value.reduce((accumulate, current) => accumulate + current.count * current.price, 0))
    let isAll = computed(() => cartList.value.every((value) => value.selected))
    let selectedNumber = computed(() => cartList.value.reduce((accumulate, current) => {
        if (current.selected) {
            accumulate++
        }
        return accumulate
    }, 0))
    let isLogin = computed(() => userStore.userInfo.token)
    let selectedPrice = computed(() => cartList.value.reduce((accumulate, current) => {
        if (current.selected) {
            accumulate += (current.price * current.count)
        }
        return accumulate
    }, 0))

    async function addCart(goods) {
        if (isLogin.value) {
            await addCartAPI(goods.skuId, goods.count)
            updateCartList()
        } else {
            let item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                item.count++
            } else {
                cartList.value.push(goods)
            }
        }
    }

    async function delCart(skuId) {
        if (isLogin.value) {
            await delCartGoodsAPI([skuId])
            updateCartList()
        } else {
            let index = cartList.value.findIndex((item) => skuId == item.skuId)
            cartList.value.splice(index, 1)
        }

    }

    async function updateCartList() {
        let response = await findNewCartListAPI()
        cartList.value = response.result
    }

    function changeAllSelected(selected) {
        cartList.value.forEach((value) => value.selected = selected)
    }

    function clearCart() {
        cartList.value = []
    }

    return { cartList, addCart, delCart, allCount, allPrice, isAll, changeAllSelected, selectedNumber, selectedPrice, clearCart, updateCartList }
}, {
    persist: true
})