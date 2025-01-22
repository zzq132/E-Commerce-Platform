import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/styles/common.scss"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import { getCategory } from './apis/testAPI'
getCategory().then((response) => {
    console.log(response)
})