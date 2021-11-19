<script setup lang="ts">
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"

import { useRouter } from 'vue-router';
const router = useRouter()

function toLogin() {
    router.push("/login")
}
function toRegister() {
    router.push("/register")
}

</script>

<template>
    <div>
        <div v-on:click="toLogin()">Go to login</div>
        <div v-on:click="toRegister()">Go to Register</div>
    </div>
    <router-view></router-view>
</template>

<style>
</style>