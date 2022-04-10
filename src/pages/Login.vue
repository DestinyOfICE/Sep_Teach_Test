<script setup lang="ts">
import { NCard, NTabs, NTabPane, NButton, NPageHeader, NH1 } from 'naive-ui'
import { useRouter } from 'vue-router';
import { ref } from "vue"
import axios from 'axios';
import Login_id from "../components/Login_id.vue"
import Login_phone from "../components/Login_phone.vue"
// import Register from "../components/Register.vue"

const router = useRouter()

// router.push("/login_phone")

const isRegister = ref(false);

function toPhone() {
    // router.push("/login_phone")
    isRegister.value = false;
}
// function toId() {
//     router.push("/login_id")
//     isRegister.value = false;
// }


</script>


<template>
    <n-card>
        <n-h1 style="text-align: center;">账号登录</n-h1>
        <login_id></login_id>
    </n-card>
</template>
s
<style>
/* .index {
    margin: auto;
    position: relative;
    width: 25vw;
    height: 30vw;
    padding: 30px;
    border-radius: 10px;
} */
/* n-tab-pane {
    width: 100px;
} */
input::-ms-clear,
input::-ms-reveal {
    display: none;
}
</style>