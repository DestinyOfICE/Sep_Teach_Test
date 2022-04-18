<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NAvatar, NText, NInput, NGrid, NGridItem } from 'naive-ui'
import { useRouter } from 'vue-router';
import My from "../../components/My.vue";
import Topic from '../../components/Topics/Topic.vue';
import { ref } from 'vue';
import axios from 'axios';

const router = useRouter();

let schoice = [{
    difficulty: "B",
    answer: "C",
    course: "计算机网络原理",
    id: 228,
    title: "下列关于五层协议的网络体系结构以及各层的主要功能的说法错误的是？",
    choicec: "运输层的任务是选择合适的路由，使发送站的运输层所传下来的分组能够正确无误地按照地址找到目的站。",
    choiced: "应用层直接为用户的应用进程提供服务。",
    choicea: "物理层的任务就是透明地传送比特流。",
    choiceb: "数据链路层的任务是在s两个相邻结点间的线路上无差错地传送以帧（frame）为单位的数据。每一帧包括数据..."
},
{
    difficulty: "B",
    answer: "A",
    course: "计算机网络原理",
    id: 229,
    title: "收发两端之间的传输距离为1000km，信号在媒体上的传播速率为2×10^8m/s。试计算：数据长度为...",
    choicec: "发送时延ts:1µs；传播时延tp:0.5ms",
    choiced: "发送时延ts:10µs；传播时延tp:0.5ms",
    choicea: "发送时延ts:1µs；传播时延tp:5ms",
    choiceb: "发送时延ts:10µs；传播时延tp:5ms"
}];

let mchoice = [{
    difficulty: "B",
    answer: "ABC",
    num: 5,
    course: "计算机网络原理",
    id: 242,
    title: "计算机网络有电路交换、报文交换和分组交换等交换方式，下列说法是正确的？（ ）",
    choices: [
        "电路交换：端对端通信质量因约定了通信资源获得可靠保障",
        "电路交换：对连续传送大量数据效率高。",
        "分组交换：各分组小，路由灵活，网络生存性能好。",
        "报文交换：需要预约传输带宽，通信效率略低",
    ]
},
{
    difficulty: "A",
    answer: "ABCD",
    num: 5,
    course: "计算机网络原理",
    id: 243,
    title: "下列关于数据链路层的功能，正确的有？",
    choices: ["封装成帧",
        "差错控制",
        "流量控制",
        "透明传输"]
}];

let judge = [{
    difficulty: "C",
    answer: "F",
    course: "人工智能",
    id: 222,
    title: "类脑人工智能是指模拟人类大脑的人工智能。( )",
},
{
    difficulty: "B",
    answer: "T",
    course: "人工智能",
    id: 223,
    title: "人类自己的智能体现了通用性。( )",
}];

let fill = [{
    difficulty: "B",
    answer: "分层",
    course: "计算机网络原理",
    id: 215,
    title: "计算机网络的体系结构是一种 _____结构",
},
{
    difficulty: "A",
    answer: "7",
    course: "计算机网络原理",
    id: 216,
    title: "OSI参考模型采用了_____层的体系结构 ",
}];

function getAllTopics() {
    axios.get('http://127.0.0.1:/topic/schoiceList')
        .then(function (response: any) {
            schoice = response.data
        })
    axios.get('http://127.0.0.1/topic/mchoiceList')
        .then(function (response: any) {
            mchoice = response.data
        })
    axios.get('http://127.0.0.1/topic/judgeList')
        .then(function (response: any) {
            judge = response.data
        })
    axios.get('http://127.0.0.1/topic/fillList')
        .then(function (response: any) {
            fill = response.data
        })
    console.log("getAllTopics")
}
getAllTopics()

function Update(value: any) {
    router.push({ path: "/admin/new", query: { id: value[0], type: value[1] } })
}




const course_options = ref([
    {
        label: "语文",
        key: "语文",
    },
    {
        label: "数学",
        key: "数学",
    },
    {
        label: "英语",
        key: "英语",
    },
])
axios.get('http://127.0.0.1/account/info/all_cos')
    .then(function (response) {
        course_options.value = []
        console.log(response)
        let courses = response.data.info
        for (let i = 0; i < courses.length; i++) {
            course_options.value.push({
                label: courses[i].cosName,
                key: courses[i].cosName
            })
        }
    }).catch(function (response) {
        console.log(response)
    })
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
    }, {
        label: "判断",
        key: "判断"
    },])
const type_v = ref("类型")
const degree = ref([
    {
        label: "高",
        key: "高",
    }, {
        label: "中",
        key: "中",
    }, {
        label: "低",
        key: "低",
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
const object = {
    "A": "高",
    "B": "中",
    "C": "低",
}
function show(i: any, type: string): boolean {
    if (course_v.value != "科目" && course_v.value != i.course) {
        console.log(1)
        return false
    } else if (type_v.value != "类型" && type_v.value != type) {
        console.log(2)
        return false
    } else if (degree_v.value != "难度" && degree_v.value != object[i.difficulty]) {

        console.log(3)
        return false
    } else {
        console.log("true")
        return true
    }
}

</script>

<template>
    <n-space style="margin: 10px 0; min-width: 800px;">
        <n-dropdown class="dropdown" size="huge" trigger="click" :options="course_options" @select="SelectCourse">
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
        <div v-for="i in schoice">
            <Topic :topicItem="i" type="schoice" v-if="show(i, '单选')" @getAllTopics="getAllTopics" @Update="Update">
            </Topic>
        </div>
        <div v-for="i in mchoice">
            <Topic :topicItem="i" type="mchoice" v-if="show(i, '多选')" @getAllTopics="getAllTopics" @Update="Update">
            </Topic>
        </div>
        <div v-for="i in judge">
            <Topic :topicItem="i" type="judge" v-if="show(i, '判断')" @getAllTopics="getAllTopics" @Update="Update">
            </Topic>
        </div>
        <div v-for="i in fill">
            <Topic :topicItem="i" type="fill" v-if="show(i, '填空')" @getAllTopics="getAllTopics" @Update="Update">
            </Topic>
        </div>
    </n-space>
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

.problem_item {
    font-size: 12px;
}

.problem_item:hover {
    background-color: #f2f4f7;
}
</style>