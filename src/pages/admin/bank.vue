<script setup lang="ts">
import { NCard, NSpace, NTabs, NTabPane, NButton, NDropdown, NAvatar, NText } from 'naive-ui'
import { useRouter } from 'vue-router';
import My from "../../components/My.vue";
import Exam_item from '../../components/exam/exam_item.vue';
// import IfLogin from "../store/ifLogin";
// import { useMessage } from 'naive-ui'
// const message = useMessage()

const router = useRouter();
</script>

<template>
    <n-card>
        <n-space>
            <n-button>创建题目</n-button>
            <n-button>联系题库</n-button>
        </n-space>
    </n-card>
</template>

<style>
</style>