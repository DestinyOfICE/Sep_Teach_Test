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


function ToRead() {
    router.push("/read/Exam")
}
function ToScore() {
    router.push("/stu/Score")
}

const False = false
</script>

<template>
    <n-card>
        <!-- <n-space> -->
        <n-tabs size="large" type="line">
            <!-- <n-tab-pane tab="指定出卷" name="2"> -->
                <!-- <div @click="ToExam()">
                    <Exam_item :ifTea="False" id="23"></Exam_item>
                </div> -->
            <!-- </n-tab-pane> -->
            <n-tab-pane tab="选择阅卷" name="3">
                <div @click="ToRead()">
                    <Exam_item :ifTea="False" :ifAca="False" id="123"></Exam_item>
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