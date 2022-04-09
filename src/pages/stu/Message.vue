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
        <n-page-header subtitle="我的消息" @back="backHome()">
            <template #extra>
                <My></My>
            </template>
        </n-page-header>
    </n-card>
</template>

<style>
</style>