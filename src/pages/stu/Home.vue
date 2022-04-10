<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NAvatar, NText, NSelect } from 'naive-ui'
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import My from "../../components/My.vue";
import Exam_item from '../../components/exam/exam_item.vue';
import { onBeforeMount, reactive, ref, watch } from 'vue';
import axios from 'axios';
// import IfLogin from "../store/ifLogin";
// import { useMessage } from 'naive-ui'
// const message = useMessage()

const router = useRouter();
const route = useRoute();
let data = reactive({
    course_options: [],
    course_exams: [],
})
let id = route.query.id;

axios.get('http://127.0.0.1:4523/mock/697077/account/info/stuid_cos?stuId=189')
    .then(function (response: any) {
        let info = response.data.info
        for (let index = 0; index < info.length; index++) {
            data.course_options.push({
                label: info[index].cosName,
                value: info[index].cosId,
            })
        }
        console.log(data.course_options)
    })
    .catch(function (error: any) {
        console.log(error);
    });

const course = ref("")

watch(course, (val, preVal) => {
    axios.get('http://127.0.0.1:4523/mock/697077/paper/get_all_paper_cosid', {
        params:
        {
            cosId: 1
        }
    }).then(function (response: any) {
        let info = response.data.all_paper_info
        console.log(info)

        for (let index = 0; index < info.length; index++) {
            axios.get('http://127.0.0.1:4523/mock/697077/paper_finished/paper_result', {
                params: {
                    paperId: info[index].paperId,
                    stuId: id
                }
            }).then(function (response: any) {
                console.log(123)
                data.course_exams.push(
                    {
                        exam: info[index],
                        finishStatus: 0
                    }
                )
                console.log(data.course_exams)
            }).catch(function (error: any) {
                console.log(error);
            });
        }
    })
})



function ToExam(paperId: number) {
    router.push({ path: "/stu/Exam", query: { paperId: paperId } })
}
function ToScore() {
    router.push("/stu/Score")
}



</script>

<template>
    <n-card>

        <n-tabs size="large" type="line">
            <n-tab-pane tab="考试" name="2">
                <n-select :options="data.course_options" v-model:value="course"></n-select>
                <div @click="ToExam(item.exam.paperId)" v-for="item in data.course_exams">
                    <Exam_item :ifAca="false" :ifTea="false" id="23"></Exam_item>
                </div>
            </n-tab-pane>
            <n-tab-pane tab="成绩" name="3">
                <n-select :options="data.course_options" v-model:value="course"></n-select>
                <div @click="ToScore(item.exam.paperId)" v-for="item in data.course_exams">
                    <Exam_item :ifAca="false" :ifTea="false" id="123"></Exam_item>
                </div>
            </n-tab-pane>

            <My></My>
            <template #suffix>
                <My></My>
            </template>
        </n-tabs>

        </n-card>
</template>

<style>
</style>