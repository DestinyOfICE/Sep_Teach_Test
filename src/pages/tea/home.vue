<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NSelect, NDataTable, DataTableColumns } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router';
import My from "../../components/My.vue";
import Exam_item from '../../components/exam/exam_item.vue';
import { h, ref, watch } from 'vue';
import axios from 'axios';

// import IfLogin from "../store/ifLogin";
// import { useMessage } from 'naive-ui'
// const message = useMessage()
const route = useRoute();
const id = route.query.id;
const course = ref({
    cosId: null,
    cosName: "",
})

const paperId = ref("选择考试")
const exams_finished = ref([
    {
        label: "",
        value: ""
    }
])

const students = ref({
    0: "name"
}

)
//获取同学信息
axios.get('http://127.0.0.1/account/info/teaid_stu', { params: { teaId: id } })
    .then(function (response) {
        console.log(response)
        let data = response.data.info
        for (let i = 0; i < data.length; i++) {
            students.value[data.stuId] = data.stuName
        }

    }).catch(function (response) {
        console.log(response)
    })


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
axios.get('http://127.0.0.1/account/info/teaid_cos', { params: { teaId: id } })
    .then(function (response) {
        console.log(response)
        course.value.cosId = response.data.info.cosId;
        course.value.cosName = response.data.info.cosName;
        console.log(course)

        axios.get('http://127.0.0.1/paper/get_all_paper_cosid', { params: { cosId: course.value.cosId } })
            .then(function (response) {
                exams_finished.value = []
                console.log(response)
                let exams = response.data.all_paper_info;
                for (let i = 0; i < exams.length; i++) {
                    var now = new Date(getNowDate())
                    var time1 = new Date(exams[i].endTime)
                    if (now > time1) {
                        exams_finished.value.push({
                            label: exams[i].paperName,
                            value: exams[i].paperId,
                        })
                    }
                }
                console.log(exams_finished.value)
            })
            .catch(function (response) {
                console.log(response)
            })
    }).catch(function (response) {
        console.log(response)
    })

const scores = ref([{
    name: "",
    score: null
}])
watch(paperId, (val, preVal) => {
    axios.get('http://127.0.0.1/paper_finished/all_paper_result', {
        params:
        {
            paperId: id
        }
    }).then(function (response: any) {
        scores.value = []
        console.log(response)
        let data = response.data.all_paper_result;
        scores.value.push({
            name: students.value[data.stuId],
            score: data.score
        })

    }).catch(function (response) {
        console.log(response)
    })
})


const router = useRouter();
function Selectexam(label: any) {

}

// type Song2 = {
//     name: string
//     content: string
// }
// const data_2: Song2[] = [
//     { name: "3", content: 'Wonderwall' },
//     { name: "4", content: "Don't Look Back in Anger" },
//     { name: "12", content: 'Champagne Supernova' }
// ]

const columns_3 = ref([
    {
        title: '姓名',
        key: 'name'
    },
    {
        title: '分数',
        key: 'score'
    }
])


</script>

<template>
    <n-card>
        <n-tabs size="large" type="line">
            <!-- <n-tab-pane tab="考情查看" name="2">
                <n-dropdown trigger="click" :options="exams" @select="Selectexam">
                    <n-button>选择考试</n-button>
                </n-dropdown>
                <n-space vertical>
                    <n-data-table :columns="columns_2" :data="data_2" :bordered="false"></n-data-table>
                </n-space>
            </n-tab-pane> -->
            <n-tab-pane tab="成绩管理" name="3">
                <!-- {{ paperId }} -->
                <n-select trigger="click" :options="exams_finished" v-model:value="paperId">
                    <!-- <n-button>{{exam}}</n-button> -->
                </n-select>
                <n-space vertical>
                    <n-data-table :columns="columns_3" :data="scores" :bordered="false"></n-data-table>
                </n-space>
            </n-tab-pane>

            <template #suffix>
                <My></My>
            </template>
        </n-tabs>
    </n-card>
</template>

<style>
</style>