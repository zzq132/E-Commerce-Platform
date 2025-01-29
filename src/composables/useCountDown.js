// 封装倒计时函数

import { ref, computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export function useCountDown() {
    let time = ref(0)
    let formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    let timer = null

    function start(currentTime) {
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        }, 1000)
    }

    onUnmounted(() => {
        timer && clearInterval(timer)
    })

    return { formatTime, start }
}