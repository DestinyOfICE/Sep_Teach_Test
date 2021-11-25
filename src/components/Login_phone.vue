<script setup lang="ts">
import { NCard, NInput, NSpace, NButton, NForm } from "naive-ui"

import { useRouter } from 'vue-router';
const router = useRouter()

</script>

<template>
    <n-card>
        <n-form>
            <n-space vertical>
                <n-input size="large" round placeholder="电话号" class="login-item" />
                <br />
                <n-input
                    size="large"
                    round
                    placeholder="密码"
                    type="password"
                    show-password-on="click"
                    :maxlength="8"
                    class="login-item"
                >
                    <template #suffix>
                        <!--输入框后缀-->
                        <n-button size="large" text>忘记密码？</n-button>
                    </template>
                </n-input>
                <br />
                <n-button size="large" round type="primary" class="login-item">登录</n-button>
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