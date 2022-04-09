<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NAvatar, NText } from 'naive-ui'
import { useRouter } from 'vue-router';
import My from "../../components/My.vue";
import Exam_item from '../../components/exam/exam_item.vue';
// import IfLogin from "../store/ifLogin";
// import { useMessage } from 'naive-ui'
// const message = useMessage()

const router = useRouter();

function ToExam() {
    router.push("/stu/Exam")
}
function ToScore() {
    router.push("/stu/Score")
}
</script>

<template>
    <n-card>
        <!-- <n-space> -->
        <n-tabs size="large" type="line">
            <!-- <n-tab-pane tab="课程" name="1">
                123
                123
                123
            </n-tab-pane>-->
            <n-tab-pane tab="考试" name="2">
                <div @click="ToExam()">
                    <Exam_item></Exam_item>
                </div>

            </n-tab-pane>
            <n-tab-pane tab="成绩" name="3">
                <div @click="ToScore()">
                    <Exam_item></Exam_item>
                </div>

            </n-tab-pane>

            <My></My>
            <template #suffix>
                <My></My>
            </template>
        </n-tabs>
        <!-- </n-space> -->
    </n-card>
</template>

<style>
</style>