<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NDataTable, DataTableColumns } from 'naive-ui'
import { useRouter } from 'vue-router';
import My from "../../components/My.vue";
import Exam_item from '../../components/exam/exam_item.vue';
import { h, ref } from 'vue';
// import IfLogin from "../store/ifLogin";
// import { useMessage } from 'naive-ui'
// const message = useMessage()

const exams_unplayed = ref([
    {
        label: "123",
        key: "123"
    }
])
const exams = ref([
    {
        label: "123",
        key: "123"
    }
])
const exams_finished = ref([
    {
        label: "123",
        key: "123"
    }
])
const exam_now = ref("")


const router = useRouter();
function Selectexam() {

}

type Song2 = {
    name: string
    content: string
}

const data_2: Song2[] = [
    { name: "3", content: 'Wonderwall' },
    { name: "4", content: "Don't Look Back in Anger" },
    { name: "12", content: 'Champagne Supernova' }
]
const columns_2 = ref([
    {
        title: '姓名',
        key: 'name'
    },
    {
        title: '作弊内容',
        key: 'content'
    }
])
type Song3 = {
    name: string
    score: string
}
const data_3: Song3[] = [
    { name: "3", score: '100                   ' },
    { name: "4", score: "" },
    { name: "4", score: "90" },
    { name: "4", score: "90" },
    { name: "4", score: "90" },
    { name: "4", score: "90" },
    { name: "12", score: '80' }
]
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

const True = true
</script>

<template>
    <n-card>
        <n-tabs size="large" type="line">
            
            <n-tab-pane tab="考情查看" name="2">
                <n-dropdown trigger="click" :options="exams" @select="Selectexam">
                    <n-button>选择考试</n-button>
                </n-dropdown>
                <n-space vertical>
                    <n-data-table :columns="columns_2" :data="data_2" :bordered="false"></n-data-table>
                </n-space>
            </n-tab-pane>
            <n-tab-pane tab="成绩管理" name="3">
                <n-dropdown trigger="click" :options="exams_finished" @select="Selectexam">
                    <n-button>选择考试</n-button>
                </n-dropdown>
                <n-space vertical>
                    <n-data-table :columns="columns_3" :data="data_3" :bordered="false"></n-data-table>
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