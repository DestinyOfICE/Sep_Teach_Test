<script setup lang="ts">
import { NCard, NTabs, NTabPane, NButton, NPageHeader } from 'naive-ui'
import { useRouter } from 'vue-router';
import { ref } from "vue"

const router = useRouter()
router.push("/login_phone")

const isRegister = ref(false);

function toPhone() {
    router.push("/login_phone")
    isRegister.value = false;
}
function toId() {
    router.push("/login_id")
    isRegister.value = false;
}
function toRegister() {
    router.push("/register")
    isRegister.value = true;
}

</script>


<template>
    <n-card class="index">
        <div v-if="!isRegister">
            <n-tabs
                justify-content="space-evenly"
                type="line"
                size="large"
                default-value="login_phone"
            >
                <n-tab-pane name="login_phone" tab="手机号登录" v-on:click="toPhone()">
                    <!--点击tab的区域后router会自动跳转对应页面，感觉有点不合理-->
                    <router-view></router-view>
                </n-tab-pane>
                <n-tab-pane name="login_id" tab="机构账号登录" v-on:click="toId()">
                    <router-view></router-view>
                </n-tab-pane>
            </n-tabs>
            <n-button
                size="large"
                text
                v-on:click.native="toRegister()"
                style="margin: 20px;float: left;"
            >新用户注册</n-button>
            <n-button size="large" text style="margin: 20px;float: right;">手机验证码登录</n-button>
        </div>

        <div v-else>
            <n-page-header subtitle="新用户注册" @back="toPhone()">
                <router-view></router-view>
            </n-page-header>
        </div>
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