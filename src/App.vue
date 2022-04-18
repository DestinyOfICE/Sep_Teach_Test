<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

// import IfLogin from "./store/ifLogin";
// import { useRouter } from 'vue-router';
// const router = useRouter()
// import {ref} from "vue"

import auto from './pages/write/auto.vue';
import hand from './pages/write/hand.vue';
import newVue from './pages/admin/new.vue';

import single from './components/exam/single.vue';
</script>

<template>
  <!-- <newVue></newVue> -->
  <!-- <div v-if="!IfLogin.state.ifLogin.value">
    <Login></Login>
  </div>
  <div v-else>
    <Home></Home>
  </div> -->

  <router-view></router-view>

  <!-- <hand></hand> -->
  <!-- <auto></auto> -->
  <!-- <Exam></Exam> -->
  <!-- <Stu_score></Stu_score> -->
</template>

<style>
* {
  /* text-align: center; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
