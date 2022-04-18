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

//获取课程的信息
axios.get('http://127.0.0.1/account/info/stuid_cos?stuId=189')
    .then(function (response: any) {
        let info = response.data.info
        // for (let index = 0; index < info.length; index++) {
        //     data.course_options.push({
        //         label: info[index].cosName,
        //         value: info[index].cosId,
        //     })
        // }




        // for (let index = 0; index < info.length; index++) {
        data.course_options.push({
            label: "计算机网络原理",
            value: 50,
        })
        // data.course_options.push({
        //     label: "计算机网络原理",
        //     value: 51,
        // })
        // }



        console.log(data.course_options)
    })
    .catch(function (error: any) {
        console.log(error);
    });

const course = ref("")

//监测切换课
watch(course, (val, preVal) => {
    axios.get('http://127.0.0.1/paper/get_all_paper_cosid', {
        params:
        {
            cosId: 1
        }
    }).then(function (response: any) {
        // let info = response.data.all_paper_info
        let info = [{
            "paperId": 1,
            "psId": 1,
            "pcId": "234",
            "beginTime": "2022-03-22 14:50:55",
            "endTime": "2022-03-22 14:50:55",
            "setTime": "2022-03-22 14:50:55",
            "pcosId": 1,
            "aggrerateScore": 100,
            "totalTime": 90,
            "paperName": "2020计算机组成原理考试之第一学期期末考试",
            "schoiceNum": 3,
            "mchoiceNum": 5,
            "judgeNum": 10,
            "fillNum": 20
        }, {
            "paperId": 2,
            "psId": 5,
            "pcId": "6",
            "beginTime": "2022-03-31 02:00:00",
            "endTime": "2022-03-31 04:00:00",
            "setTime": "2022-03-29 06:00:00",
            "pcosId": 1,
            "aggrerateScore": 100,
            "totalTime": 90,
            "paperName": "计算机网络期末考试",
            "schoiceNum": 20,
            "mchoiceNum": 5,
            "judgeNum": 20,
            "fillNum": 20,

        }]
        console.log(info)
        data.course_exams = []
        for (let index = 0; index < info.length; index++) {
            axios.get('http://127.0.0.1/paper_finished/paper_result', {
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
                // console.log(data.course_exams)
            }).catch(function (error: any) {
                console.log(error);
            });
        }
    })
})



function ToExam(paperId: number) {
    router.push({ path: "/stu/Exam", query: { paperId: paperId, stuId: id } })
}
function ToScore(paperId: number) {
    router.push("/stu/Score")
}

function getNowDate(): string {
    const date = new Date();
    let month: string | number = date.getMonth() + 1;
    let strDate: string | number = date.getDate();

    if (month <= 9) {
        month = "0" + month;
    }

    if (strDate <= 9) {
        strDate = "0" + strDate;
    }

    return date.getFullYear() + "-" + month + "-" + strDate + " "
        + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function ifEnd(time: string): boolean {

    var now = new Date(getNowDate())
    var time1 = new Date(time)

    return now > time1
}


</script>

<template>
    <n-card>

        <n-tabs size="large" type="line">
            <n-tab-pane tab="考试" name="2">
                <n-select :options="data.course_options" v-model:value="course"></n-select>
                <div @click="ToExam(item.exam.paperId)" v-for="item in data.course_exams">
                    <Exam_item :info="item.exam" :ifAca="false" :ifTea="false" :ifFinish="false" :stuId="id">
                    </Exam_item>
                </div>
            </n-tab-pane>

            <n-tab-pane tab="成绩" name="3">
                <n-select :options="data.course_options" v-model:value="course"></n-select>
                <div v-for="item in data.course_exams">
                    <Exam_item :info="item.exam" :ifAca="false" :ifTea="false" :ifFinish="true" :stuId="id"
                        v-if="ifEnd(item.exam.endTime)"></Exam_item>
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