<script setup lang="ts">
import { NCard, NInput, NSpace, NButton, NForm, NSelect, FormInst, FormItemRule, } from "naive-ui"
import "vfonts/Lato.css"
import { ref } from "vue";
import axios from "axios";

import { useRouter } from 'vue-router';
import path from "path";
const router = useRouter();

const formRef = ref<FormInst | null>(null)


const accountType_options = ref([
    {
        label: "考生",
        value: 1,
    },
    {
        label: "任课老师",
        value: 2,
    },
    {
        label: "出卷人",
        value: 3,
    },
    {
        label: "阅卷人",
        value: 4,
    },
    {
        label: "题库管理员",
        value: 5,
    },
    {
        label: "教务管理员",
        value: 6,
    },
])
const formValue = ref({
    accountType: 1,
    id: "",
    psw: ""
})
const rules = {
    accountType: {
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入账号'
    },
    id: {
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入账号'
    },
    psw: {
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入密码'
    },
}

function toHome() {

    axios.post('/user.php', {
        accountType: formValue.value.accountType,
        id: formValue.value.id,
        psw: formValue.value.psw
    })
        .then(function (response: any) {
            console.log(response);
            //返回进行判断是否是用户，亦或者是什么用户
            switch (formValue.value.accountType) {
                case 1:
                    router.push({ path: "/stu/Home", query: { id: 1 } })
                    break
                case 2:
                    router.push({ path: "/tea/Home", query: { id: formValue.value.id } })
                    break
                case 3:
                    router.push({ path: "/write/Home", query: { id: formValue.value.id } })
                    break
                case 4:
                    router.push({ path: "/read/Home", query: { id: formValue.value.id } })
                    break
                case 5:
                    router.push({ path: "/admin/Home", query: { id: formValue.value.id } })
                    break
                case 6:
                    router.push({ path: "/academic/Home", query: { id: formValue.value.id } })
                break
            }
            // router.push("/stu/Home");
        })
        .catch(function (error: any) {
            console.log(error);
        });

}


</script>

<template>
    <n-card>
        <n-form ref="formRef" :model="formValue" :rules="rules">
            <n-space vertical>
                <n-select
                    class="login-item"
                    v-model:value="formValue.accountType"
                    :options="accountType_options"
                    path="accountType"
                ></n-select>
                <br />
                <n-input
                    size="large"
                    round
                    placeholder="学号/工号"
                    class="login-item"
                    path="id"
                    v-model:value="formValue.id"
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
                    path="psw"
                    v-model:value="formValue.psw"
                ></n-input>
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
    </n-card>
</template>

<style>
.login-item {
    width: 100%;
    height: 50px;
    line-height: 50px;
}
</style>