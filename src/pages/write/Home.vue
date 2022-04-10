<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NAvatar, NText } from 'naive-ui'
import { useRouter } from 'vue-router';
import My from "../../components/My.vue";
import Exam_item from '../../components/exam/exam_item.vue';
// import IfLogin from "../store/ifLogin";
// import { useMessage } from 'naive-ui'
// const message = useMessage()

const router = useRouter();

function hand() {
    router.push("/write/hand");
}
function auto() {
    router.push("/write/auto");
}
</script>

<template>
    <n-card title="考试" style="width: 1100px;margin: 10px auto;">
        <template #header-extra>
            <n-button @click="hand()">手动创建</n-button>
            <div style="width: 10px;"></div>
            <n-button @click="auto()">自动创建</n-button>
            <div style="width: 750px;"></div>
            <My></My>
        </template>
        <!-- <n-space> -->
        <!-- <n-tabs size="large" type="line"> -->

        <!-- <n-tab-pane tab="课程" name="1">
                123
                123
                123
        </n-tab-pane>-->
        <!-- <n-tab-pane tab="考试" name="2"> -->
        <Exam_item :ifAca="false" :ifTea="false" id="123"></Exam_item>
        <Exam_item :ifAca="false" :ifTea="false" id="123"></Exam_item>
        <Exam_item :ifAca="false" :ifTea="false" id="123"></Exam_item>
        <!-- </n-tab-pane> -->

        <!-- <My></My> -->
        <!-- <template #suffix>
            
        </template>-->
        <!-- </n-tabs> -->
        <!-- </n-space> -->
    </n-card>
</template>

<style>
</style>