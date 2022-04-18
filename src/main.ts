import { createApp } from 'vue'
import Vue from "vue"
import App from './App.vue'
// import vuecookie from 'vue-cookie'

import router from './router/index'

createApp(App).use(router).mount('#app')
