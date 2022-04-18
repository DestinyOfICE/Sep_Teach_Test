<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NAvatar, NText, NInput, NGrid, NGridItem, NEllipsis } from 'naive-ui'
import { useRouter } from 'vue-router';
import My from "../../components/My.vue";
import Exam_item from '../../components/exam/exam_item.vue';
import { ref } from 'vue';

import axios from 'axios';

const props = defineProps<{ topicItem: object, type: string }>()

const types = {
    'schoice': "单选题",
    'mchoice': "多选题",
    'judge': "判断题",
    'fill': "填空题",
}
const difficulty = {
    "A": "高",
    "B": "中",
    "C": "低",
    // "D":"",
}

const emit = defineEmits(['getAllTopics', 'Update'])
const refrashTopics = () => {
    emit("getAllTopics")
}

function deleteTopic() {
    axios.post('http://127.0.0.1/topic/delateByIds', {
        id: props.topicItem.id,
        table: props.type
    }).then(function (response) {
        console.log(response)
        refrashTopics()
    }).catch(function (response) {
        console.log(response)
    })
}

function Update() {
    emit("Update", [props.topicItem.id, types[props.type]])
}


</script>

<template>
    <n-grid class="problem_item" x-gap="12" cols="12">

        <n-grid-item span="5">
            <n-ellipsis class="green">
                {{ topicItem.title }}
            </n-ellipsis>
        </n-grid-item>
        <n-grid-item :offset="1">
            <n-button size="small" class="green" @click="Update">编辑</n-button>
        </n-grid-item>
        <n-grid-item>
            <n-button size="small" class="green" @click="deleteTopic">删除</n-button>
        </n-grid-item>
        <n-grid-item>
            <n-ellipsis class="green">
                {{ topicItem.course }}
            </n-ellipsis>
        </n-grid-item>
        <n-grid-item :offset="0">
            <div class="green">{{ types[type] }}</div>
        </n-grid-item>
        <n-grid-item>
            <div class="green">{{ difficulty[topicItem.difficulty] }}</div>
        </n-grid-item>
        <!-- <n-grid-item>
            <div class="green">03/04</div>
        </n-grid-item> -->
    </n-grid>
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

    line-height: 30px;


}

.problem_item {
    font-size: 12px;
}

.problem_item:hover {
    background-color: #f2f4f7;
}
</style>