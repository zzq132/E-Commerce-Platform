import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { imgLazyPlugin } from './directives/index.js'
import { componentsPlugin } from './components/index.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import "@/styles/common.scss"

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(imgLazyPlugin)
app.use(componentsPlugin)

app.mount('#app')