<script setup lang="ts">
import { NCard, NInput, NSpace, NButton, NForm } from "naive-ui"
import "vfonts/Lato.css"

</script>

<template>
    <n-card>
        <n-form>
            <n-space vertical>
                <n-input size="large" round placeholder="学号/工号" class="login-item" />
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
                        <n-button size="large" text >忘记密码？</n-button>
                    </template>
                </n-input>
                <br />
                <n-button size="large" round type="primary" class="login-item">登录</n-button>
            </n-space>
        </n-form>
        <!-- <br> -->
        <!-- <n-space justify="space-between"> -->
        <!-- <n-button size="large" text style="margin: 20px;float: left;">注册</n-button>
        <n-button size="large" text style="margin: 20px;float: right;">手机验证码登录</n-button> -->
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