// 把components中所有组件进行全局化注册
// 通过插件方式
import ImageView from './ImageView/index.vue'
import SKU from './XtxSku/index.vue'

export const componentsPlugin = {
    install(app) {
        // app.component("组件名字", 组件配置对象) -> 全局组件注册
        app.component('ImageView', ImageView)
        app.component('SKU', SKU)
    }
}