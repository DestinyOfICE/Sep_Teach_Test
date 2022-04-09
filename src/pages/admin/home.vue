<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NAvatar, NText, NInput, NGrid, NGridItem } from 'naive-ui'
import { useRouter } from 'vue-router';
import My from "../../components/My.vue";
import Exam_item from '../../components/exam/exam_item.vue';
import { ref } from 'vue';


// import IfLogin from "../store/ifLogin";
// import { useMessage } from 'naive-ui'
// const message = useMessage()
// const message = useMessage();
const router = useRouter();

const search = ref("");
const course = ref([
    {
        label: "语文",
        key: "语文",
    }, {
        label: "数学",
        key: "数学"
    }, {
        label: "英语",
        key: "英语"
    },])
const course_v = ref("科目")
const type = ref([
    {
        label: "单选",
        key: "单选",
    }, {
        label: "多选",
        key: "多选"
    }, {
        label: "填空",
        key: "填空"
    },])
const type_v = ref("类型")
const degree = ref([
    {
        label: "高",
        key: "高",
    }, {
        label: "中",
        key: "中"
    }, {
        label: "低",
        key: "低"
    },])
const degree_v = ref("难度")

function SelectCourse(key: any) {
    course_v.value = key
}
function SelectType(key: any) {
    type_v.value = key
}
function SelectDegree(key: any) {
    degree_v.value = key
}

function ToNew(){
    router.push("/admin/new")
}
</script>

<template>
    <n-card style="width: 1100px;margin: 10px auto;">
        <n-space vertical>
            <n-space>
                <n-button round @click="ToNew()">创建题目</n-button>
                <n-button round>联系题库</n-button>
                <div style="width: 600px;"></div>
                <n-input type="text" v-model:value="search"></n-input>
            </n-space>

            <n-space style="margin: 10px 0;">
                <n-dropdown
                    class="dropdown"
                    size="huge"
                    trigger="click"
                    :options="course"
                    @select="SelectCourse"
                >
                    <n-button class="select">{{ course_v }}</n-button>
                </n-dropdown>
                <n-dropdown size="huge" trigger="click" :options="type" @select="SelectType">
                    <n-button class="select">{{ type_v }}</n-button>
                </n-dropdown>
                <n-dropdown size="huge" trigger="click" :options="degree" @select="SelectDegree">
                    <n-button class="select">{{ degree_v }}</n-button>
                </n-dropdown>
            </n-space>
            <n-space vertical>
                <n-grid class="problem_item" x-gap="12" cols="12" v-for="i in [1, 2, 3]">
                    <n-grid-item>
                        <div class="green">123132</div>
                    </n-grid-item>
                    <n-grid-item :offset="5">
                        <n-button size="small" class="green">编辑</n-button>
                    </n-grid-item>
                    <n-grid-item>
                        <n-button size="small" class="green">删除</n-button>
                    </n-grid-item>
                    <n-grid-item>
                        <div class="green">语文</div>
                    </n-grid-item>
                    <n-grid-item :offset="0">
                        <div class="green">多选题</div>
                    </n-grid-item>
                    <n-grid-item>
                        <div class="green">难</div>
                    </n-grid-item>
                    <n-grid-item>
                        <div class="green">03/04</div>
                    </n-grid-item>
                </n-grid>
            </n-space>
        </n-space>
    </n-card>
</template>

<style>
.select {
    width: 100px;
}
.green {
    height: 30px;
    /* background-color: rgba(0, 128, 0, 0.24); */
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.problem_item{
    font-size: 12px;
}
.problem_item:hover {
    background-color: #f2f4f7;
}
/* .dropdown *{
    text-align: center;
} */
</style>