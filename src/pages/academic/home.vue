<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NAvatar, NText } from 'naive-ui'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import My from "../../components/My.vue";
import Exam_item from '../../components/exam/exam_item.vue';
// import IfLogin from "../store/ifLogin";
// import { useMessage } from 'naive-ui'
// const message = useMessage()

const router = useRouter();
const route = useRoute();
let id = route.query.id;


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
            <!-- <n-tab-pane tab="指定出卷" name="2"> -->
            <!-- <div @click="ToExam()">
                    <Exam_item :ifTea="False" id="23"></Exam_item>
            </div>-->
            <!-- </n-tab-pane> -->
            <n-tab-pane tab="发布考试" name="1">
                <Exam_item :ifAca="false" :ifTea="true" id="123"></Exam_item>
                <Exam_item :ifAca="false" :ifTea="true" id="123"></Exam_item>
                <Exam_item :ifAca="false" :ifTea="true" id="123"></Exam_item>
            </n-tab-pane>
            <n-tab-pane tab="指定阅卷" name="2">
                <!-- <div @click="ToScore()"> -->
                <Exam_item :ifTea="false" :ifAca="true" id="123"></Exam_item>
                <!-- </div> -->
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