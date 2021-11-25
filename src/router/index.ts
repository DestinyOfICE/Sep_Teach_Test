import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login_phone from "../components/Login_phone.vue"
import Login_id from "../components/Login_id.vue"
import Register from "../components/Register.vue"
import Hello from "../components/HelloWorld.vue"
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('../App.vue')
  // },
  // { path: '/', redirect: { name: 'Home' } }
  { path: '/login_phone', component:Login_phone },
  { path: '/login_id', component:Login_id },
  { path: '/register', component:Register },
  // { path: '/', component: Hello},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router