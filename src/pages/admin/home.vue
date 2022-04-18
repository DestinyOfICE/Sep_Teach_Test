<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NAvatar, NText, NInput, NGrid, NGridItem } from 'naive-ui'
import { useRouter } from 'vue-router';
import My from "../../components/My.vue";
import Exam_item from '../../components/exam/exam_item.vue';
import { ref } from 'vue';
import Bank from './bank.vue';



const router = useRouter();

function ToNew() {
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
                <!-- <n-input type="text" v-model:value="search"></n-input> -->
            </n-space>

            <bank></bank>
        </n-space>
    </n-card>
</template>

<style>
.select {
    width: 100px;
}

.green {
    height: 30px;
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

/* .dropdown *{
    text-align: center;
} */
</style>