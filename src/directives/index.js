import { useIntersectionObserver } from "@vueuse/core"

export let imgLazyPlugin = {
    install(app) {
        app.directive("img-lazy", {
            mounted(el, binding) {
                let { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
                    console.log(isIntersecting)
                    if (isIntersecting) {
                        el.src = binding.value
                        stop() //已经设置过src便停止监听
                    }
                })
            }
        })
    }
}