import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { imgLazyPlugin } from './directives/index.js'
import { componentsPlugin } from './components/index.js'

import App from './App.vue'
import router from './router'

import "@/styles/common.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(imgLazyPlugin)
app.use(componentsPlugin)

app.mount('#app')