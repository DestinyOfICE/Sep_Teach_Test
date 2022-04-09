<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NAvatar, NText, NPageHeader } from 'naive-ui'
import My from "../../components/My.vue";
import router from '../../router';

function backHome() {
    router.go(-1)
}
</script>

<template>
    <n-card>
        <n-page-header subtitle="账户管理" @back="backHome()">
            <template #extra>
                <My></My>
            </template>
        </n-page-header>
        <n-tabs>
            <n-tab-pane name="1" tab="基本信息">

            </n-tab-pane>
            <n-tab-pane name="2" tab="修改密码">

            </n-tab-pane>
            <n-tab-pane name="3" tab="应用管理">

            </n-tab-pane>
            <n-tab-pane name="4" tab="登录日志">

            </n-tab-pane>
        </n-tabs>
    </n-card>
</template>

<style>
</style>