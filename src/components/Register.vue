<script setup lang="ts">
import axios from "axios";
import { NCard, NInput, NSpace, NButton, NForm } from "naive-ui"
import { ref } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter()


const phone = ref("")
const psw = ref("")
axios.post('/register.php', {
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

</script>

<template>
    <n-card>
        <n-form>
            <n-space vertical>
                <n-input size="large" round placeholder="手机号" class="login-item" v-model:value="phone" />
                <!-- <br /> -->
                <!-- <n-input
                    size="large"
                    round
                    placeholder="验证码"
                    :maxlength="4"
                    class="login-item"
                >
                    <template #suffix>
                        <n-button size="large" text>获取验证码</n-button>
                    </template>
                </n-input> -->
                <br />
                <n-input
                    size="large"
                    round
                    placeholder="设置密码"
                    :maxlength="8"
                    class="login-item"
                    v-model:value="psw"
                ></n-input>
                <br />
                <n-button size="large" round type="primary" class="login-item">注册</n-button>
            </n-space>
        </n-form>
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