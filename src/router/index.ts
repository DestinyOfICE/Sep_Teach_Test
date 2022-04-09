import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login_phone from "../components/Login_phone.vue"
import Login_id from "../components/Login_id.vue"
import Register from "../components/Register.vue"
import Null from "../components/Null.vue"

import Login from "../pages/Login.vue"
import stu_Home from "../pages/stu/Home.vue"
import stu_Info from "../pages/stu/Info.vue"
import stu_Inbox from "../pages/stu/Inbox.vue"
import stu_Message from "../pages/stu/Message.vue"
import stu_Score from "../pages/stu/Score.vue"
import stu_Exam from "../pages/stu/Exam.vue"

import admin_Home from "../pages/admin/home.vue"
import admin_Bank from "../pages/admin/bank.vue"
import admin_New from "../pages/admin/new.vue"

import tea_Home from "../pages/tea/home.vue"
import tea_Monitor from "../pages/tea/monitor.vue"
import tea_Publish from "../pages/tea/publish.vue"
import tea_Score from "../pages/tea/score.vue"

import write_Home from "../pages/write/Home.vue"
import write_Hand from "../pages/write/hand.vue"
import write_Auto from "../pages/write/auto.vue"
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('../App.vue')
  // },
  // { path: '/', component: Null },
  // { path: '/login_phone', component:Login_phone },
  // { path: '/login_id', component:Login_id },
  // { path: '/register', component:Register },
  // { path: '/', component: Hello},

  { path: '/', component: Login },
  { path: '/stu/Home', component: stu_Home },
  { path: '/stu/Info', component: stu_Info },
  { path: '/stu/Inbox', component: stu_Inbox },
  { path: '/stu/Message', component: stu_Message },
  { path: '/stu/Exam', component: stu_Exam },
  { path: '/stu/Score', component: stu_Score },

  { path: '/tea/Home', component: tea_Home },
  { path: '/tea/Monitor', component: tea_Monitor },
  { path: '/tea/Publish', component: tea_Publish },
  { path: '/tea/Score', component: tea_Score },

  { path: '/admin/Home', component: admin_Home },
  { path: '/admin/Bank', component: admin_Bank },
  { path: '/admin/New', component: admin_New },

  { path: '/write/Home', component: write_Home },
  { path: '/write/Hand', component: write_Hand },
  { path: '/write/Auto', component: write_Auto },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router