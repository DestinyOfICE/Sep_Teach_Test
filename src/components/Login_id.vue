<script setup lang="ts">
import { NCard, NInput, NSpace, NButton, NForm } from "naive-ui"
import "vfonts/Lato.css"
import { ref } from "vue";
import axios from "axios";

import { useRouter } from 'vue-router';
const router = useRouter();


const id = ref("")
const psw = ref("")
function toHome() {
    // IfLogin.setState(true)
    // router.push("")
    // console.log(router.currentRoute.value.path)
    // router.push("/stu/Home")
    
    axios.post('/user.php', {
        phone: id.value,
        password: psw.value
    })
        .then(function (response: any) {
            console.log(response);
            //返回进行判断是否是用户，亦或者是什么用户
            router.push("/stu/Home");
        })
        .catch(function (error: any) {
            console.log(error);
        });
    
}
</script>

<template>
    <n-card>
        <n-form>
            <n-space vertical>
                <n-input size="large" round placeholder="学号/工号" class="login-item" v-model:value="id"/>
                <br />
                <n-input
                    size="large"
                    round
                    placeholder="密码"
                    type="password"
                    show-password-on="click"
                    :maxlength="20"
                    class="login-item"
                    v-model:value="psw"
                >
                    <template #suffix>
                        <n-button size="large" text>忘记密码？</n-button>
                    </template>
                </n-input>
                <br />
                <n-button
                    size="large"
                    round
                    type="primary"
                    class="login-item"
                    v-on:click="toHome()"
                >登录</n-button>
            </n-space>
        </n-form>
        <!-- <br> -->
        <!-- <n-space justify="space-between"> -->
        <!-- <n-button size="large" text style="margin: 20px;float: left;">注册</n-button>
        <n-button size="large" text style="margin: 20px;float: right;">手机验证码登录</n-button>-->
        <!-- </n-space> -->
    </n-card>
</template>

<style>
.login-item {
    width: 100%;
    height: 50px;
    line-height: 50px;
}
</style>