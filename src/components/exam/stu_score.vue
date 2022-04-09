<script setup lang="ts">
import { NCard, NInput, NSpace, NButton, NForm, NDivider } from "naive-ui"
import Single from "./single.vue";
import Answer from "./answer.vue";
</script>

<template>
    <div class="stu_exam">
        <n-card class="stu_exam_left" title="考试名称">
            <div class="flex">
                <div>
                    <n-space>
                        <span class="font_2">姓名：{{ "冯鸣" }}</span>
                        <span class="font_2">学号：{{ "202003340304" }}</span>
                    </n-space>
                    <n-space>
                        <span class="font_2">题量：{{ "30" }}</span>
                        <span class="font_2">满分：{{ "100" }}</span>
                        <span class="font_2">考试时间：{{ "2022-03-14 19:13" }}</span>
                    </n-space>
                </div>
                <div>74.7分</div>
            </div>
            <n-divider />

            <n-card :bordered="false" title="一.单选题（共1题，1.0分）">
                <single></single>
                <Answer></Answer>

                <single></single>
                <Answer></Answer>
            </n-card>

            <n-card :bordered="false" title="一.单选题（共1题，1.0分）">
                <single></single>
            </n-card>
        </n-card>
        <n-card class="stu_exam_right">
            <div>
                <span class>1.单选题(1.0分)</span>
                <div style="display: flex;">
                    <div class="exam_num">1</div>
                </div>
            </div>
            <div>
                <span class>2.多选题(1.0分)</span>
                <div style="display: flex;">
                    <div class="exam_num">2</div>
                </div>
            </div>
            <div>
                <span class>3.填空题(1.0分)</span>
                <div style="display: flex;">
                    <div class="exam_num">3</div>
                </div>
            </div>
        </n-card>
    </div>
</template>

<style>
.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.font_2 {
    padding: 5px;
    color: rgb(168, 168, 168);
}

.stu_exam {
    width: 850px;
    height: auto;
    margin: auto;

    display: flex;
    justify-content: space-between;
}
.stu_exam_left {
    width: 600px;
    min-height: 1000px;
    background-color: white;
}
.stu_exam_right {
    width: 230px;
    min-height: 300px;
    height: fit-content;
    background-color: white;
}
.stu_exam_right div {
    margin-top: 5px;
}

.next_q {
    height: 36px;

    padding: 30px 0;

    display: flex;
    justify-content: center;
}
.next_q div {
    width: 90px;
    height: 35px;

    margin: 0 15px;
    border: 1px solid #94c1ff;
    border-radius: 35px;

    color: #3a8bff;

    display: flex;
    justify-content: center;
    align-items: center;
}

#exam_time {
    display: flex;
    align-items: center;
}
#exam_time::before {
    content: url(/favicon.ico);
}

.exam_num {
    width: 30px;
    height: 30px;

    border: 1px solid #94c1ff;
    border-radius: 3px;

    color: #3a8bff;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>