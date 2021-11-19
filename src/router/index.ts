import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('../App.vue')
  // },
  // { path: '/', redirect: { name: 'Home' } }
  { path: '/login', component:Login },
  { path: '/register', component:Register },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router