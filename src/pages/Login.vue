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
    <n-card >
        <!-- <div v-if="!isRegister"> -->
        <!-- <n-tabs
                justify-content="space-evenly"
                type="line"
                size="large"
                default-value="login_phone"
        >-->
        <n-h1 style="text-align: center;">账号登录</n-h1>
        <!-- <n-tab-pane name="login_id" tab="机构账号登录"> -->
        <login_id></login_id>
        <!-- </n-tab-pane> -->
        <!-- </n-tabs> -->
        <!-- <n-button
                size="large"
                text
                v-on:click.native
                style="margin: 20px;float: left;"
                v-on:click="toRegister()"
        >新用户注册</n-button>-->
        <!-- <n-button size="large" text style="margin: 20px;float: right;">手机验证码登录</n-button> -->
        <!-- </div> -->

        <!-- <div v-else>
            <n-page-header subtitle="新用户注册" @back="toPhone()">
                <register></register>
            </n-page-header>
        </div>-->
    </n-card>
</template>

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