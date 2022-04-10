<script setup lang="ts">
import { NCard, NInput, NSpace, NButton, NForm } from "naive-ui"
// import IfLogin from "../store/ifLogin";
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from "vue";
const router = useRouter()

const phone = ref("");
const psw = ref("");

function toHome() {
    // IfLogin.setState(true)
    // router.push("")
    // console.log(router.currentRoute.value.path)
    axios.post('/user.php', {
        phone: phone.value,
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
                <n-input
                    size="large"
                    round
                    placeholder="电话号"
                    class="login-item"
                    v-model:value="phone"
                />
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
                        <!--输入框后缀-->
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
        <!-- </n-space> -->
    </n-card>
</template>

<style>
/* 统一输入框和按钮 */
.login-item {
    width: 100%;
    height: 50px;
    line-height: 50px;
}
</style>